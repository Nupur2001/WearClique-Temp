import Category from "../models/category.model.js";

export const getCategories = async (req, res) => {
    try {
        const categoryDocument = await Category.findOne(); // Fetch the first document
        if (!categoryDocument) {
            return res.status(404).json({ message: "No categories found" });
        }
        res.status(200).json(categoryDocument.categories);
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).json({ message: "Failed to fetch categories" });
    }
};
