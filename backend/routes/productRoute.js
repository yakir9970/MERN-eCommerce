import express from "express";
const router = express.Router();
import {
  getProductById,
  getProducts,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.route("/").get(getProducts).post(protect, admin, createProduct);

router.route("/:pid/review").post(protect, createProductReview);

// @desc    Fetch single product
// @route   GET /api/products/:pid
// @access  Public
router
  .route("/:pid")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
