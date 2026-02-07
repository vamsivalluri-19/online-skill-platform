const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Verify JWT token
const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        error: "No token provided"
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "your-secret-key-change-in-production"
    );

    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({
        error: "User not found"
      });
    }

    req.user = {
      userId: user._id,
      email: user.email,
      fullName: user.fullName
    };

    next();
  } catch (error) {
    res.status(401).json({
      error: "Invalid token"
    });
  }
};

module.exports = { verifyToken };