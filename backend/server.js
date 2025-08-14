const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Demo Products Data
const demoProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "High-quality wireless headphones with noise cancellation",
    category: "Electronics",
    stock: 10
  },
  {
    id: 2,
    name: "Smart Watch Series X",
    price: 449,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Advanced smartwatch with health monitoring",
    category: "Electronics",
    stock: 5
  },
  {
    id: 3,
    name: "Leather Laptop Bag",
    price: 199,
    image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Handcrafted genuine leather laptop bag",
    category: "Accessories",
    stock: 15
  }
];

// Routes

// GET /api/products - Get all products
app.get('/api/products', (req, res) => {
  res.json({
    success: true,
    data: demoProducts,
    message: 'Products retrieved successfully'
  });
});

// GET /api/products/:id - Get single product
app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = demoProducts.find(p => p.id === productId);
  
  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product not found'
    });
  }
  
  res.json({
    success: true,
    data: product,
    message: 'Product retrieved successfully'
  });
});

// POST /api/login - User login simulation
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  
  // Demo login - always successful
  res.json({
    success: true,
    data: {
      user: {
        id: 1,
        email: email,
        name: 'Demo User',
        role: 'user'
      },
      token: 'demo-jwt-token-123456'
    },
    message: 'Login successful'
  });
});

// POST /api/register - User registration simulation
app.post('/api/register', (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  
  // Demo registration - always successful
  res.json({
    success: true,
    data: {
      user: {
        id: Math.floor(Math.random() * 1000),
        email: email,
        name: `${firstName} ${lastName}`,
        role: 'user'
      },
      token: 'demo-jwt-token-' + Math.floor(Math.random() * 100000)
    },
    message: 'Registration successful'
  });
});

// GET /api/orders - Get orders (empty for demo)
app.get('/api/orders', (req, res) => {
  res.json({
    success: true,
    data: [],
    message: 'Orders retrieved successfully'
  });
});

// POST /api/orders - Create new order
app.post('/api/orders', (req, res) => {
  const { items, shippingAddress, paymentInfo } = req.body;
  
  // Demo order creation - always successful
  const orderId = Math.floor(Math.random() * 10000);
  
  res.json({
    success: true,
    data: {
      orderId: orderId,
      status: 'confirmed',
      total: items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
      estimatedDelivery: '3-5 business days'
    },
    message: 'Order created successfully'
  });
});

// GET /api/categories - Get product categories
app.get('/api/categories', (req, res) => {
  res.json({
    success: true,
    data: ['Electronics', 'Accessories', 'Smart Home', 'Gaming'],
    message: 'Categories retrieved successfully'
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running properly',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found'
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Server Error:', error);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { error: error.message })
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Demo E-commerce API Server running on port ${PORT}`);
  console.log(`📋 Available endpoints:`);
  console.log(`   GET  /api/products - Get all products`);
  console.log(`   GET  /api/products/:id - Get single product`);
  console.log(`   POST /api/login - User login`);
  console.log(`   POST /api/register - User registration`);
  console.log(`   GET  /api/orders - Get orders`);
  console.log(`   POST /api/orders - Create order`);
  console.log(`   GET  /api/categories - Get categories`);
  console.log(`   GET  /health - Health check`);
});