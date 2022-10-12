import express from "express";
const router = express.Router();
import {
  getProductById,
  getProducts,
} from "../controllers/productController.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.route("/").get(getProducts);

// @desc    Fetch single product
// @route   GET /api/products/:pid
// @access  Public
router.route("/:pid").get(getProductById);

export default router;
