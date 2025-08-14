const mongoose = require("mongoose");
const Product = require("../models/Product");
const User = require("../models/User");
const config = require("../config");

// Pexels API configuration
const { createClient } = require("pexels");
const pexelsClient = createClient(
  config.PEXELS_API_KEY || "YOUR_PEXELS_API_KEY"
);

// Product data with Pexels images
const productsData = [
  // Men's Fashion
  {
    name: "Men's Leather Jacket",
    price: 75,
    originalPrice: 120,
    discount: 15,
    description:
      "Classic brown leather jacket with modern styling. Perfect for casual and formal occasions.",
    category: "Men's Fashion",
    stock: 15,
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500",
    tags: ["leather", "jacket", "men", "fashion"],
  },
  {
    name: "Pure Garment Dyed Cotton Shirt",
    price: 45,
    originalPrice: 56,
    discount: 20,
    description:
      "Premium cotton shirt with asymmetrical design. Comfortable and stylish for everyday wear.",
    category: "Men's Fashion",
    stock: 25,
    rating: 5.0,
    image:
      "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=500",
    tags: ["cotton", "shirt", "men", "casual"],
  },
  {
    name: "Yarn Fleece Full-Zip Jacket",
    price: 58,
    originalPrice: 65,
    discount: 10,
    description:
      "Warm and comfortable fleece jacket perfect for cold weather. Lightweight and durable.",
    category: "Men's Fashion",
    stock: 12,
    rating: 5.0,
    image:
      "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=500",
    tags: ["fleece", "jacket", "winter", "men"],
  },

  // Women's Fashion
  {
    name: "Relaxed Short Full Dress",
    price: 45,
    originalPrice: 57,
    discount: 21,
    description:
      "Comfortable and stylish short dress perfect for summer days. Made with breathable fabric.",
    category: "Women's Fashion",
    stock: 20,
    rating: 4.6,
    image:
      "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=500",
    tags: ["dress", "summer", "women", "casual"],
  },
  {
    name: "Girls Pink Embroidered Dress",
    price: 61,
    originalPrice: 70,
    discount: 13,
    description:
      "Beautiful pink dress with elegant embroidery. Perfect for special occasions.",
    category: "Women's Fashion",
    stock: 15,
    rating: 4.9,
    image:
      "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=500",
    tags: ["dress", "embroidery", "pink", "elegant"],
  },
  {
    name: "Black Floral Wrap Dress",
    price: 76,
    originalPrice: 101,
    discount: 25,
    description:
      "Elegant black dress with floral pattern. Versatile design for any occasion.",
    category: "Women's Fashion",
    stock: 10,
    rating: 4.7,
    image:
      "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=500",
    tags: ["dress", "floral", "black", "elegant"],
  },

  // Footwear
  {
    name: "Men's Casual Shoes",
    price: 99,
    originalPrice: 105,
    discount: 5,
    description:
      "Comfortable brown casual shoes with premium leather construction. Perfect for daily wear.",
    category: "Footwear",
    stock: 8,
    rating: 4.8,
    image:
      "https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=500",
    tags: ["shoes", "leather", "casual", "men"],
  },
  {
    name: "Running & Trekking Shoes",
    price: 49,
    originalPrice: 64,
    discount: 23,
    description:
      "Professional running shoes with advanced cushioning technology. Perfect for athletes.",
    category: "Sports",
    stock: 22,
    rating: 4.9,
    image:
      "https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=500",
    tags: ["running", "shoes", "sports", "athletic"],
  },

  // Watches & Jewelry
  {
    name: "Pocket Watch Leather Pouch",
    price: 150,
    originalPrice: 170,
    discount: 12,
    description:
      "Classic gold pocket watch with premium leather pouch. Timeless elegance and precision.",
    category: "Watches",
    stock: 5,
    rating: 4.3,
    image:
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500",
    tags: ["watch", "pocket", "leather", "classic"],
  },
  {
    name: "Smart Watch Series X",
    price: 100,
    originalPrice: 120,
    discount: 17,
    description:
      "Advanced smartwatch with health monitoring, GPS, and seamless connectivity.",
    category: "Watches",
    stock: 18,
    rating: 5.0,
    image:
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500",
    tags: ["smartwatch", "technology", "health", "fitness"],
  },
  {
    name: "Silver Deer Heart Necklace",
    price: 84,
    originalPrice: 90,
    discount: 7,
    description:
      "Elegant silver necklace with deer heart pendant. Perfect gift for loved ones.",
    category: "Jewelry",
    stock: 12,
    rating: 4.8,
    image:
      "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=500",
    tags: ["necklace", "silver", "jewelry", "gift"],
  },

  // Sports & Accessories
  {
    name: "Trekking & Running Backpack",
    price: 78,
    originalPrice: 144,
    discount: 46,
    description:
      "Durable backpack designed for outdoor activities. Multiple compartments and water-resistant.",
    category: "Sports",
    stock: 8,
    rating: 4.7,
    image:
      "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=500",
    tags: ["backpack", "outdoor", "trekking", "sports"],
  },
  {
    name: "Women's Party Wear Dress",
    price: 94,
    originalPrice: 136,
    discount: 31,
    description:
      "Stunning party dress with elegant design. Perfect for special celebrations.",
    category: "Party Wear",
    stock: 6,
    rating: 4.9,
    image:
      "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=500",
    tags: ["dress", "party", "elegant", "celebration"],
  },
  {
    name: "Sports Claw Women's Shoes",
    price: 54,
    originalPrice: 119,
    discount: 55,
    description:
      "Comfortable sports shoes designed specifically for women. Lightweight and supportive.",
    category: "Sports",
    stock: 16,
    rating: 4.6,
    image:
      "https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=500",
    tags: ["sports", "shoes", "women", "athletic"],
  },

  // Beauty & Perfume
  {
    name: "Titan 100 MI Women's Perfume",
    price: 42,
    originalPrice: 52,
    discount: 19,
    description:
      "Elegant fragrance with long-lasting scent. Perfect for daily use and special occasions.",
    category: "Perfume",
    stock: 30,
    rating: 4.4,
    image:
      "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=500",
    tags: ["perfume", "fragrance", "women", "elegant"],
  },
  {
    name: "Men's Leather Reversible Belt",
    price: 24,
    originalPrice: 30,
    discount: 20,
    description:
      "Versatile reversible belt with premium leather. Two colors in one for maximum flexibility.",
    category: "Accessories",
    stock: 25,
    rating: 4.5,
    image:
      "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=500",
    tags: ["belt", "leather", "reversible", "accessories"],
  },

  // Deal of the Day
  {
    name: "Shampoo & Conditioner Set",
    price: 150,
    originalPrice: 200,
    discount: 25,
    description:
      "Premium hair care set with natural ingredients. Nourishes and protects your hair.",
    category: "Beauty",
    stock: 50,
    rating: 4.3,
    isDealOfTheDay: true,
    image:
      "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=500",
    tags: ["shampoo", "conditioner", "hair care", "natural"],
  },

  // Baby & Kids
  {
    name: "Baby Fabric Shoes",
    price: 4,
    originalPrice: 8,
    discount: 50,
    description:
      "Soft and comfortable fabric shoes for babies. Gentle on delicate feet.",
    category: "Baby & Kids",
    stock: 100,
    rating: 4.8,
    image:
      "https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=500",
    tags: ["baby", "shoes", "fabric", "comfortable"],
  },
  {
    name: "Men's Hoodies T-Shirt",
    price: 7,
    originalPrice: 15,
    discount: 53,
    description:
      "Comfortable hoodie t-shirt perfect for casual wear. Soft fabric and relaxed fit.",
    category: "Men's Fashion",
    stock: 45,
    rating: 4.6,
    image:
      "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=500",
    tags: ["hoodie", "t-shirt", "casual", "men"],
  },
];

// Function to get images from Pexels (fallback)
async function getPexelsImage(query) {
  try {
    const response = await pexelsClient.photos.search({ query, per_page: 1 });
    if (response.photos && response.photos.length > 0) {
      return response.photos[0].src.medium;
    }
  } catch (error) {
    console.log(`Error fetching Pexels image for ${query}:`, error.message);
  }
  return null;
}

// Function to seed products
async function seedProducts() {
  try {
    // Connect to MongoDB
    await mongoose.connect(config.MONGODB_URI);
    console.log("Connected to MongoDB");

    // Clear existing products
    await Product.deleteMany({});
    console.log("Cleared existing products");

    // Create a default user for products
    let defaultUser = await User.findOne({ email: "admin@example.com" });
    if (!defaultUser) {
      defaultUser = await User.create({
        firstName: "Admin",
        lastName: "User",
        email: "admin@example.com",
        password: "admin123",
        role: "admin",
      });
    }

    // Create products with enhanced images
    const productsWithImages = [];

    for (const productData of productsData) {
      // Try to get a better image from Pexels
      const pexelsImage = await getPexelsImage(productData.name);
      if (pexelsImage) {
        productData.image = pexelsImage;
      }

      // Add createdBy field
      productData.createdBy = defaultUser._id;

      productsWithImages.push(productData);
    }

    // Insert products
    const products = await Product.insertMany(productsWithImages);
    console.log(`Successfully seeded ${products.length} products`);

    // Log some sample products
    console.log("\nSample products created:");
    products.slice(0, 3).forEach((product) => {
      console.log(`- ${product.name}: $${product.price} (${product.category})`);
    });

    console.log("\nDatabase seeding completed successfully!");
    console.log(`🏢 Business: ${config.BUSINESS.NAME}`);
    console.log(`📧 Contact: ${config.BUSINESS.EMAIL}`);
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

// Run the seeding function
if (require.main === module) {
  seedProducts();
}

module.exports = { seedProducts };
