import express from "express";
import auth from "./auth";
import product from "./product";
import order from "./order";
const router = express.Router();

router.use("/auth", auth); // auth routes
router.use("/product", product); // product routes
router.use("/order", order); /// order routes

export default router; // export routes
