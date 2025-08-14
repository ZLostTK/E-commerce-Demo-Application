const mongoose = require("mongoose");
const logger = require("../utils/logger");

const connectDB = async () => {
  try {
    const mongoURI =
      process.env.MONGODB_URI || "mongodb://localhost:27017/ecommerce";

    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    logger.info(`📦 MongoDB Connected: ${conn.connection.host}`);

    // Handle connection events
    mongoose.connection.on("error", (err) => {
      logger.error("MongoDB connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      logger.warn("MongoDB disconnected");
    });

    mongoose.connection.on("reconnected", () => {
      logger.info("MongoDB reconnected");
    });
  } catch (error) {
    logger.error("Database connection failed:", error);
    process.exit(1);
  }
};

module.exports = { connectDB };
