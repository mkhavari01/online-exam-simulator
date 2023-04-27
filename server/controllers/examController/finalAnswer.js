import { successResponse, errorResponse } from "../../middleware/responser.js";
import { AnswerModel } from "../../models/answer.model.js";
import { FinalAnswerModel } from "../../models/finalAnswer.model.js";

const finalAnswer = async (req, res, next) => {
  try {
    console.log("in route of final answer");
    const { data } = req.body;
    const user = req.user;

    console.log("data", data);

    // const newRecord = new FinalAnswerModel({
    //   user: user._id,
    //   data,
    // });

    const response = await FinalAnswerModel.replaceOne(
      { user: user._id },
      { user: user._id, data: data },
      {
        new: true,
        runValidators: true,
        upsert: true,
      }
    );

    // await newRecord.save();
    // await AnswerModel.deleteMany({ user: user._ids });

    successResponse(res, response, 201);
  } catch (error) {
    console.log("in route of final answer");
    errorResponse(res, error);
  }
};

export { finalAnswer };
