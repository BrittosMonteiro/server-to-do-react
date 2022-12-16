import "dotenv/config";
import express from "express";
// import cors from "cors";
import mongoose from "mongoose";

const CONNECT = process.env.MONGO_CONNECT;
const CONNECTDB = process.env.MONGO_DB;

import taskRouter from "./src/routes/taskRoute.js";

const api = express();
api.use(express.json());
// api.use(cors);

api.use("/tasks", taskRouter);

try {
  mongoose.set("strictQuery", true);
  mongoose.connect(`${CONNECT}/${CONNECTDB}`);
} catch (err) {
  console.log(err);
}

api.listen(process.env.PORT, () => {
  console.log(`Server running on PORT: ${process.env.PORT}`);
});
