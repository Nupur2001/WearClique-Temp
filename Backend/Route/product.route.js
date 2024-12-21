// import express from "express";
// import { getProducts, getProductsByCategory } from "../controller/product.controller.js";

// const router = express.Router();

// router.get("/", getProducts);
// router.get("/:category", getProductsByCategory);

// export default router;

import express from "express";
import { getProducts, getProductsByCategory, getProductById } from "../controller/product.controller.js";

const router = express.Router();

router.get("/product/:productId", getProductById);
router.get("/category/:category", getProductsByCategory);
router.get("/", getProducts);

export default router;



