import express from "express";
import auth from "../controller/authController.js";
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

taskRouter.post("/", auth, createTask);

taskRouter.get("/:idUser", auth, readTasks);

taskRouter.get("/taskId", auth, readTaskById);

taskRouter.put("/", auth, updateTask);

taskRouter.patch("/", auth, updateTaskStatus);

taskRouter.delete("/deleteTask", auth, deleteTask);

taskRouter.delete("/deleteAll", auth, deleteTasks);

export default taskRouter;
