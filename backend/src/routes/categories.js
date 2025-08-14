const express = require("express");
const Category = require("../models/Category");
const { asyncHandler } = require("../utils/asyncHandler");
const { protect, authorize } = require("../middleware/auth");

const router = express.Router();

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({ isActive: true })
    .populate("parent", "name")
    .sort({ sortOrder: 1, name: 1 });

  res.json({
    success: true,
    count: categories.length,
    data: categories,
    message: "Categories retrieved successfully",
  });
});

// @desc    Get single category
// @route   GET /api/categories/:id
// @access  Public
const getCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id)
    .populate("parent", "name")
    .populate("subcategories", "name");

  if (!category) {
    return res.status(404).json({
      success: false,
      message: "Category not found",
    });
  }

  res.json({
    success: true,
    data: category,
    message: "Category retrieved successfully",
  });
});

// @desc    Create category
// @route   POST /api/categories
// @access  Private/Admin
const createCategory = asyncHandler(async (req, res) => {
  const category = await Category.create(req.body);

  res.status(201).json({
    success: true,
    data: category,
    message: "Category created successfully",
  });
});

// @desc    Update category
// @route   PUT /api/categories/:id
// @access  Private/Admin
const updateCategory = asyncHandler(async (req, res) => {
  let category = await Category.findById(req.params.id);

  if (!category) {
    return res.status(404).json({
      success: false,
      message: "Category not found",
    });
  }

  category = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.json({
    success: true,
    data: category,
    message: "Category updated successfully",
  });
});

// @desc    Delete category
// @route   DELETE /api/categories/:id
// @access  Private/Admin
const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return res.status(404).json({
      success: false,
      message: "Category not found",
    });
  }

  await category.remove();

  res.json({
    success: true,
    message: "Category deleted successfully",
  });
});

// Public routes
router.get("/", getCategories);
router.get("/:id", getCategory);

// Protected routes (Admin only)
router.post("/", protect, authorize("admin"), createCategory);
router.put("/:id", protect, authorize("admin"), updateCategory);
router.delete("/:id", protect, authorize("admin"), deleteCategory);

module.exports = router;
