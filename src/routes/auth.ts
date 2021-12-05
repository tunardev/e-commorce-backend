import express from "express";
import * as controller from "../controllers/User";
import * as userValidate from "../validate/user";
import validate from "../middleware/validate";
const router = express.Router();

router.post("/login", validate(userValidate.loginValidate), controller.login); // route /api/v1/auth/login (POST)
router.post("/register", validate(userValidate.registerValidate), controller.register); // route /api/v1/auth/register (POST)
router.post("/forgotpassword", validate(userValidate.forgotPasswordValidate), controller.forgotPassword); // route /api/v1/auth/forgotpassword (POST)
router.post("/changepassword/:token", validate(userValidate.changePasswordValidate), controller.changePassword); // route /api/v1/auth/changepassword/:token (POST)
router.get("/@me", controller.me); // route /api/v1/auth/@me (GET)

export default router; // export router
