import { successResponse, errorResponse } from "../../middleware/responser.js";
import { ExamModel } from "../../models/exam.model.js";

const postExam = async (req, res, next) => {
  try {
    const { questions, name } = req.body;

    // validation on not having duplicate index

    const newExam = new ExamModel({
      name,
      questions,
    });
    const response = await newExam.save();

    successResponse(res, response);
  } catch (error) {
    errorResponse(res, error);
  }
};

export { postExam };
