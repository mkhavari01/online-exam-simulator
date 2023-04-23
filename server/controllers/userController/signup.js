import { successResponse, errorResponse } from "../../middleware/responser.js";
import { UserModel } from "../../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcryptjs.hash(password, 12);
    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    const response = await newUser.save();
    const token = jwt.sign(
      { email, _id: response._id },
      process.env.SECRET_KEY,
      {
        expiresIn: "7d",
      }
    );
    successResponse(res, { name, token });
  } catch (error) {
    errorResponse(res, error);
  }
};

export { signup };
