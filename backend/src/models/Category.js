const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
      unique: true,
      trim: true,
      maxlength: [50, "Category name cannot be more than 50 characters"],
    },
    description: {
      type: String,
      maxlength: [500, "Description cannot be more than 500 characters"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    image: {
      type: String,
    },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    sortOrder: {
      type: Number,
      default: 0,
    },
    metaTitle: {
      type: String,
      maxlength: [60, "Meta title cannot be more than 60 characters"],
    },
    metaDescription: {
      type: String,
      maxlength: [160, "Meta description cannot be more than 160 characters"],
    },
  },
  {
    timestamps: true,
  }
);

// Generate slug from name
categorySchema.pre("save", function (next) {
  if (!this.isModified("name")) {
    return next();
  }

  this.slug = this.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  next();
});

// Virtual for subcategories
categorySchema.virtual("subcategories", {
  ref: "Category",
  localField: "_id",
  foreignField: "parent",
});

// Ensure virtual fields are serialized
categorySchema.set("toJSON", {
  virtuals: true,
});

module.exports = mongoose.model("Category", categorySchema);
