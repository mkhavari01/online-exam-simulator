import mongoose from "mongoose";

const ExamSchema = new mongoose.Schema(
  {
    questions: [
      {
        questionType: { type: Number, required: true, enum: [0, 1] },
        index: { type: Number, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const ExamModel = mongoose.model("Exam", ExamSchema);

export { ExamModel };
