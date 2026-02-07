// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const passport = require("passport");
require("dotenv").config();

const app = express();

// ============================================
// VALIDATION - Check required environment variables
// ============================================
const isProduction = (process.env.NODE_ENV || "development") === "production";
const requiredEnvVars = isProduction ? ["JWT_SECRET"] : []; // MongoDB optional for now
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  console.error(`❌ Missing environment variables: ${missingEnvVars.join(", ")}`);
  process.exit(1);
}

// ============================================
// SECURITY MIDDLEWARE
// ============================================

// Helmet.js - Set security HTTP headers
app.use(helmet({
  crossOriginResourcePolicy: false // Allow CORS with helmet
}));

// CORS configuration
const allowedOrigins = [
  process.env.FRONTEND_URL,
  "https://vamsivalluri-19.github.io",
  "https://vamsivalluri-19.github.io/online-skill-platform",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "http://localhost:5500",
  "http://127.0.0.1:5500",
  "http://localhost:8000"
].filter(Boolean);

// CORS middleware with better configuration
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, curl requests)
      if (!origin) {
        return callback(null, true);
      }

      // Allow all origins in development
      if ((process.env.NODE_ENV || "development") === "development") {
        return callback(null, true);
      }

      // Check against allowed origins in production
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // Allow all origins as fallback (more permissive for initial testing)
      return callback(null, true);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
    exposedHeaders: ["Content-Length", "Authorization"],
    optionsSuccessStatus: 200,
    maxAge: 86400 // 24 hours
  })
);

// Preflight requests handler
app.options("*", cors());

// Rate limiting - Prevent brute force attacks
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  skip: (req) => req.path === "/api/health" // Skip rate limiting for health check
});

app.use("/api/", limiter);

// Auth-specific rate limiting (stricter)
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 login attempts per windowMs
  message: "Too many login attempts, please try again after 15 minutes.",
  skipSuccessfulRequests: true // Don't count successful requests
});

// ============================================
// BODY PARSER & REQUEST MIDDLEWARE
// ============================================

// Body parser middleware
app.use(express.json({ limit: "10kb" })); // Limit request body size
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Passport initialization
require("./config/passport")(passport);
app.use(passport.initialize());

// Request logging middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path}`);
  
  // Log request body for POST/PUT requests (excluding passwords)
  if (["POST", "PUT", "PATCH"].includes(req.method) && req.body) {
    const logBody = { ...req.body };
    if (logBody.password) logBody.password = "***";
    console.log("Request body:", logBody);
  }
  
  next();
});

// ============================================
// DATABASE CONNECTION
// ============================================

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/edulearn";
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000
    });
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    // Retry connection after 5 seconds
    setTimeout(connectDB, 5000);
  }
};

// Handle MongoDB connection events
mongoose.connection.on("disconnected", () => {
  console.warn("⚠️  MongoDB disconnected. Attempting to reconnect...");
  setTimeout(connectDB, 5000);
});

mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB error:", err.message);
});

// Connect to database
connectDB();

// ============================================
// ROUTES
// ============================================

// Health check endpoint
app.get("/api/health", (req, res) => {
  const healthStatus = {
    status: "ok",
    message: "Server is running",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    mongodb: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    environment: process.env.NODE_ENV || "development",
    api_url: process.env.FRONTEND_URL || "No FRONTEND_URL set"
  };
  
  console.log("✅ Health check requested:", healthStatus);
  res.status(200).json(healthStatus);
});

// Auth routes with stricter rate limiting on login
const authRoutes = require("./routes/auth");
app.use("/api/auth/login", authLimiter); // Apply stricter rate limiter
app.use("/api/auth", authRoutes);

// ============================================
// 404 HANDLER
// ============================================

app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
    path: req.path,
    method: req.method,
    message: "The requested endpoint does not exist"
  });
});

// ============================================
// GLOBAL ERROR HANDLER
// ============================================

app.use((err, req, res, next) => {
  console.error("❌ Error:", {
    name: err.name,
    message: err.message,
    status: err.status || 500
  });

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((error) => error.message);
    return res.status(400).json({
      error: "Validation failed",
      details: messages
    });
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res.status(409).json({
      error: `${field} already exists`,
      field: field
    });
  }

  // JWT errors
  if (err.name === "JsonWebTokenError") {
    return res.status(401).json({
      error: "Invalid or malformed token"
    });
  }

  if (err.name === "TokenExpiredError") {
    return res.status(401).json({
      error: "Token has expired",
      expiredAt: err.expiredAt
    });
  }

  // Cast error (invalid MongoDB ID)
  if (err.name === "CastError") {
    return res.status(400).json({
      error: "Invalid ID format"
    });
  }

  // Custom API error
  if (err.isOperational) {
    return res.status(err.status || 500).json({
      error: err.message
    });
  }

  // Default error
  res.status(err.status || 500).json({
    error: process.env.NODE_ENV === "production" 
      ? "An error occurred" 
      : err.message || "An error occurred"
  });
});

// ============================================
// SERVER STARTUP
// ============================================

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log("\n" + "=".repeat(60));
  console.log("🚀 VRLearn Backend Server Started Successfully!");
  console.log("=".repeat(60));
  console.log(`📍 Server URL: ${process.env.NODE_ENV === "production" ? `https://${process.env.RENDER_EXTERNAL_URL || "your-domain"}` : `http://localhost:${PORT}`}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`🔌 Port: ${PORT}`);
  console.log(`🌐 Frontend URL: ${process.env.FRONTEND_URL || "Not configured"}`);
  console.log(`🔒 CORS enabled for: ${allowedOrigins.length ? allowedOrigins.join(", ") : "all origins"}`);
  console.log(`📊 MongoDB: ${mongoose.connection.readyState === 1 ? "✅ Connected" : "⏳ Connecting..."}`);
  console.log("=".repeat(60) + "\n");
});

// ============================================
// GRACEFUL SHUTDOWN
// ============================================

const gracefulShutdown = (signal) => {
  console.log(`\n${signal} received. Shutting down gracefully...`);
  
  server.close(async () => {
    console.log("✅ HTTP server closed");
    
    try {
      await mongoose.connection.close(false);
      console.log("✅ MongoDB connection closed");
    } catch (err) {
      console.error("❌ Error closing MongoDB connection:", err);
    }
    
    console.log("👋 Application terminated");
    process.exit(0);
  });

  // Force shutdown after 10 seconds
  setTimeout(() => {
    console.error("❌ Could not close connections in time, forcefully shutting down");
    process.exit(1);
  }, 10000);
};

process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
process.on("SIGINT", () => gracefulShutdown("SIGINT"));

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error("❌ Uncaught Exception:", err);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("❌ Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1);
});

module.exports = app;
