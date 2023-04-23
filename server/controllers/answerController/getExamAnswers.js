import { successResponse, errorResponse } from "../../middleware/responser.js";
import { AnswerModel } from "../../models/answer.model.js";

const getExamAnswers = async (req, res, next) => {
  const { id } = req.params;
  const user = req.user;
  try {
    const response = await AnswerModel.find({ exam: id, user: user._id });
    successResponse(res, response);
  } catch (error) {
    errorResponse(res, error);
  }
};

export { getExamAnswers };
