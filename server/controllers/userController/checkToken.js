import { successResponse, errorResponse } from "../../middleware/responser.js";

const checkToken = async (req, res, next) => {
  try {
    successResponse(res, true);
  } catch (error) {
    errorResponse(res, error);
  }
};

export { checkToken };
