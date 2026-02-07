const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  // Basic Information
  name: {
    type: String,
    required: [true, "Please provide your name"],
    trim: true,
    minlength: [2, "Name must be at least 2 characters long"],
    maxlength: [50, "Name must not exceed 50 characters"]
  },

  email: {
    type: String,
    required: [true, "Please provide an email address"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please provide a valid email address"
    ]
  },

  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: [6, "Password must be at least 6 characters long"],
    select: false // Don't include password in queries by default
  },

  // Profile Information
  avatar: {
    type: String,
    default: null
  },

  oauthProvider: {
    type: String,
    enum: ["google", "github", "facebook", null],
    default: null
  },

  oauthId: {
    type: String,
    default: null
  },

  bio: {
    type: String,
    maxlength: [500, "Bio must not exceed 500 characters"],
    default: ""
  },

  role: {
    type: String,
    enum: ["student", "instructor", "admin"],
    default: "student"
  },

  // Account Status
  isEmailVerified: {
    type: Boolean,
    default: false
  },

  isActive: {
    type: Boolean,
    default: true
  },

  newsletter: {
    type: Boolean,
    default: false
  },

  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now
  },

  updatedAt: {
    type: Date,
    default: Date.now
  },

  lastLogin: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
});

// ============================================
// INDEXES
// ============================================

userSchema.index({ email: 1 });
userSchema.index({ oauthProvider: 1, oauthId: 1 });
userSchema.index({ createdAt: -1 });

// ============================================
// MIDDLEWARE - Hash password before saving
// ============================================

userSchema.pre("save", async function (next) {
  // Only hash password if it has been modified
  if (!this.isModified("password")) {
    return next();
  }

  try {
    // Generate salt
    const salt = await bcrypt.genSalt(10);
    
    // Hash password
    this.password = await bcrypt.hash(this.password, salt);
    
    next();
  } catch (error) {
    next(error);
  }
});

// ============================================
// INSTANCE METHODS
// ============================================

// Compare password method
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Get user profile (exclude sensitive data)
userSchema.methods.getProfile = function () {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

// ============================================
// STATIC METHODS
// ============================================

// Find by email
userSchema.statics.findByEmail = function (email) {
  return this.findOne({ email: email.toLowerCase() });
};

// Find active users only
userSchema.statics.findActive = function () {
  return this.find({ isActive: true });
};

// ============================================
// EXPORT MODEL
// ============================================

module.exports = mongoose.model("User", userSchema);