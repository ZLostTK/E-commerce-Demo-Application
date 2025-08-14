import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, Zap } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const { getTotalItems } = useCart();
  const location = useLocation();
  const totalItems = getTotalItems();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              <Zap className="h-8 w-8" />
              <span>ElectroStore</span>
            </Link>
          </div>

          <div className="hidden md:block flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className={`hover:text-blue-600 transition-colors ${isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
            >
              Home
            </Link>
            <Link
              to="/cart"
              className={`relative hover:text-blue-600 transition-colors ${isActive('/cart') ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
            >
              <div className="flex items-center space-x-1">
                <ShoppingCart className="h-5 w-5" />
                <span>Cart</span>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
            </Link>
            <Link
              to="/login"
              className={`hover:text-blue-600 transition-colors ${isActive('/login') ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
            >
              <div className="flex items-center space-x-1">
                <User className="h-5 w-5" />
                <span>Login</span>
              </div>
            </Link>
            <Link
              to="/admin"
              className={`hover:text-blue-600 transition-colors ${isActive('/admin') ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
            >
              Admin
            </Link>
            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;