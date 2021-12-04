import express from "express";
import auth from "./auth";
import product from "./product";
const router = express.Router();

router.use("/auth", auth);
router.use("/product", product);

export default router;
