import "dotenv/config";
import express from "express";
import cors from "cors";
import taskRouter from "./src/routes/taskRoute.js";

const api = express();
api.use(express.json());
api.use(cors);

api.use("/tasks", taskRouter);

api.listen(process.env.PORT, () => {
  console.log(`Server running on PORT: ${process.env.PORT}`);
});
