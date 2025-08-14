const config = require("../config");
const { asyncHandler } = require("../utils/asyncHandler");

// @desc    Get business configuration
// @route   GET /api/config
// @access  Public
const getBusinessConfig = asyncHandler(async (req, res) => {
  res.json({
    success: true,
    data: {
      business: config.BUSINESS,
      features: {
        hasEmail: !!config.SMTP.USER,
        hasStripe: !!config.STRIPE.SECRET_KEY,
        hasPexels: !!config.PEXELS_API_KEY,
        hasFileUpload: true,
      },
      environment: config.NODE_ENV,
    },
    message: "Business configuration retrieved successfully",
  });
});

// @desc    Get public configuration (safe for frontend)
// @route   GET /api/config/public
// @access  Public
const getPublicConfig = asyncHandler(async (req, res) => {
  res.json({
    success: true,
    data: {
      business: {
        name: config.BUSINESS.NAME,
        email: config.BUSINESS.EMAIL,
        phone: config.BUSINESS.PHONE,
        address: config.BUSINESS.ADDRESS,
        freeShippingThreshold: config.BUSINESS.FREE_SHIPPING_THRESHOLD,
        currency: config.BUSINESS.CURRENCY,
        currencySymbol: config.BUSINESS.CURRENCY_SYMBOL,
      },
      features: {
        hasEmail: !!config.SMTP.USER,
        hasStripe: !!config.STRIPE.SECRET_KEY,
        hasPexels: !!config.PEXELS_API_KEY,
        hasFileUpload: true,
      },
    },
    message: "Public configuration retrieved successfully",
  });
});

module.exports = {
  getBusinessConfig,
  getPublicConfig,
};
