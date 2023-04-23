import mongoose from "mongoose";

const FormSchema = new mongoose.Schema(
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

const FormModel = mongoose.model("Form", FormSchema);

export { FormModel };
