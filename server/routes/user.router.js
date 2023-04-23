import express from "express";
import * as userController from "../controllers/userController/index.js";

const userRouter = express.Router();

userRouter.post("/login", userController.login);
userRouter.post("/signup", userController.signup);
userRouter.post("/loguot", userController.logout);

export { userRouter };
