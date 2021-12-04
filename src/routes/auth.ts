import express from "express";
import * as controller from "../controllers/User";
import * as userValidate from "../validate/user";
import validate from "../middleware/validate";
const router = express.Router();

router.post("/login", validate(userValidate.loginValidate), controller.login);
router.post("/register", validate(userValidate.registerValidate), controller.register);
router.post("/forgotpassword", validate(userValidate.forgotPasswordValidate), controller.forgotPassword);
router.post("/changepassword/:token", validate(userValidate.changePasswordValidate), controller.changePassword);
router.get("/@me", controller.me);

export default router;
