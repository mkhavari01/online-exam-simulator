import { successResponse, errorResponse } from "../../middleware/responser.js";
import { AnswerModel } from "../../models/answer.model.js";
import { ExamModel } from "../../models/exam.model.js";

const updateAnswer = async (req, res, next) => {
  try {
    const { answer, examIndex } = req.body;
    const user = req.user;

    //// we are using static web form

    // const doc = await ExamModel.findById(exam);

    // if (!doc) {
    //   throw new Error("This exam is not available,404");
    // }

    if (doc.questions.length - 1 < examIndex) {
      throw new Error("This exam don't have this question,404");
    }

    const response = await AnswerModel.findOneAndUpdate(
      { user: user._id, examIndex },
      { answer },
      {
        new: true,
        runValidators: true,
        upsert: true,
      }
    );

    successResponse(res, response);
  } catch (error) {
    errorResponse(res, error);
  }
};

export { updateAnswer };
