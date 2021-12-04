import express from "express";
import * as controller from "../controllers/Product"
import isAuth from "../middleware/isAuth";
const router = express.Router();

router.get("/", isAuth, controller.getProducts);
router.get("/:id", isAuth, controller.getProduct);
router.post("/", isAuth, controller.createProduct);
router.put("/:id", isAuth, controller.updateProduct);
router.delete("/:id", isAuth, controller.deleteProduct);

export default router;
