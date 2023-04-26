import { successResponse, errorResponse } from "../../middleware/responser.js";
import { AnswerModel } from "../../models/answer.model.js";
import { FinalAnswerModel } from "../../models/finalAnswer.model.js";

const finalAnswer = async (req, res, next) => {
  try {
    console.log("in route of final answer");
    const { data } = req.body;
    const user = req.user;

    const newRecord = new FinalAnswerModel({
      user: user._id,
      data,
    });

    await AnswerModel.deleteMany({ user: user._id });

    await newRecord.save();

    successResponse(res, null, 201);
  } catch (error) {
    console.log("in route of final answer");
    errorResponse(res, error);
  }
};

export { finalAnswer };
