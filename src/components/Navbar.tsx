import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ShoppingCart,
  User,
  Search,
  Menu,
  Heart,
  ChevronDown,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import config from "../config";

const Navbar: React.FC = () => {
  const { getTotalItems } = useCart();
  const location = useLocation();
  const totalItems = getTotalItems();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-pink-300 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-pink-300 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-pink-300 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-pink-300 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>

            <div className="text-center">
              <span className="font-medium">
                FREE SHIPPING THIS WEEK ORDER OVER -{" "}
                {config.BUSINESS.CURRENCY_SYMBOL}
                {config.BUSINESS.FREE_SHIPPING_THRESHOLD}
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <select className="bg-transparent border-none text-white text-sm focus:outline-none">
                <option>
                  {config.BUSINESS.CURRENCY} {config.BUSINESS.CURRENCY_SYMBOL}
                </option>
                <option>EUR €</option>
              </select>
              <select className="bg-transparent border-none text-white text-sm focus:outline-none">
                <option>ENGLISH</option>
                <option>ESPAÑOL</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                to="/"
                className="text-3xl font-bold text-gray-900 hover:text-pink-500 transition-colors"
              >
                {config.BUSINESS.NAME}
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:block flex-1 max-w-lg mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your product name..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all bg-gray-50"
                />
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-6">
              <Link
                to="/login"
                className="text-gray-700 hover:text-pink-500 transition-colors"
              >
                <User className="h-6 w-6" />
              </Link>
              <Link
                to="/wishlist"
                className="text-gray-700 hover:text-pink-500 transition-colors"
              >
                <Heart className="h-6 w-6" />
              </Link>
              <Link
                to="/cart"
                className="relative text-gray-700 hover:text-pink-500 transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </Link>
              <button
                className="md:hidden text-gray-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Main Menu */}
          <div className="hidden md:block border-t border-gray-100">
            <div className="flex justify-center space-x-8 py-4">
              <Link
                to="/"
                className={`font-medium hover:text-pink-500 transition-colors ${
                  isActive("/") ? "text-pink-500" : "text-gray-700"
                }`}
              >
                HOME
              </Link>
              <div className="relative group">
                <button className="font-medium hover:text-pink-500 transition-colors flex items-center space-x-1">
                  <span>CATEGORIES</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link
                    to="/category/Men's%20Fashion"
                    className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500"
                  >
                    MEN'S
                  </Link>
                  <Link
                    to="/category/Women's%20Fashion"
                    className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500"
                  >
                    WOMEN'S
                  </Link>
                  <Link
                    to="/category/Jewelry"
                    className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500"
                  >
                    JEWELRY
                  </Link>
                  <Link
                    to="/category/Perfume"
                    className="block px-4 py-2 text-gray-700 hover:bg-pink-50 hover:text-pink-500"
                  >
                    PERFUME
                  </Link>
                </div>
              </div>
              <Link
                to="/category/Men's%20Fashion"
                className="font-medium hover:text-pink-500 transition-colors"
              >
                MEN'S
              </Link>
              <Link
                to="/category/Women's%20Fashion"
                className="font-medium hover:text-pink-500 transition-colors"
              >
                WOMEN'S
              </Link>
              <Link
                to="/category/Jewelry"
                className="font-medium hover:text-pink-500 transition-colors"
              >
                JEWELRY
              </Link>
              <Link
                to="/category/Perfume"
                className="font-medium hover:text-pink-500 transition-colors"
              >
                PERFUME
              </Link>
              <Link
                to="/blog"
                className="font-medium hover:text-pink-500 transition-colors"
              >
                BLOG
              </Link>
              <Link
                to="/hot-offers"
                className="font-medium hover:text-pink-500 transition-colors"
              >
                HOT OFFERS
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4">
              <div className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className="font-medium hover:text-pink-500 transition-colors"
                >
                  HOME
                </Link>
                <Link
                  to="/category/Men's%20Fashion"
                  className="font-medium hover:text-pink-500 transition-colors"
                >
                  MEN'S
                </Link>
                <Link
                  to="/category/Women's%20Fashion"
                  className="font-medium hover:text-pink-500 transition-colors"
                >
                  WOMEN'S
                </Link>
                <Link
                  to="/category/Jewelry"
                  className="font-medium hover:text-pink-500 transition-colors"
                >
                  JEWELRY
                </Link>
                <Link
                  to="/category/Perfume"
                  className="font-medium hover:text-pink-500 transition-colors"
                >
                  PERFUME
                </Link>
                <Link
                  to="/blog"
                  className="font-medium hover:text-pink-500 transition-colors"
                >
                  BLOG
                </Link>
                <Link
                  to="/hot-offers"
                  className="font-medium hover:text-pink-500 transition-colors"
                >
                  HOT OFFERS
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
