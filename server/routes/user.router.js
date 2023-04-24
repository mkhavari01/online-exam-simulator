import express from "express";
import * as userController from "../controllers/userController/index.js";
import { checkUserRole } from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/login", userController.login);
userRouter.post("/check-token", checkUserRole, userController.checkToken);
userRouter.post("/signup", userController.signup);
userRouter.post("/loguot", userController.logout);

export { userRouter };
