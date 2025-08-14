const express = require("express");
const {
  getBusinessConfig,
  getPublicConfig,
} = require("../controllers/configController");

const router = express.Router();

// Public routes
router.get("/public", getPublicConfig);
router.get("/", getBusinessConfig);

module.exports = router;
