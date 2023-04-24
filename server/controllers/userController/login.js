import { successResponse, errorResponse } from "../../middleware/responser.js";
import { UserModel } from "../../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const validUser = await UserModel.findOne({ email });

    if (!validUser) {
      throw new Error("User was not found,404");
    }

    const validPassword = await bcryptjs.compare(password, validUser.password);
    if (!validPassword) {
      throw new Error("Password is not valid,400");
    }

    const token = jwt.sign(
      { email, _id: validUser._id },
      process.env.SECRET_KEY,
      {
        expiresIn: "7d",
      }
    );
    successResponse(res, { user: validUser, token });
  } catch (error) {
    errorResponse(res, error);
  }
};

export { login };
