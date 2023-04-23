import { successResponse, errorResponse } from "../../middleware/responser.js";
import { AnswerModel } from "../../models/answer.model.js";

const getExamAnswers = async (req, res, next) => {
  const { id } = req.params;
  try {
    const response = await AnswerModel.findById({ exam: id });
    successResponse(res, response);
  } catch (error) {
    errorResponse(res, error);
  }
};

export { getExamAnswers };
