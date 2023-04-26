import mongoose from "mongoose";

const finalAnswerSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    data: [
      {
        examIndex: { type: Number, required: true },
        answer: { type: String, required: false, default: "" },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const FinalAnswerModel = mongoose.model("FinalAnswer", finalAnswerSchema);

export { FinalAnswerModel };
