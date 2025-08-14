require("dotenv").config();

const config = {
  // Server Configuration
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 3000,

  // Database Configuration
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/ecommerce",

  // JWT Configuration
  JWT_SECRET:
    process.env.JWT_SECRET ||
    "your-super-secret-jwt-key-change-this-in-production",
  JWT_EXPIRE: process.env.JWT_EXPIRE || "30d",

  // CORS Configuration
  CORS_ORIGIN: process.env.CORS_ORIGIN?.split(",") || [
    "http://localhost:5173",
    "http://localhost:3000",
  ],

  // Logging
  LOG_LEVEL: process.env.LOG_LEVEL || "info",

  // Email Configuration
  SMTP: {
    HOST: process.env.SMTP_HOST || "smtp.gmail.com",
    PORT: parseInt(process.env.SMTP_PORT) || 587,
    USER: process.env.SMTP_USER,
    PASS: process.env.SMTP_PASS,
  },

  // Stripe Configuration
  STRIPE: {
    SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
  },

  // Pexels API Configuration
  PEXELS_API_KEY: process.env.PEXELS_API_KEY,

  // File Upload Configuration
  UPLOAD: {
    PATH: process.env.UPLOAD_PATH || "uploads",
    MAX_FILE_SIZE: parseInt(process.env.MAX_FILE_SIZE) || 5242880, // 5MB
  },

  // Security Configuration
  RATE_LIMIT: {
    WINDOW_MS: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 900000, // 15 minutes
    MAX_REQUESTS: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,
  },

  // Business Configuration
  BUSINESS: {
    NAME: "Anon E-Commerce",
    EMAIL: "info@anon.com",
    PHONE: "+1 (555) 123-4567",
    ADDRESS: "123 Fashion Street, New York, NY 10001",
    FREE_SHIPPING_THRESHOLD: 55,
    CURRENCY: "USD",
    CURRENCY_SYMBOL: "$",
  },
};

module.exports = config;
