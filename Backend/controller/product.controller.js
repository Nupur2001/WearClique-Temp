import Product from "../models/product.model.js";

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get products by category
export const getProductsByCategory = async (req, res) => {
  const { category } = req.params; // Get the category from the URL parameter

  try {
    // Case-insensitive query for category
    const products = await Product.find({ category: { $regex: new RegExp(category, "i") } });

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found in this category." });
    }

    res.status(200).json(products);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
