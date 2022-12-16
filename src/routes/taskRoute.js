import express from "express";
import {
  createTask,
  deleteTask,
  deleteTasks,
  readTaskById,
  readTasks,
  updateTask,
  updateTaskStatus,
} from "../controller/taskController.js";
const taskRouter = express.Router();

taskRouter.post("/", createTask);

taskRouter.get("/", readTasks);

taskRouter.get("/taskId", readTaskById);

taskRouter.put("/", updateTask);

taskRouter.patch("/", updateTaskStatus);

taskRouter.delete("/taskId", deleteTask);

taskRouter.delete("/", deleteTasks);

export default taskRouter;
