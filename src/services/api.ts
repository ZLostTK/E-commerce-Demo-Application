import config from "../config";

const API_BASE_URL = config.API_URL;

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
  count?: number;
  pagination?: {
    next?: { page: number; limit: number };
    prev?: { page: number; limit: number };
  };
}

export interface Product {
  _id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  images?: Array<{
    url: string;
    alt?: string;
    isPrimary?: boolean;
  }>;
  description: string;
  category: string;
  stock: number;
  rating: number;
  numReviews: number;
  isDealOfTheDay?: boolean;
  isFeatured?: boolean;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  _id: string;
  count: number;
}

export interface BusinessConfig {
  business: {
    name: string;
    email: string;
    phone: string;
    address: string;
    freeShippingThreshold: number;
    currency: string;
    currencySymbol: string;
  };
  features: {
    hasEmail: boolean;
    hasStripe: boolean;
    hasPexels: boolean;
    hasFileUpload: boolean;
  };
}

class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;

    try {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          ...options?.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  }

  // Configuration
  async getPublicConfig(): Promise<ApiResponse<BusinessConfig>> {
    return this.request<BusinessConfig>("/config/public");
  }

  // Products
  async getProducts(params?: {
    page?: number;
    limit?: number;
    search?: string;
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    hasDiscount?: boolean;
    sort?: string;
    order?: "asc" | "desc";
  }): Promise<ApiResponse<Product[]>> {
    const searchParams = new URLSearchParams();

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }

    return this.request<Product[]>(`/products?${searchParams.toString()}`);
  }

  async getProduct(id: string): Promise<ApiResponse<Product>> {
    return this.request<Product>(`/products/${id}`);
  }

  async getFeaturedProducts(limit?: number): Promise<ApiResponse<Product[]>> {
    const params = limit ? `?limit=${limit}` : "";
    return this.request<Product[]>(`/products/featured${params}`);
  }

  async getDealOfTheDay(): Promise<ApiResponse<Product[]>> {
    return this.request<Product[]>(`/products/deal-of-the-day`);
  }

  async getNewArrivals(limit?: number): Promise<ApiResponse<Product[]>> {
    const params = limit ? `?limit=${limit}` : "";
    return this.request<Product[]>(`/products/new-arrivals${params}`);
  }

  async getTrendingProducts(limit?: number): Promise<ApiResponse<Product[]>> {
    const params = limit ? `?limit=${limit}` : "";
    return this.request<Product[]>(`/products/trending${params}`);
  }

  async getTopRatedProducts(limit?: number): Promise<ApiResponse<Product[]>> {
    const params = limit ? `?limit=${limit}` : "";
    return this.request<Product[]>(`/products/top-rated${params}`);
  }

  async getProductsByCategory(
    category: string,
    params?: {
      page?: number;
      limit?: number;
    }
  ): Promise<ApiResponse<Product[]>> {
    const searchParams = new URLSearchParams();

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          searchParams.append(key, value.toString());
        }
      });
    }

    const queryString = searchParams.toString();
    return this.request<Product[]>(
      `/products/category/${encodeURIComponent(category)}${
        queryString ? `?${queryString}` : ""
      }`
    );
  }

  async getCategories(): Promise<ApiResponse<Category[]>> {
    return this.request<Category[]>(`/products/categories`);
  }

  // Search products
  async searchProducts(
    query: string,
    params?: {
      page?: number;
      limit?: number;
    }
  ): Promise<ApiResponse<Product[]>> {
    return this.getProducts({ search: query, ...params });
  }
}

export const apiService = new ApiService(API_BASE_URL);
