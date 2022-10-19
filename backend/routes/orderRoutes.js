import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
} from "../controllers/orderController.js";
import protect from "../middleware/authMiddleware.js";

router.route("/").post(protect, addOrderItems);
router.route("/:oid").get(protect, getOrderById);
router.route("/:oid/pay").put(protect, updateOrderToPaid);

export default router;
