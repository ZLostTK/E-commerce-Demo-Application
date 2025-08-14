const express = require("express");
const authRoutes = require("./auth");
const productRoutes = require("./products");
const categoryRoutes = require("./categories");
const orderRoutes = require("./orders");
const userRoutes = require("./users");
const configRoutes = require("./config");

const router = express.Router();

// Mount routes
router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/categories", categoryRoutes);
router.use("/orders", orderRoutes);
router.use("/users", userRoutes);
router.use("/config", configRoutes);

module.exports = router;
