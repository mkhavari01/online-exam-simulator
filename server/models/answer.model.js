import mongoose from "mongoose";

const asnwerSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // exam: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Exam",
    //   required: true,
    // },
    examIndex: { type: Number, required: true },
    answer: { type: String, required: false, default: "" },
  },
  {
    timestamps: true,
  }
);

const AnswerModel = mongoose.model("Answer", asnwerSchema);

export { AnswerModel };
