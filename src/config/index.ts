// Frontend Configuration
export const config = {
  // API Configuration
  API_URL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",

  // App Configuration
  APP_NAME: import.meta.env.VITE_APP_NAME || "Anon E-Commerce",
  APP_VERSION: import.meta.env.VITE_APP_VERSION || "1.0.0",

  // Demo Configuration
  DEMO_MODE: import.meta.env.VITE_DEMO_MODE === "true",
  FALLBACK_API:
    import.meta.env.VITE_FALLBACK_API ||
    "https://ecommerce-demo-backend.railway.app/api",

  // External Services
  PEXELS_API_KEY: import.meta.env.VITE_PEXELS_API_KEY,

  // Analytics
  GOOGLE_ANALYTICS_ID: import.meta.env.VITE_GOOGLE_ANALYTICS_ID,

  // Payment
  STRIPE_PUBLIC_KEY: import.meta.env.VITE_STRIPE_PUBLIC_KEY,

  // Social Media
  FACEBOOK_APP_ID: import.meta.env.VITE_FACEBOOK_APP_ID,
  TWITTER_HANDLE: import.meta.env.VITE_TWITTER_HANDLE || "@anonecommerce",

  // Contact Information
  CONTACT: {
    EMAIL: import.meta.env.VITE_CONTACT_EMAIL || "info@anon.com",
    PHONE: import.meta.env.VITE_CONTACT_PHONE || "+1 (555) 123-4567",
    ADDRESS:
      import.meta.env.VITE_CONTACT_ADDRESS ||
      "123 Fashion Street, New York, NY 10001",
  },

  // Business Configuration
  BUSINESS: {
    NAME: import.meta.env.VITE_BUSINESS_NAME || "Anon E-Commerce",
    FREE_SHIPPING_THRESHOLD: parseInt(
      import.meta.env.VITE_FREE_SHIPPING_THRESHOLD || "55"
    ),
    CURRENCY: import.meta.env.VITE_CURRENCY || "USD",
    CURRENCY_SYMBOL: import.meta.env.VITE_CURRENCY_SYMBOL || "$",
  },

  // Features
  FEATURES: {
    HAS_EMAIL: !!import.meta.env.VITE_CONTACT_EMAIL,
    HAS_STRIPE: !!import.meta.env.VITE_STRIPE_PUBLIC_KEY,
    HAS_PEXELS: !!import.meta.env.VITE_PEXELS_API_KEY,
    HAS_ANALYTICS: !!import.meta.env.VITE_GOOGLE_ANALYTICS_ID,
  },
};

// Helper functions
export const formatPrice = (price: number): string => {
  return `${config.BUSINESS.CURRENCY_SYMBOL}${price.toFixed(2)}`;
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: config.BUSINESS.CURRENCY,
  }).format(amount);
};

export const isFreeShippingEligible = (total: number): boolean => {
  return total >= config.BUSINESS.FREE_SHIPPING_THRESHOLD;
};

export default config;
