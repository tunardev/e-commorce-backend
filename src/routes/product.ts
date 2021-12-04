import express from "express";
import * as controller from "../controllers/Product";
import * as productValidate from "../validate/product";
import isAuth from "../middleware/isAuth";
import validate from "../middleware/validate";
const router = express.Router();

router.get("/", controller.getProducts); // route /api/v1/product (GET)
router.get("/:id", controller.getProduct); // route /api/v1/product/:id (GET)
router.post("/", isAuth, validate(productValidate.createProductValidate), controller.createProduct); // route /api/v1/product/:id (POST)
router.put("/:id", isAuth, validate(productValidate.updateProductValidate),controller.updateProduct); // route /api/v1/product/:id (PUT)
router.delete("/:id", isAuth, controller.deleteProduct); // route /api/v1/product/:id (DELETE)

router.post("/:id/review", isAuth, validate(productValidate.createReviewValidate), controller.createReview); // route /api/v1/review (POST)
router.put("/:id/review/:reviewId", isAuth, validate(productValidate.updateReviewValidate), controller.updateReview); // route /api/v1/review (PUT)
router.delete("/:id/review/:reviewId", isAuth, controller.deleteReview); // route /api/v1/review (DELETE)

export default router; //export router