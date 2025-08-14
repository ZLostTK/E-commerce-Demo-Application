import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import {
  Truck,
  Calendar,
  Headphones,
  RotateCcw,
  DollarSign,
  Plus,
  Clock,
  Star,
} from "lucide-react";
import { apiService, Product, Category } from "../services/api";

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [dealOfTheDay, setDealOfTheDay] = useState<Product | null>(null);
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);
  const [trending, setTrending] = useState<Product[]>([]);
  const [topRated, setTopRated] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch all data in parallel
        const [
          productsResponse,
          categoriesResponse,
          dealOfTheDayResponse,
          newArrivalsResponse,
          trendingResponse,
          topRatedResponse,
        ] = await Promise.all([
          apiService.getProducts({ limit: 8 }),
          apiService.getCategories(),
          apiService.getDealOfTheDay(),
          apiService.getNewArrivals(4),
          apiService.getTrendingProducts(4),
          apiService.getTopRatedProducts(4),
        ]);

        setProducts(productsResponse.data);
        setCategories(categoriesResponse.data);
        setDealOfTheDay(dealOfTheDayResponse.data[0] || null);
        setNewArrivals(newArrivalsResponse.data);
        setTrending(trendingResponse.data);
        setTopRated(topRatedResponse.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Error loading products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

  // Featured categories for homepage
  const featuredCategories = [
    {
      name: "DRESS & FROCK",
      icon: "👗",
      count: categories.find((c) => c._id === "Women's Fashion")?.count || 0,
    },
    {
      name: "WINTER WEAR",
      icon: "❄️",
      count: categories.find((c) => c._id === "Men's Fashion")?.count || 0,
    },
    {
      name: "GLASSES & LENS",
      icon: "👓",
      count: categories.find((c) => c._id === "Watches")?.count || 0,
    },
    {
      name: "SHORTS & JEANS",
      icon: "👖",
      count: categories.find((c) => c._id === "Footwear")?.count || 0,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-pink-100 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight text-gray-900">
                Trending Accessories
                <span className="block text-4xl text-pink-600 mt-2">
                  MODERN SUNGLASSES
                </span>
              </h1>
              <p className="text-xl mb-8 text-gray-600">starting at $ 15.00</p>
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors transform hover:scale-105">
                SHOP NOW
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Modern Sunglasses"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {featuredCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-3">({category.count} items)</p>
                <Link
                  to={`/category/${category.name
                    .replace(" & ", "%20&%20")
                    .replace(" ", "%20")}`}
                  className="text-pink-500 hover:text-pink-600 font-medium group-hover:underline"
                >
                  Show All
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Deal of the Day */}
              {dealOfTheDay && (
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    Deal Of The Day
                  </h3>
                  <div className="space-y-4">
                    <div className="relative">
                      <img
                        src={dealOfTheDay.image}
                        alt={dealOfTheDay.name}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      {dealOfTheDay.discount && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                          {dealOfTheDay.discount}% OFF
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {dealOfTheDay.name}
                      </h4>
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          {Array.from({ length: 5 }, (_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(dealOfTheDay.rating || 0)
                                  ? "fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-lg font-bold text-gray-900">
                          ${dealOfTheDay.price}
                        </span>
                        {dealOfTheDay.originalPrice && (
                          <span className="text-gray-500 line-through">
                            ${dealOfTheDay.originalPrice}
                          </span>
                        )}
                      </div>
                      <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                        ADD TO CART
                      </button>
                      <p className="text-sm text-gray-600 mt-2">
                        ALREADY SOLD: 20
                      </p>

                      {/* Countdown Timer */}
                      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm font-semibold text-gray-900 mb-2">
                          HURRY UP! OFFER ENDS IN:
                        </p>
                        <div className="flex justify-between text-sm">
                          <div className="text-center">
                            <div className="font-bold text-pink-500">360</div>
                            <div className="text-gray-600">Days</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-pink-500">24</div>
                            <div className="text-gray-600">Hours</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-pink-500">59</div>
                            <div className="text-gray-600">Minutes</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Categories */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  CATEGORY
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category._id}
                      to={`/category/${encodeURIComponent(category._id)}`}
                      className="flex items-center justify-between py-2 hover:bg-gray-50 rounded px-2 cursor-pointer group"
                    >
                      <span className="text-gray-700 group-hover:text-pink-500 transition-colors">
                        {category._id}
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400 text-sm">
                          ({category.count})
                        </span>
                        <Plus className="h-4 w-4 text-gray-400 group-hover:text-pink-500 transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Best Sellers */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  BEST SELLERS
                </h3>
                <div className="space-y-4">
                  {products.slice(0, 3).map((product) => (
                    <div key={product._id} className="flex space-x-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm text-gray-900 line-clamp-2">
                          {product.name}
                        </h4>
                        <div className="flex items-center mt-1">
                          <div className="flex text-yellow-400">
                            {Array.from({ length: 5 }, (_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < Math.floor(product.rating || 0)
                                    ? "fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm font-bold text-gray-900 mt-1">
                          ${product.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Product Sections */}
              <div className="grid md:grid-cols-3 gap-8">
                {/* New Arrivals */}
                <div>
                  <h3 className="text-xl font-bold mb-6 text-gray-900">
                    New Arrivals
                  </h3>
                  <div className="space-y-4">
                    {newArrivals.map((product) => (
                      <div
                        key={product._id}
                        className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                      >
                        <div className="flex space-x-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-20 h-20 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-sm text-gray-900 line-clamp-2">
                              {product.name}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">
                              ({product.category})
                            </p>
                            <div className="flex items-center space-x-2 mt-2">
                              <span className="text-sm font-bold text-gray-900">
                                ${product.price}
                              </span>
                              {product.originalPrice && (
                                <span className="text-xs text-gray-500 line-through">
                                  ${product.originalPrice}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trending */}
                <div>
                  <h3 className="text-xl font-bold mb-6 text-gray-900">
                    Trending
                  </h3>
                  <div className="space-y-4">
                    {trending.map((product) => (
                      <div
                        key={product._id}
                        className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                      >
                        <div className="flex space-x-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-20 h-20 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-sm text-gray-900 line-clamp-2">
                              {product.name}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">
                              ({product.category})
                            </p>
                            <div className="flex items-center space-x-2 mt-2">
                              <span className="text-sm font-bold text-gray-900">
                                ${product.price}
                              </span>
                              {product.originalPrice && (
                                <span className="text-xs text-gray-500 line-through">
                                  ${product.originalPrice}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Rated */}
                <div>
                  <h3 className="text-xl font-bold mb-6 text-gray-900">
                    Top Rated
                  </h3>
                  <div className="space-y-4">
                    {topRated.map((product) => (
                      <div
                        key={product._id}
                        className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                      >
                        <div className="flex space-x-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-20 h-20 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-sm text-gray-900 line-clamp-2">
                              {product.name}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">
                              ({product.category})
                            </p>
                            <div className="flex items-center space-x-2 mt-2">
                              <span className="text-sm font-bold text-gray-900">
                                ${product.price}
                              </span>
                              {product.originalPrice && (
                                <span className="text-xs text-gray-500 line-through">
                                  ${product.originalPrice}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Our Services */}
              <div className="mt-12 bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-6 text-gray-900">
                  Our Services
                </h3>
                <div className="grid md:grid-cols-5 gap-6">
                  <div className="text-center">
                    <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Truck className="h-6 w-6 text-pink-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Worldwide Delivery
                    </h4>
                    <p className="text-sm text-gray-600">For Order Over $120</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Calendar className="h-6 w-6 text-pink-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Next Day Delivery
                    </h4>
                    <p className="text-sm text-gray-600">UK Orders Only</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Headphones className="h-6 w-6 text-pink-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Best Online Support
                    </h4>
                    <p className="text-sm text-gray-600">Hours: 9AM - 7PM</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <RotateCcw className="h-6 w-6 text-pink-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Return Policy
                    </h4>
                    <p className="text-sm text-gray-600">Easy & Free Return</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <DollarSign className="h-6 w-6 text-pink-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      30% Money Back
                    </h4>
                    <p className="text-sm text-gray-600">For Order Over $150</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium fashion and lifestyle
              products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors transform hover:scale-105">
              View All Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
