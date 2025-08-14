const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const config = require("./config");

const { errorHandler } = require("./middleware/errorHandler");
const { notFoundHandler } = require("./middleware/notFoundHandler");
const routes = require("./routes");

const app = express();

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: config.RATE_LIMIT.WINDOW_MS,
  max: config.RATE_LIMIT.MAX_REQUESTS,
  message: {
    success: false,
    message: "Too many requests from this IP, please try again later.",
  },
});
app.use("/api/", limiter);

// CORS configuration
const corsOptions = {
  origin: config.CORS_ORIGIN,
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Logging middleware
if (config.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("combined"));
}

// Body parsing middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is running properly",
    timestamp: new Date().toISOString(),
    environment: config.NODE_ENV,
    version: process.env.npm_package_version || "1.0.0",
    business: {
      name: config.BUSINESS.NAME,
      email: config.BUSINESS.EMAIL,
      phone: config.BUSINESS.PHONE,
    },
  });
});

// API routes
app.use("/api", routes);

// 404 handler
app.use(notFoundHandler);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
