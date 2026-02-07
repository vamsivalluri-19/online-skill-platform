const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { validateLoginInput } = require("../utils/validators");

const router = express.Router();

// ============================================
// LOGIN ENDPOINT
// ============================================

router.post("/login", async (req, res) => {
  try {
    const { error, value } = validateLoginInput(req.body);
    if (error) {
      return res.status(400).json({
        error: "Validation failed",
        details: error.details.map(e => ({
          field: e.path[0],
          message: e.message
        }))
      });
    }

    const { email, password } = value;

    // Find user by email (need to select password field)
    const user = await User.findOne({ email: email.toLowerCase() }).select("+password");

    if (!user) {
      return res.status(401).json({
        error: "Invalid credentials",
        message: "Email or password is incorrect"
      });
    }

    // Compare password
    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({
        error: "Invalid credentials",
        message: "Email or password is incorrect"
      });
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    // Generate JWT token
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Send response
    res.status(200).json({
      success: true,
      message: "Login successful",
      token: token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        isEmailVerified: user.isEmailVerified
      }
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      error: "Login failed",
      message: "An error occurred during login. Please try again."
    });
  }
});

// ============================================
// REGISTER ENDPOINT
// ============================================

router.post("/register", async (req, res) => {
  try {
    const { name, email, password, confirmPassword, newsletter } = req.body;

    // Validation
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({
        error: "Validation failed",
        message: "All fields are required",
        details: [
          { field: "name", message: name ? "" : "Name is required" },
          { field: "email", message: email ? "" : "Email is required" },
          { field: "password", message: password ? "" : "Password is required" },
          { field: "confirmPassword", message: confirmPassword ? "" : "Please confirm your password" }
        ].filter(d => d.message)
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: "Validation failed",
        message: "Please enter a valid email address"
      });
    }

    // Validate name length
    if (name.trim().length < 2) {
      return res.status(400).json({
        error: "Validation failed",
        message: "Name must be at least 2 characters long"
      });
    }

    // Validate password length
    if (password.length < 6) {
      return res.status(400).json({
        error: "Validation failed",
        message: "Password must be at least 6 characters long"
      });
    }

    // Check passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({
        error: "Validation failed",
        message: "Passwords do not match"
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(409).json({
        error: "Email already registered",
        message: "This email is already in use. Please login or use a different email."
      });
    }

    // Create new user
    const user = new User({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: password,
      role: "student",
      newsletter: newsletter || false
    });

    // Save user to database
    await user.save();

    // Generate JWT token
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Send response
    res.status(201).json({
      success: true,
      message: "Registration successful",
      token: token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar
      }
    });

  } catch (error) {
    console.error("Registration error:", error);

    // Handle duplicate key error
    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      return res.status(409).json({
        error: `${field} already exists`,
        message: `This ${field} is already registered.`
      });
    }

    // Handle validation errors
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        error: "Validation failed",
        details: messages
      });
    }

    res.status(500).json({
      error: "Registration failed",
      message: "An error occurred during registration. Please try again."
    });
  }
});

// ============================================
// VERIFY TOKEN ENDPOINT
// ============================================

router.get("/verify", async (req, res) => {
  try {
    // Get token from header
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        error: "No authentication token provided",
        message: "Please include a valid JWT token in the Authorization header"
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({
        error: "User not found",
        message: "The user associated with this token was not found."
      });
    }

    if (!user.isActive) {
      return res.status(403).json({
        error: "Account disabled",
        message: "Your account has been disabled."
      });
    }

    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        isEmailVerified: user.isEmailVerified
      }
    });

  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        error: "Token expired",
        message: "Please login again",
        expiredAt: error.expiredAt
      });
    }

    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        error: "Invalid token",
        message: "The token provided is not valid"
      });
    }

    console.error("Token verification error:", error);
    res.status(500).json({
      error: "Verification failed",
      message: "An error occurred during verification."
    });
  }
});

// ============================================
// GET CURRENT USER ENDPOINT
// ============================================

router.get("/me", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        error: "No authentication token provided"
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({
        error: "User not found"
      });
    }

    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        createdAt: user.createdAt
      }
    });

  } catch (error) {
    console.error("Get user error:", error);
    res.status(500).json({
      error: "Failed to retrieve user data"
    });
  }
});

// ============================================
// LOGOUT ENDPOINT (Optional - mostly client-side)
// ============================================

router.post("/logout", async (req, res) => {
  try {
    // Client will remove the token from localStorage
    res.status(200).json({
      success: true,
      message: "Logged out successfully"
    });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({
      error: "Logout failed"
    });
  }
});

module.exports = router;