import express from "express";
import * as examController from "../controllers/examController/index.js";
import { checkUserRole } from "../middleware/auth.js";

const examRouter = express.Router();

examRouter.post("/", examController.postExam);
examRouter.get("/:id", checkUserRole, examController.getExam);
examRouter.post("/finalAnswer", checkUserRole, examController.finalAnswer);

export { examRouter };
