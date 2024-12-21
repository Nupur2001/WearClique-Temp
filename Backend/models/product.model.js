import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  id: Number,
  category: String,
  product_title: String,
  product_short_description: String,
  product_long_description: String,
  product_price: Number,
  product_images: [String],
  product_available_colors: [String],
  product_available_sizes: [String],
  product_available_fits: [String],
});

const Product = mongoose.model("Product", productSchema);

export default Product;
