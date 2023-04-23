import express from "express";
import * as answerController from "../controllers/answerController/index.js";
import { checkUserRole } from "../middleware/auth.js";

const answerRouter = express.Router();

answerRouter.put("/", checkUserRole, answerController.updateAnswer);
answerRouter.get("/:id", checkUserRole, answerController.getExamAnswers);

export { answerRouter };
