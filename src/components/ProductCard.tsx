import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, Star, Clock } from "lucide-react";
import { Product } from "../services/api";
import { useCart } from "../context/CartContext";
import { formatPrice, isFreeShippingEligible } from "../config";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
    }

    return stars;
  };

  const discountPercentage =
    product.originalPrice && product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100
        )
      : 0;

  return (
    <Link to={`/product/${product._id}`} className="group">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Discount Badge */}
          {product.originalPrice && product.price < product.originalPrice && (
            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              -{discountPercentage}%
            </div>
          )}

          {/* Deal of the Day Badge */}
          {product.isDealOfTheDay && (
            <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>DEAL</span>
            </div>
          )}

          {/* Quick Actions */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex space-x-2">
              <button
                onClick={handleAddToCart}
                className="bg-white text-gray-800 p-2 rounded-full hover:bg-pink-500 hover:text-white transition-colors"
                title="Add to cart"
              >
                <ShoppingCart className="h-5 w-5" />
              </button>
              <button
                className="bg-white text-gray-800 p-2 rounded-full hover:bg-pink-500 hover:text-white transition-colors"
                title="Add to wishlist"
              >
                <Heart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Category */}
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            {product.category}
          </p>

          {/* Product Name */}
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-pink-500 transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center space-x-1 mb-2">
            <div className="flex">{renderStars(product.rating)}</div>
            <span className="text-xs text-gray-500">
              ({product.numReviews})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-lg font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && product.price < product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Free Shipping Badge */}
          {isFreeShippingEligible(product.price) && (
            <div className="text-xs text-green-600 font-medium mb-2">
              ✓ Free Shipping
            </div>
          )}

          {/* Stock Status */}
          <div className="text-xs text-gray-500">
            {product.stock > 0 ? (
              <span className="text-green-600">
                In Stock ({product.stock} available)
              </span>
            ) : (
              <span className="text-red-600">Out of Stock</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
