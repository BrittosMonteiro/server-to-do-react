import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import taskRouter from "./src/routes/taskRoute.js";

const app = express();
const CONNECT = process.env.MONGO_CONNECT;
const CONNECTDB = process.env.MONGO_DB;

app.use(express.json());
app.use(
  cors({
    origin: "https://to-do-react-mu-one.vercel.app/",
    allowedHeaders: "Content-Type",
  })
);

app.use("/tasks", taskRouter);

try {
  mongoose.set("strictQuery", true);
  mongoose.connect(`${CONNECT}/${CONNECTDB}`);
} catch (err) {
  console.log(err);
}

app.listen(process.env.PORT);
