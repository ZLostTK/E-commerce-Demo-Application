import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Heart,
} from "lucide-react";
import config from "../config";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-gray-900">
                {config.BUSINESS.NAME}
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Your premier destination for fashion, accessories, and lifestyle
              products. Discover quality and style in every purchase.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-pink-100 p-2 rounded-full hover:bg-pink-200 transition-colors"
              >
                <Facebook className="h-5 w-5 text-pink-600" />
              </a>
              <a
                href="#"
                className="bg-pink-100 p-2 rounded-full hover:bg-pink-200 transition-colors"
              >
                <Twitter className="h-5 w-5 text-pink-600" />
              </a>
              <a
                href="#"
                className="bg-pink-100 p-2 rounded-full hover:bg-pink-200 transition-colors"
              >
                <Instagram className="h-5 w-5 text-pink-600" />
              </a>
              <a
                href="#"
                className="bg-pink-100 p-2 rounded-full hover:bg-pink-200 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-pink-600" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  Our Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  Customer Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  Men's Fashion
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  Women's Fashion
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  Jewelry & Watches
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  Perfume & Cosmetics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  Sports & Outdoor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-pink-500 transition-colors"
                >
                  Baby & Kids
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-pink-500 mt-0.5" />
                <div>
                  <p className="text-gray-600">{config.CONTACT.ADDRESS}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-pink-500" />
                <span className="text-gray-600">{config.CONTACT.PHONE}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-pink-500" />
                <span className="text-gray-600">{config.CONTACT.EMAIL}</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Newsletter</h4>
              <p className="text-sm text-gray-600">
                Subscribe for updates and exclusive offers
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © 2025 {config.BUSINESS.NAME}. All rights reserved. Made with{" "}
              <Heart className="inline h-4 w-4 text-pink-500" /> for fashion
              lovers.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
