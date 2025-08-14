import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { apiService, Product } from "../services/api";
import { ChevronLeft, Filter, Grid, List } from "lucide-react";

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<string>("newest");

  useEffect(() => {
    const fetchProducts = async () => {
      if (!category) return;

      try {
        setLoading(true);
        const response = await apiService.getProductsByCategory(
          decodeURIComponent(category)
        );
        setProducts(response.data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Error loading products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  const getCategoryDisplayName = (categoryName: string) => {
    const categoryMap: { [key: string]: string } = {
      "men's fashion": "Men's Fashion",
      "women's fashion": "Women's Fashion",
      jewelry: "Jewelry & Watches",
      perfume: "Perfume & Cosmetics",
      sports: "Sports & Outdoor",
      "baby & kids": "Baby & Kids",
      footwear: "Footwear",
      watches: "Watches",
      accessories: "Accessories",
      beauty: "Beauty",
      "party wear": "Party Wear",
    };

    return categoryMap[categoryName.toLowerCase()] || categoryName;
  };

  const sortProducts = (products: Product[], sortBy: string) => {
    switch (sortBy) {
      case "price-low":
        return [...products].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...products].sort((a, b) => b.price - a.price);
      case "rating":
        return [...products].sort((a, b) => b.rating - a.rating);
      case "newest":
        return [...products].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      default:
        return products;
    }
  };

  const sortedProducts = sortProducts(products, sortBy);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4 mb-4">
            <Link
              to="/"
              className="text-gray-500 hover:text-pink-500 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">
              {getCategoryDisplayName(category || "")}
            </h1>
          </div>
          <p className="text-gray-600">
            {products.length} products found in this category
          </p>
        </div>
      </div>

      {/* Filters and Sort */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <span className="text-gray-700 font-medium">Filters:</span>
              </div>
              <button className="text-pink-500 hover:text-pink-600 font-medium">
                Price Range
              </button>
              <button className="text-pink-500 hover:text-pink-600 font-medium">
                Brand
              </button>
              <button className="text-pink-500 hover:text-pink-600 font-medium">
                Rating
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-gray-700 font-medium">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "grid"
                      ? "bg-pink-500 text-white"
                      : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "list"
                      ? "bg-pink-500 text-white"
                      : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {products.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any products in this category.
            </p>
            <Link
              to="/"
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Back to Home
            </Link>
          </div>
        ) : (
          <div
            className={`grid gap-6 ${
              viewMode === "grid"
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "grid-cols-1"
            }`}
          >
            {sortedProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
