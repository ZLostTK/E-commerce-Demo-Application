const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      maxlength: [100, "Product name cannot be more than 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
      maxlength: [1000, "Description cannot be more than 1000 characters"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "Price must be greater than or equal to 0"],
    },
    originalPrice: {
      type: Number,
      min: [0, "Original price must be greater than or equal to 0"],
    },
    discount: {
      type: Number,
      min: [0, "Discount must be greater than or equal to 0"],
      max: [100, "Discount cannot be more than 100%"],
    },
    image: {
      type: String,
      required: [true, "Product image is required"],
    },
    images: [
      {
        url: {
          type: String,
          required: true,
        },
        alt: String,
        isPrimary: {
          type: Boolean,
          default: false,
        },
      },
    ],
    category: {
      type: String,
      required: [true, "Product category is required"],
      enum: [
        "Men's Fashion",
        "Women's Fashion", 
        "Footwear",
        "Watches",
        "Jewelry",
        "Sports",
        "Party Wear",
        "Perfume",
        "Beauty",
        "Accessories",
        "Baby & Kids"
      ],
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    brand: {
      type: String,
      trim: true,
    },
    sku: {
      type: String,
      unique: true,
      sparse: true,
    },
    stock: {
      type: Number,
      required: [true, "Stock quantity is required"],
      min: [0, "Stock cannot be negative"],
      default: 0,
    },
    weight: {
      type: Number,
      min: [0, "Weight must be greater than or equal to 0"],
    },
    dimensions: {
      length: Number,
      width: Number,
      height: Number,
    },
    tags: [String],
    isActive: {
      type: Boolean,
      default: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isDealOfTheDay: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      min: [0, "Rating must be greater than or equal to 0"],
      max: [5, "Rating cannot be more than 5"],
      default: 4.5,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    variants: [
      {
        name: String,
        value: String,
        price: Number,
        stock: Number,
      },
    ],
    specifications: [
      {
        name: String,
        value: String,
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create index for search
productSchema.index({
  name: "text",
  description: "text",
  tags: "text",
  category: "text",
});

// Virtual for discount percentage
productSchema.virtual("discountPercentage").get(function () {
  if (this.originalPrice && this.originalPrice > this.price) {
    return Math.round(
      ((this.originalPrice - this.price) / this.originalPrice) * 100
    );
  }
  return this.discount || 0;
});

// Virtual for primary image
productSchema.virtual("primaryImage").get(function () {
  if (this.image) return this.image;
  const primary = this.images.find((img) => img.isPrimary);
  return primary ? primary.url : this.images[0] ? this.images[0].url : "";
});

// Ensure virtual fields are serialized
productSchema.set("toJSON", {
  virtuals: true,
});

module.exports = mongoose.model("Product", productSchema);
