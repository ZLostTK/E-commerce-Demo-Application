import { Product } from '../types';

export const dummyProducts: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Experience crystal-clear audio with our premium wireless headphones featuring advanced noise cancellation technology, 30-hour battery life, and premium comfort padding.",
    category: "Electronics",
    stock: 10
  },
  {
    id: 2,
    name: "Smart Watch Series X",
    price: 449,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "The ultimate smartwatch with comprehensive health monitoring, GPS tracking, water resistance, and seamless connectivity with your devices.",
    category: "Electronics",
    stock: 5
  },
  {
    id: 3,
    name: "Leather Laptop Bag",
    price: 199,
    image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Handcrafted genuine leather laptop bag with multiple compartments, perfect for professionals. Fits laptops up to 15 inches.",
    category: "Accessories",
    stock: 15
  },
  {
    id: 4,
    name: "Wireless Charging Station",
    price: 89,
    image: "https://images.pexels.com/photos/4052800/pexels-photo-4052800.jpeg?auto=compress&cs=tinysrgb&w=500",
    description: "Multi-device wireless charging station supporting fast charging for smartphones, earbuds, and smartwatches simultaneously.",
    category: "Electronics",
    stock: 20
  }
];