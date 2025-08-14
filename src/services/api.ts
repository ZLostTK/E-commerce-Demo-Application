import config from "../config";
import { DemoService } from "./demoService";

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
  private isDemoMode: boolean;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.isDemoMode = import.meta.env.VITE_DEMO_MODE === "true";
  }

  private async request<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<ApiResponse<T>> {
    // Si estamos en modo demo, usar DemoService
    if (this.isDemoMode) {
      console.log("🔄 Using demo mode - backend not available");
      return this.handleDemoRequest<T>(endpoint, options);
    }

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
      console.log("🔄 Falling back to demo mode");

      // Fallback a demo si la API falla
      return this.handleDemoRequest<T>(endpoint, options);
    }
  }

  private async handleDemoRequest<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<ApiResponse<T>> {
    // Mapear endpoints a métodos del DemoService
    const method = this.getDemoMethod(endpoint);

    if (method && DemoService[method]) {
      try {
        const result = await DemoService[method]();
        return result;
      } catch (error) {
        console.error("Demo service error:", error);
        throw error;
      }
    }

    throw new Error(`Demo method not found for endpoint: ${endpoint}`);
  }

  private getDemoMethod(endpoint: string): string | null {
    const methodMap: { [key: string]: string } = {
      "/config/public": "getPublicConfig",
      "/products": "getProducts",
      "/products/featured": "getFeaturedProducts",
      "/products/deal-of-the-day": "getDealOfTheDay",
      "/products/new-arrivals": "getNewArrivals",
      "/products/trending": "getTrendingProducts",
      "/products/top-rated": "getTopRatedProducts",
      "/products/categories": "getCategories",
    };

    // Buscar coincidencia exacta o parcial
    for (const [pattern, method] of Object.entries(methodMap)) {
      if (endpoint.startsWith(pattern)) {
        return method;
      }
    }

    // Para endpoints con parámetros
    if (endpoint.match(/^\/products\/[^\/]+$/)) {
      return "getProduct";
    }

    if (endpoint.match(/^\/products\/category\/[^\/]+$/)) {
      return "getProductsByCategory";
    }

    return null;
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
