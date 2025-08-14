const express = require("express");
const Order = require("../models/Order");
const { asyncHandler } = require("../utils/asyncHandler");
const { protect, authorize } = require("../middleware/auth");

const router = express.Router();

// @desc    Get user orders
// @route   GET /api/orders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user.id })
    .populate("orderItems.product", "name images")
    .sort({ createdAt: -1 });

  res.json({
    success: true,
    count: orders.length,
    data: orders,
    message: "Orders retrieved successfully",
  });
});

// @desc    Get single order
// @route   GET /api/orders/:id
// @access  Private
const getOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)
    .populate("user", "firstName lastName email")
    .populate("orderItems.product", "name images price");

  if (!order) {
    return res.status(404).json({
      success: false,
      message: "Order not found",
    });
  }

  // Make sure user owns order or is admin
  if (order.user._id.toString() !== req.user.id && req.user.role !== "admin") {
    return res.status(401).json({
      success: false,
      message: "Not authorized to access this order",
    });
  }

  res.json({
    success: true,
    data: order,
    message: "Order retrieved successfully",
  });
});

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const createOrder = asyncHandler(async (req, res) => {
  const { orderItems, shippingAddress, paymentMethod } = req.body;

  if (orderItems && orderItems.length === 0) {
    return res.status(400).json({
      success: false,
      message: "No order items",
    });
  }

  const order = await Order.create({
    user: req.user.id,
    orderItems,
    shippingAddress,
    paymentMethod,
  });

  res.status(201).json({
    success: true,
    data: order,
    message: "Order created successfully",
  });
});

// @desc    Update order to paid
// @route   PUT /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return res.status(404).json({
      success: false,
      message: "Order not found",
    });
  }

  order.isPaid = true;
  order.paidAt = Date.now();
  order.paymentResult = {
    id: req.body.id,
    status: req.body.status,
    update_time: req.body.update_time,
    email_address: req.body.payer.email_address,
  };

  const updatedOrder = await order.save();

  res.json({
    success: true,
    data: updatedOrder,
    message: "Order updated to paid",
  });
});

// @desc    Update order to delivered
// @route   PUT /api/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return res.status(404).json({
      success: false,
      message: "Order not found",
    });
  }

  order.isDelivered = true;
  order.deliveredAt = Date.now();

  const updatedOrder = await order.save();

  res.json({
    success: true,
    data: updatedOrder,
    message: "Order updated to delivered",
  });
});

// @desc    Get all orders (Admin)
// @route   GET /api/orders/admin
// @access  Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await Order.countDocuments();

  const orders = await Order.find()
    .populate("user", "firstName lastName email")
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
    count: orders.length,
    pagination,
    data: orders,
    message: "Orders retrieved successfully",
  });
});

// User routes
router.get("/", protect, getMyOrders);
router.get("/:id", protect, getOrder);
router.post("/", protect, createOrder);
router.put("/:id/pay", protect, updateOrderToPaid);

// Admin routes
router.get("/admin/all", protect, authorize("admin"), getOrders);
router.put("/:id/deliver", protect, authorize("admin"), updateOrderToDelivered);

module.exports = router;
