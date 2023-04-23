import { successResponse, errorResponse } from "../../middleware/responser.js";

const logout = async (req, res, next) => {
  try {
    console.log("we r in logout route");
    successResponse(res);
  } catch (error) {
    errorResponse(res, error);
  }
};

export { logout };
