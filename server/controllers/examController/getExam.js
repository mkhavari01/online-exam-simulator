import { successResponse, errorResponse } from "../../middleware/responser.js";
import { ExamModel } from "../../models/exam.model.js";

const getExam = async (req, res, next) => {
  const { id } = req.params;
  try {
    const response = await ExamModel.findById(id);
    if (!response) {
      throw new Error("Exam wasn't found,404");
    }
    successResponse(res, response);
  } catch (error) {
    errorResponse(res, error);
  }
};

export { getExam };
