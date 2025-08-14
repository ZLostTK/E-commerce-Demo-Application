export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  category: string;
  stock: number;
  rating?: number;
  discount?: number;
  isDealOfTheDay?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: number;
  email: string;
  name: string;
}

export interface Order {
  id: number;
  userId: number;
  items: CartItem[];
  total: number;
  status: string;
  createdAt: string;
}