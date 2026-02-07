// ============================================
// utils/validators.js
// ============================================
// Comprehensive validation schemas using Joi

const Joi = require("joi");

// ============================================
// LOGIN VALIDATION SCHEMA
// ============================================
const loginSchema = Joi.object({
  email: Joi.string()
    .email()
    .lowercase()
    .trim()
    .required()
    .messages({
      "string.email": "Please provide a valid email address",
      "any.required": "Email is required",
      "string.empty": "Email cannot be empty"
    }),
  
  password: Joi.string()
    .min(6)
    .required()
    .messages({
      "string.min": "Password must be at least 6 characters long",
      "any.required": "Password is required",
      "string.empty": "Password cannot be empty"
    })
});

// ============================================
// REGISTER VALIDATION SCHEMA
// ============================================
const registerSchema = Joi.object({
  name: Joi.string()
    .trim()
    .min(2)
    .max(50)
    .required()
    .messages({
      "string.min": "Name must be at least 2 characters long",
      "string.max": "Name must not exceed 50 characters",
      "any.required": "Name is required",
      "string.empty": "Name cannot be empty"
    }),
  
  email: Joi.string()
    .email()
    .lowercase()
    .trim()
    .required()
    .messages({
      "string.email": "Please provide a valid email address",
      "any.required": "Email is required",
      "string.empty": "Email cannot be empty"
    }),
  
  password: Joi.string()
    .min(6)
    .max(50)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .required()
    .messages({
      "string.min": "Password must be at least 6 characters long",
      "string.max": "Password must not exceed 50 characters",
      "string.pattern.base": "Password must contain uppercase, lowercase, and numbers",
      "any.required": "Password is required",
      "string.empty": "Password cannot be empty"
    }),
  
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .messages({
      "any.only": "Passwords do not match",
      "any.required": "Please confirm your password",
      "string.empty": "Confirm password cannot be empty"
    }),

  newsletter: Joi.boolean()
    .optional()
    .default(false)
    .messages({
      "boolean.base": "Newsletter must be a boolean value"
    }),

  role: Joi.string()
    .valid("student", "instructor", "admin")
    .optional()
    .default("student")
    .messages({
      "any.only": "Role must be student, instructor, or admin"
    })
});

// ============================================
// VALIDATION FUNCTIONS
// ============================================
const validateLoginInput = (data) => {
  return loginSchema.validate(data, { abortEarly: false });
};

const validateRegisterInput = (data) => {
  return registerSchema.validate(data, { abortEarly: false });
};

// ============================================
// ERROR FORMATTER
// ============================================
const formatValidationError = (error) => {
  if (error.details) {
    const details = error.details.map(detail => ({
      field: detail.path.join('.'),
      message: detail.message
    }));
    return details;
  }
  return [{ message: 'Validation error' }];
};

module.exports = {
  validateLoginInput,
  validateRegisterInput,
  formatValidationError
};