import mongoose from "mongoose";

const categoryItemSchema = mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    image_link: String,
});

const categorySchema = mongoose.Schema({
    categories: [categoryItemSchema],
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
