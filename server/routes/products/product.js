import express from "express";
import {
  createNewProduct,
  createProductReview,
  deleteProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
} from "../../controllers/products/product.js";
import { authMiddleware } from "../../middlewares/user/authMiddleware.js";

const productRoutes = express.Router();

productRoutes.get("/", getAllProduct);
productRoutes.post("/new/create", createNewProduct);
productRoutes.put("/update/:id", updateProduct);
productRoutes.delete("/delete/:id", deleteProduct);
// get single product
productRoutes.get("/:id", getSingleProduct);

// make product review
productRoutes.put("/make/new/reviews/:id", authMiddleware, createProductReview);

export default productRoutes;
