import { Product } from '../types';

export const dummyProducts: Product[] = [
  // Men's Fashion
  {
    id: 1,
    name: "Men's Leather Jacket",
    price: 75,
    originalPrice: 120,
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Classic brown leather jacket with modern styling. Perfect for casual and formal occasions.",
    category: "Men's Fashion",
    stock: 15,
    rating: 4.5,
    discount: 15
  },
  {
    id: 2,
    name: "Pure Garment Dyed Cotton Shirt",
    price: 45,
    originalPrice: 56,
    image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Premium cotton shirt with asymmetrical design. Comfortable and stylish for everyday wear.",
    category: "Men's Fashion",
    stock: 25,
    rating: 5.0,
    discount: 20
  },
  {
    id: 3,
    name: "Yarn Fleece Full-Zip Jacket",
    price: 58,
    originalPrice: 65,
    image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Warm and comfortable fleece jacket perfect for cold weather. Lightweight and durable.",
    category: "Men's Fashion",
    stock: 12,
    rating: 5.0,
    discount: 10
  },
  {
    id: 4,
    name: "Men's Casual Shoes",
    price: 99,
    originalPrice: 105,
    image: "https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Comfortable brown casual shoes with premium leather construction. Perfect for daily wear.",
    category: "Footwear",
    stock: 8,
    rating: 4.8,
    discount: 5
  },
  
  // Women's Fashion
  {
    id: 5,
    name: "Relaxed Short Full Dress",
    price: 45,
    originalPrice: 57,
    image: "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Comfortable and stylish short dress perfect for summer days. Made with breathable fabric.",
    category: "Women's Fashion",
    stock: 20,
    rating: 4.6,
    discount: 21
  },
  {
    id: 6,
    name: "Girls Pink Embroidered Dress",
    price: 61,
    originalPrice: 70,
    image: "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Beautiful pink dress with elegant embroidery. Perfect for special occasions.",
    category: "Women's Fashion",
    stock: 15,
    rating: 4.9,
    discount: 13
  },
  {
    id: 7,
    name: "Black Floral Wrap Dress",
    price: 76,
    originalPrice: 101,
    image: "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Elegant black dress with floral pattern. Versatile design for any occasion.",
    category: "Women's Fashion",
    stock: 10,
    rating: 4.7,
    discount: 25
  },
  
  // Jewelry & Watches
  {
    id: 8,
    name: "Pocket Watch Leather Pouch",
    price: 150,
    originalPrice: 170,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Classic gold pocket watch with premium leather pouch. Timeless elegance and precision.",
    category: "Watches",
    stock: 5,
    rating: 4.3,
    discount: 12
  },
  {
    id: 9,
    name: "Smart Watch Series X",
    price: 100,
    originalPrice: 120,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Advanced smartwatch with health monitoring, GPS, and seamless connectivity.",
    category: "Watches",
    stock: 18,
    rating: 5.0,
    discount: 17
  },
  {
    id: 10,
    name: "Silver Deer Heart Necklace",
    price: 84,
    originalPrice: 90,
    image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Elegant silver necklace with deer heart pendant. Perfect gift for loved ones.",
    category: "Jewelry",
    stock: 12,
    rating: 4.8,
    discount: 7
  },
  
  // Sports & Accessories
  {
    id: 11,
    name: "Running & Trekking Shoes",
    price: 49,
    originalPrice: 64,
    image: "https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Professional running shoes with advanced cushioning technology. Perfect for athletes.",
    category: "Sports",
    stock: 22,
    rating: 4.9,
    discount: 23
  },
  {
    id: 12,
    name: "Trekking & Running Backpack",
    price: 78,
    originalPrice: 144,
    image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Durable backpack designed for outdoor activities. Multiple compartments and water-resistant.",
    category: "Sports",
    stock: 8,
    rating: 4.7,
    discount: 46
  },
  {
    id: 13,
    name: "Women's Party Wear Dress",
    price: 94,
    originalPrice: 136,
    image: "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Stunning party dress with elegant design. Perfect for special celebrations.",
    category: "Party Wear",
    stock: 6,
    rating: 4.9,
    discount: 31
  },
  {
    id: 14,
    name: "Sports Claw Women's Shoes",
    price: 54,
    originalPrice: 119,
    image: "https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Comfortable sports shoes designed specifically for women. Lightweight and supportive.",
    category: "Sports",
    stock: 16,
    rating: 4.6,
    discount: 55
  },
  
  // Beauty & Perfume
  {
    id: 15,
    name: "Titan 100 MI Women's Perfume",
    price: 42,
    originalPrice: 52,
    image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Elegant fragrance with long-lasting scent. Perfect for daily use and special occasions.",
    category: "Perfume",
    stock: 30,
    rating: 4.4,
    discount: 19
  },
  {
    id: 16,
    name: "Men's Leather Reversible Belt",
    price: 24,
    originalPrice: 30,
    image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Versatile reversible belt with premium leather. Two colors in one for maximum flexibility.",
    category: "Accessories",
    stock: 25,
    rating: 4.5,
    discount: 20
  },
  
  // Deal of the Day
  {
    id: 17,
    name: "Shampoo & Conditioner Set",
    price: 150,
    originalPrice: 200,
    image: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Premium hair care set with natural ingredients. Nourishes and protects your hair.",
    category: "Beauty",
    stock: 50,
    rating: 4.3,
    discount: 25,
    isDealOfTheDay: true
  },
  
  // Baby & Kids
  {
    id: 18,
    name: "Baby Fabric Shoes",
    price: 4,
    originalPrice: 8,
    image: "https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Soft and comfortable fabric shoes for babies. Gentle on delicate feet.",
    category: "Baby & Kids",
    stock: 100,
    rating: 4.8,
    discount: 50
  },
  {
    id: 19,
    name: "Men's Hoodies T-Shirt",
    price: 7,
    originalPrice: 15,
    image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Comfortable hoodie t-shirt perfect for casual wear. Soft fabric and relaxed fit.",
    category: "Men's Fashion",
    stock: 45,
    rating: 4.6,
    discount: 53
  }
];

// Categories for filtering
export const categories = [
  { name: "Clothes", count: 33 },
  { name: "Footwear", count: 54 },
  { name: "Jewelry", count: 88 },
  { name: "Perfume", count: 64 },
  { name: "Cosmetics", count: 42 },
  { name: "Glasses", count: 28 },
  { name: "Bags", count: 35 }
];

// Featured categories for homepage
export const featuredCategories = [
  { name: "DRESS & FROCK", icon: "👗", count: 33 },
  { name: "WINTER WEAR", icon: "❄️", count: 54 },
  { name: "GLASSES & LENS", icon: "👓", count: 88 },
  { name: "SHORTS & JEANS", icon: "👖", count: 64 }
];