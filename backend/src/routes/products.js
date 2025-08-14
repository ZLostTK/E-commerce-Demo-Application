const express = require("express");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getFeaturedProducts,
  getDealOfTheDay,
  getProductsByCategory,
  getNewArrivals,
  getTrendingProducts,
  getTopRatedProducts,
  getCategories,
} = require("../controllers/productController");
const { protect, authorize } = require("../middleware/auth");

const router = express.Router();

// Public routes
router.get("/", getProducts);
router.get("/featured", getFeaturedProducts);
router.get("/deal-of-the-day", getDealOfTheDay);
router.get("/new-arrivals", getNewArrivals);
router.get("/trending", getTrendingProducts);
router.get("/top-rated", getTopRatedProducts);
router.get("/categories", getCategories);
router.get("/category/:category", getProductsByCategory);
router.get("/:id", getProduct);

// Protected routes (Admin only)
router.post("/", protect, authorize("admin"), createProduct);
router.put("/:id", protect, authorize("admin"), updateProduct);
router.delete("/:id", protect, authorize("admin"), deleteProduct);

module.exports = router;
