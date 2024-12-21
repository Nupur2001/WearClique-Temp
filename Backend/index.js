import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import categoryRoutes from "./Route/category.route.js";
import productRoutes from "./Route/product.route.js";

// Configure dotenv
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000; // Use the PORT from the .env file, fallback to 4000
const DB_URI = process.env.MONGODBURI; // Get the MongoDB URI from the .env file

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/categories", categoryRoutes);
// app.use("/products", productRoutes);
app.use("/product", productRoutes);

// MongoDB Connection
mongoose.connect(DB_URI)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});