import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import taskRouter from "./src/routes/taskRoute.js";
import loginRouter from "./src/routes/loginRoute.js";

const app = express();
const CONNECT = process.env.MONGO_CONNECT;
const CONNECTDB = process.env.MONGO_DB;
const PORT = process.env.PORT || 5050;

app.use(express.json());

const whitelist = [
  "http://localhost:3000",
  "https://to-do-react-mu-one.vercel.app",
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

app.get("/", async (req, res) => {
  return res.send("Backend funcionando");
});

app.use("/tasks", taskRouter);
app.use("/login", loginRouter);

try {
  mongoose.set("strictQuery", true);
  mongoose.connect(`${CONNECT}/${CONNECTDB}`);
} catch (err) {
  console.log(err);
}

app.listen(PORT);
