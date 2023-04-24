import jwt from "jsonwebtoken";
import { errorResponse } from "./responser.js";
import { UserModel } from "../models/user.model.js";

const checkUserRole = async (req, res, next) => {
  try {
    const token = req.headers.token;
    if (!token) {
      throw new Error("please provide a token,400");
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (decoded) {
      const user = await UserModel.findById(decoded._id);
      if (!user) {
        throw new Error("Token is invalid,400");
      }
      req.user = user;
      next();
    } else {
      throw new Error("you are not logged in,400");
    }
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      error.message = "Invalid token provided";
    }
    errorResponse(res, error);
  }
};

export { checkUserRole };
