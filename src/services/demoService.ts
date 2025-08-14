import { Product, Category, BusinessConfig } from "./api";

// Datos de demo para cuando el backend no esté disponible
const demoProducts: Product[] = [
  {
    _id: "demo-1",
    name: "Elegant Summer Dress",
    price: 89.99,
    originalPrice: 129.99,
    discount: 30,
    image:
      "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      {
        url: "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Elegant Summer Dress",
        isPrimary: true,
      },
    ],
    description:
      "A beautiful summer dress perfect for any occasion. Made with high-quality fabric for maximum comfort.",
    category: "Women's Fashion",
    stock: 25,
    rating: 4.8,
    numReviews: 156,
    isDealOfTheDay: true,
    isFeatured: true,
    tags: ["dress", "summer", "elegant", "fashion"],
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
  },
  {
    _id: "demo-2",
    name: "Classic Men's Suit",
    price: 299.99,
    originalPrice: 399.99,
    discount: 25,
    image:
      "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      {
        url: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Classic Men's Suit",
        isPrimary: true,
      },
    ],
    description:
      "Professional men's suit for business and formal occasions. Premium wool blend fabric.",
    category: "Men's Fashion",
    stock: 15,
    rating: 4.9,
    numReviews: 89,
    isDealOfTheDay: false,
    isFeatured: true,
    tags: ["suit", "formal", "business", "men"],
    createdAt: "2024-01-14T10:00:00Z",
    updatedAt: "2024-01-14T10:00:00Z",
  },
  {
    _id: "demo-3",
    name: "Diamond Necklace",
    price: 599.99,
    originalPrice: 799.99,
    discount: 25,
    image:
      "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      {
        url: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Diamond Necklace",
        isPrimary: true,
      },
    ],
    description:
      "Stunning diamond necklace perfect for special occasions. 18k gold setting.",
    category: "Jewelry",
    stock: 8,
    rating: 4.7,
    numReviews: 234,
    isDealOfTheDay: true,
    isFeatured: true,
    tags: ["jewelry", "diamond", "necklace", "luxury"],
    createdAt: "2024-01-13T10:00:00Z",
    updatedAt: "2024-01-13T10:00:00Z",
  },
  {
    _id: "demo-4",
    name: "Luxury Perfume Set",
    price: 149.99,
    originalPrice: 199.99,
    discount: 25,
    image:
      "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      {
        url: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Luxury Perfume Set",
        isPrimary: true,
      },
    ],
    description:
      "Exclusive perfume set with three different fragrances. Perfect gift for any occasion.",
    category: "Perfume",
    stock: 20,
    rating: 4.6,
    numReviews: 178,
    isDealOfTheDay: false,
    isFeatured: true,
    tags: ["perfume", "luxury", "fragrance", "gift"],
    createdAt: "2024-01-12T10:00:00Z",
    updatedAt: "2024-01-12T10:00:00Z",
  },
  {
    _id: "demo-5",
    name: "Casual Denim Jacket",
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    image:
      "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      {
        url: "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Casual Denim Jacket",
        isPrimary: true,
      },
    ],
    description:
      "Comfortable denim jacket perfect for casual outings. Classic design with modern fit.",
    category: "Men's Fashion",
    stock: 30,
    rating: 4.5,
    numReviews: 92,
    isDealOfTheDay: false,
    isFeatured: false,
    tags: ["jacket", "denim", "casual", "men"],
    createdAt: "2024-01-11T10:00:00Z",
    updatedAt: "2024-01-11T10:00:00Z",
  },
  {
    _id: "demo-6",
    name: "Elegant Evening Gown",
    price: 199.99,
    originalPrice: 299.99,
    discount: 33,
    image:
      "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      {
        url: "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Elegant Evening Gown",
        isPrimary: true,
      },
    ],
    description:
      "Stunning evening gown for special occasions. Elegant design with premium materials.",
    category: "Women's Fashion",
    stock: 12,
    rating: 4.8,
    numReviews: 145,
    isDealOfTheDay: true,
    isFeatured: true,
    tags: ["gown", "evening", "elegant", "women"],
    createdAt: "2024-01-10T10:00:00Z",
    updatedAt: "2024-01-10T10:00:00Z",
  },
];

const demoCategories: Category[] = [
  { _id: "Men's Fashion", count: 45 },
  { _id: "Women's Fashion", count: 67 },
  { _id: "Jewelry", count: 23 },
  { _id: "Perfume", count: 18 },
];

const demoBusinessConfig: BusinessConfig = {
  business: {
    name: "Anon E-Commerce",
    email: "info@anon.com",
    phone: "+1 (555) 123-4567",
    address: "123 Fashion Street, New York, NY 10001",
    freeShippingThreshold: 55,
    currency: "USD",
    currencySymbol: "$",
  },
  features: {
    hasEmail: true,
    hasStripe: true,
    hasPexels: true,
    hasFileUpload: true,
  },
};

// Simular delay de red
const simulateNetworkDelay = (ms: number = 500) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Simular respuesta de API
const createApiResponse = <T>(
  data: T,
  success: boolean = true,
  message: string = "Success"
) => {
  return {
    success,
    data,
    message,
    count: Array.isArray(data) ? data.length : undefined,
  };
};

export class DemoService {
  static async getProducts(params?: any): Promise<any> {
    await simulateNetworkDelay();

    let filteredProducts = [...demoProducts];

    // Simular filtros
    if (params?.category) {
      filteredProducts = filteredProducts.filter((p) =>
        p.category.toLowerCase().includes(params.category.toLowerCase())
      );
    }

    if (params?.search) {
      filteredProducts = filteredProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(params.search.toLowerCase()) ||
          p.description.toLowerCase().includes(params.search.toLowerCase())
      );
    }

    if (params?.hasDiscount) {
      filteredProducts = filteredProducts.filter(
        (p) => p.originalPrice && p.price < p.originalPrice
      );
    }

    return createApiResponse(
      filteredProducts,
      true,
      "Demo data loaded successfully"
    );
  }

  static async getProduct(id: string): Promise<any> {
    await simulateNetworkDelay();
    const product = demoProducts.find((p) => p._id === id);

    if (!product) {
      return createApiResponse(null, false, "Product not found");
    }

    return createApiResponse(product, true, "Product loaded successfully");
  }

  static async getFeaturedProducts(limit?: number): Promise<any> {
    await simulateNetworkDelay();
    const featured = demoProducts
      .filter((p) => p.isFeatured)
      .slice(0, limit || 6);
    return createApiResponse(
      featured,
      true,
      "Featured products loaded successfully"
    );
  }

  static async getDealOfTheDay(): Promise<any> {
    await simulateNetworkDelay();
    const deals = demoProducts.filter((p) => p.isDealOfTheDay);
    return createApiResponse(
      deals,
      true,
      "Deal of the day loaded successfully"
    );
  }

  static async getNewArrivals(limit?: number): Promise<any> {
    await simulateNetworkDelay();
    const newArrivals = demoProducts.slice(0, limit || 4);
    return createApiResponse(
      newArrivals,
      true,
      "New arrivals loaded successfully"
    );
  }

  static async getTrendingProducts(limit?: number): Promise<any> {
    await simulateNetworkDelay();
    const trending = demoProducts
      .filter((p) => p.rating >= 4.5)
      .slice(0, limit || 4);
    return createApiResponse(
      trending,
      true,
      "Trending products loaded successfully"
    );
  }

  static async getTopRatedProducts(limit?: number): Promise<any> {
    await simulateNetworkDelay();
    const topRated = demoProducts
      .sort((a, b) => b.rating - a.rating)
      .slice(0, limit || 4);
    return createApiResponse(
      topRated,
      true,
      "Top rated products loaded successfully"
    );
  }

  static async getProductsByCategory(
    category: string,
    params?: any
  ): Promise<any> {
    await simulateNetworkDelay();
    const categoryProducts = demoProducts.filter((p) =>
      p.category.toLowerCase().includes(category.toLowerCase())
    );
    return createApiResponse(
      categoryProducts,
      true,
      "Category products loaded successfully"
    );
  }

  static async getCategories(): Promise<any> {
    await simulateNetworkDelay();
    return createApiResponse(
      demoCategories,
      true,
      "Categories loaded successfully"
    );
  }

  static async getPublicConfig(): Promise<any> {
    await simulateNetworkDelay();
    return createApiResponse(
      demoBusinessConfig,
      true,
      "Business config loaded successfully"
    );
  }

  static async searchProducts(query: string, params?: any): Promise<any> {
    await simulateNetworkDelay();
    const searchResults = demoProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
    );
    return createApiResponse(
      searchResults,
      true,
      "Search results loaded successfully"
    );
  }
}
