import express from "express";
import * as controller from "../controllers/User";
const router = express.Router();

router.post("/login", controller.login);
router.post("/register", controller.register);
router.post("/forgotpassword", controller.forgotPassword);
router.post("/changepassword", controller.changePassword);
router.get("/me", controller.me);

export default router;
