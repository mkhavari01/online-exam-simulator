import mongoose from "mongoose";

const LogSchema = new mongoose.Schema(
  {
    method: {
      type: String,
      required: true,
    },
    ip: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    requestBody: {
      type: Object,
      default: null,
    },
    responseHeaders: {
      type: Object,
      default: null,
    },
    responseBody: {
      type: Object,
      default: null,
    },
    responseStatus: {
      type: Number,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const LogModel = mongoose.model("Log", LogSchema);

export { LogModel };
