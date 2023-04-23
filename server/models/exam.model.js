import mongoose from "mongoose";

const ExamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
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
