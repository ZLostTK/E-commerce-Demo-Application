const app = require("./app");
const { connectDB } = require("./config/database");
const config = require("./config");

const startServer = async () => {
  try {
    // Connect to database
    await connectDB();

    // Start server
    const server = app.listen(config.PORT, () => {
      console.log(
        `🚀 Server running in ${config.NODE_ENV} mode on port ${config.PORT}`
      );
      console.log(`📊 Health check: http://localhost:${config.PORT}/health`);
      console.log(`🔗 API Base URL: http://localhost:${config.PORT}/api`);
      console.log(`🏢 Business: ${config.BUSINESS.NAME}`);
      console.log(`📧 Contact: ${config.BUSINESS.EMAIL}`);
    });

    // Handle unhandled promise rejections
    process.on("unhandledRejection", (err, promise) => {
      console.log(`Error: ${err.message}`);
      server.close(() => process.exit(1));
    });

    // Handle uncaught exceptions
    process.on("uncaughtException", (err) => {
      console.log(`Error: ${err.message}`);
      process.exit(1);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
