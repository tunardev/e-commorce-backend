import express from "express";
import * as controller from "../controllers/Product";
import * as productValidate from "../validate/product";
import isAuth from "../middleware/isAuth";
import validate from "../middleware/validate";
const router = express.Router();

router.get("/", controller.getProducts);
router.get("/:id", controller.getProduct);
router.post("/", isAuth, validate(productValidate.createProductValidate), controller.createProduct);
router.put("/:id", isAuth, validate(productValidate.updateProductValidate),controller.updateProduct);
router.delete("/:id", isAuth, controller.deleteProduct);

router.post("/:id/review", isAuth, controller.createReview);
router.put("/:id/review/:reviewId", isAuth, controller.updateReview);
router.delete("/:id/review/:reviewId", isAuth, controller.deleteReview);

export default router;
