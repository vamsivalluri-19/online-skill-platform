
// routes/auth.js - Authentication Routes
// ============================================
// Save this as: backend/routes/auth.js

const express = require("express");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passport = require("passport");
const User = require("../models/User");
const { validateLoginInput, validateRegisterInput, formatValidationError } = require("../utils/validators");

const router = express.Router();

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5500";

const buildFrontendRedirect = (params) => {
  const searchParams = new URLSearchParams(params);
  return `${FRONTEND_URL}/login.html?${searchParams.toString()}`;
};

const issueJwt = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET || "your-super-secret-jwt-key-change-this-in-production-1234567890",
    { expiresIn: "7d" }
  );
};

const ensureStrategy = (strategy) => {
  return (req, res, next) => {
    if (!passport._strategy(strategy)) {
      return res.status(501).json({
        success: false,
        error: `${strategy} OAuth is not configured on the server`
      });
    }
    return next();
  };
};

// ============================================
// AUTHENTICATION MIDDLEWARE
// ============================================
const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ success: false, error: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production-1234567890');
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Token verification failed:", error.message);
    return res.status(401).json({ success: false, error: "Invalid or expired token" });
  }
};

// ============================================
// POST /api/auth/register
// ============================================
router.post("/register", async (req, res) => {
  try {
    console.log("📝 Register endpoint - Body:", JSON.stringify(req.body, null, 2));

    // Validate input
    const { error, value } = validateRegisterInput(req.body);
    if (error) {
      console.log("❌ Validation error:", error.details);
      const details = formatValidationError(error);
      return res.status(400).json({
        success: false,
        error: "Validation failed",
        details: details
      });
    }

    const { name, email, password, confirmPassword, newsletter, role } = value;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("❌ Email already registered:", email);
      return res.status(409).json({
        success: false,
        error: "This email is already registered. Please login or use a different email."
      });
    }

    // Create new user
    const user = new User({
      name,
      email,
      password,
      newsletter: newsletter || false,
      role: role || "student"
    });

    // Save user to database
    await user.save();
    console.log("✅ User registered successfully:", user._id);

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production-1234567890',
      { expiresIn: "7d" }
    );

    return res.status(201).json({
      success: true,
      message: "Registration successful",
      token: token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        newsletter: user.newsletter,
        createdAt: user.createdAt
      }
    });

  } catch (error) {
    console.error("❌ Register error:", error);
    return res.status(500).json({
      success: false,
      error: "Registration failed",
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// ============================================
// POST /api/auth/login
// ============================================
router.post("/login", async (req, res) => {
  try {
    console.log("🔐 Login endpoint - Email:", req.body.email);

    // Validate input
    const { error, value } = validateLoginInput(req.body);
    if (error) {
      console.log("❌ Validation error:", error.details);
      const details = formatValidationError(error);
      return res.status(400).json({
        success: false,
        error: "Validation failed",
        details: details
      });
    }

    const { email, password } = value;

    // Find user and check password
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      console.log("❌ User not found:", email);
      return res.status(401).json({
        success: false,
        error: "Invalid email or password"
      });
    }

    // Compare passwords
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      console.log("❌ Incorrect password for:", email);
      return res.status(401).json({
        success: false,
        error: "Invalid email or password"
      });
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production-1234567890',
      { expiresIn: "7d" }
    );

    console.log("✅ User logged in successfully:", user._id);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token: token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        profileImage: user.profileImage
      }
    });

  } catch (error) {
    console.error("❌ Login error:", error);
    return res.status(500).json({
      success: false,
      error: "Login failed",
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// ============================================
// OAUTH ROUTES
// ============================================

router.get(
  "/google",
  ensureStrategy("google"),
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  ensureStrategy("google"),
  passport.authenticate("google", { session: false, failureRedirect: buildFrontendRedirect({ error: "google_oauth_failed" }) }),
  (req, res) => {
    const token = issueJwt(req.user);
    return res.redirect(buildFrontendRedirect({ token }));
  }
);

router.get(
  "/github",
  ensureStrategy("github"),
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
  "/github/callback",
  ensureStrategy("github"),
  passport.authenticate("github", { session: false, failureRedirect: buildFrontendRedirect({ error: "github_oauth_failed" }) }),
  (req, res) => {
    const token = issueJwt(req.user);
    return res.redirect(buildFrontendRedirect({ token }));
  }
);

router.get(
  "/facebook",
  ensureStrategy("facebook"),
  passport.authenticate("facebook", { scope: ["email"] })
);

router.get(
  "/facebook/callback",
  ensureStrategy("facebook"),
  passport.authenticate("facebook", { session: false, failureRedirect: buildFrontendRedirect({ error: "facebook_oauth_failed" }) }),
  (req, res) => {
    const token = issueJwt(req.user);
    return res.redirect(buildFrontendRedirect({ token }));
  }
);

// ============================================
// GET /api/auth/verify
// ============================================
router.get("/verify", verifyToken, async (req, res) => {
  try {
    console.log("🔍 Verify token - User:", req.user.id);

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        error: "User not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Token is valid",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    console.error("❌ Verify error:", error);
    return res.status(401).json({
      success: false,
      error: "Invalid or expired token"
    });
  }
});

// ============================================
// POST /api/auth/refresh
// ============================================
router.post("/refresh", verifyToken, async (req, res) => {
  try {
    console.log("🔄 Refresh token - User:", req.user.id);

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        error: "User not found"
      });
    }

    // Generate new token
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-this-in-production-1234567890',
      { expiresIn: "7d" }
    );

    console.log("✅ Token refreshed for user:", user._id);

    return res.status(200).json({
      success: true,
      message: "Token refreshed successfully",
      token: token
    });

  } catch (error) {
    console.error("❌ Refresh error:", error);
    return res.status(401).json({
      success: false,
      error: "Token refresh failed"
    });
  }
});

// ============================================
// POST /api/auth/logout
// ============================================
router.post("/logout", verifyToken, (req, res) => {
  try {
    console.log("👋 Logout - User:", req.user.id);
    
    // In a real application, you might want to blacklist the token
    // For now, just confirm logout
    return res.status(200).json({
      success: true,
      message: "Logged out successfully"
    });
  } catch (error) {
    console.error("❌ Logout error:", error);
    return res.status(500).json({
      success: false,
      error: "Logout failed"
    });
  }
});

module.exports = router;