const Product = require("../models/Product");
const { asyncHandler } = require("../utils/asyncHandler");

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await Product.countDocuments({ isActive: true });

  // Build query
  let query = Product.find({ isActive: true });

  // Search functionality
  if (req.query.search) {
    query = query.find({
      $text: { $search: req.query.search },
    });
  }

  // Filter by category
  if (req.query.category) {
    query = query.find({ category: req.query.category });
  }

  // Filter by price range
  if (req.query.minPrice || req.query.maxPrice) {
    const priceFilter = {};
    if (req.query.minPrice) priceFilter.$gte = parseFloat(req.query.minPrice);
    if (req.query.maxPrice) priceFilter.$lte = parseFloat(req.query.maxPrice);
    query = query.find({ price: priceFilter });
  }

  // Filter by discount
  if (req.query.hasDiscount === 'true') {
    query = query.find({ $or: [{ discount: { $gt: 0 } }, { originalPrice: { $gt: 0 } }] });
  }

  // Sort
  if (req.query.sort) {
    const sortOrder = req.query.order === "desc" ? -1 : 1;
    query = query.sort({ [req.query.sort]: sortOrder });
  } else {
    query = query.sort({ createdAt: -1 });
  }

  // Pagination
  query = query.skip(startIndex).limit(limit);

  const products = await query;

  // Pagination result
  const pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit,
    };
  }

  res.json({
    success: true,
    count: products.length,
    pagination,
    data: products,
    message: "Products retrieved successfully",
  });
});

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
    .populate("createdBy", "firstName lastName");

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  res.json({
    success: true,
    data: product,
    message: "Product retrieved successfully",
  });
});

// @desc    Create new product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  req.body.createdBy = req.user.id;

  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    data: product,
    message: "Product created successfully",
  });
});

// @desc    Update product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.json({
    success: true,
    data: product,
    message: "Product updated successfully",
  });
});

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  await product.remove();

  res.json({
    success: true,
    message: "Product deleted successfully",
  });
});

// @desc    Get featured products
// @route   GET /api/products/featured
// @access  Public
const getFeaturedProducts = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 6;

  const products = await Product.find({
    isActive: true,
    isFeatured: true,
  })
    .limit(limit)
    .sort({ createdAt: -1 });

  res.json({
    success: true,
    count: products.length,
    data: products,
    message: "Featured products retrieved successfully",
  });
});

// @desc    Get deal of the day products
// @route   GET /api/products/deal-of-the-day
// @access  Public
const getDealOfTheDay = asyncHandler(async (req, res) => {
  const products = await Product.find({
    isActive: true,
    isDealOfTheDay: true,
  }).sort({ createdAt: -1 });

  res.json({
    success: true,
    count: products.length,
    data: products,
    message: "Deal of the day products retrieved successfully",
  });
});

// @desc    Get products by category
// @route   GET /api/products/category/:category
// @access  Public
const getProductsByCategory = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await Product.countDocuments({
    category: req.params.category,
    isActive: true,
  });

  const products = await Product.find({
    category: req.params.category,
    isActive: true,
  })
    .skip(startIndex)
    .limit(limit)
    .sort({ createdAt: -1 });

  // Pagination result
  const pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit,
    };
  }

  res.json({
    success: true,
    count: products.length,
    pagination,
    data: products,
    message: "Products by category retrieved successfully",
  });
});

// @desc    Get new arrivals
// @route   GET /api/products/new-arrivals
// @access  Public
const getNewArrivals = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 4;

  const products = await Product.find({ isActive: true })
    .sort({ createdAt: -1 })
    .limit(limit);

  res.json({
    success: true,
    count: products.length,
    data: products,
    message: "New arrivals retrieved successfully",
  });
});

// @desc    Get trending products
// @route   GET /api/products/trending
// @access  Public
const getTrendingProducts = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 4;

  const products = await Product.find({ isActive: true })
    .sort({ rating: -1, numReviews: -1 })
    .limit(limit);

  res.json({
    success: true,
    count: products.length,
    data: products,
    message: "Trending products retrieved successfully",
  });
});

// @desc    Get top rated products
// @route   GET /api/products/top-rated
// @access  Public
const getTopRatedProducts = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit, 10) || 4;

  const products = await Product.find({ isActive: true })
    .sort({ rating: -1 })
    .limit(limit);

  res.json({
    success: true,
    count: products.length,
    data: products,
    message: "Top rated products retrieved successfully",
  });
});

// @desc    Get categories
// @route   GET /api/products/categories
// @access  Public
const getCategories = asyncHandler(async (req, res) => {
  const categories = await Product.aggregate([
    { $match: { isActive: true } },
    { $group: { _id: "$category", count: { $sum: 1 } } },
    { $sort: { count: -1 } }
  ]);

  res.json({
    success: true,
    data: categories,
    message: "Categories retrieved successfully",
  });
});

module.exports = {
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
};
