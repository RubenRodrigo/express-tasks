import { Router } from "express";
import { handleTaskController } from "../controllers/handle.task.controller";
import { createTaskController } from "../controllers/create.task.controller";

const router = Router();

router.post("/handle", handleTaskController);
router.post("/create", createTaskController);

export default router;
