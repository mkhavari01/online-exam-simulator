import mongoose from "mongoose";

const FormSchema = new mongoose.Schema(
  {
    form: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Form",
      required: true,
    },
    formIndex: { type: Number, required: true },
    answer: { type: String, required: false, default: "" },
  },
  {
    timestamps: true,
  }
);

const FormModel = mongoose.model("Form", FormSchema);

export { FormModel };
