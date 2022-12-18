import express from "express";
import {
  createAccount,
  deleteAccount,
  login,
  updatePassword,
} from "../controller/loginController.js";
const loginRouter = express.Router();

loginRouter.post("/create-account", createAccount);

loginRouter.post("/", login);

loginRouter.patch("/update-password", updatePassword);

loginRouter.delete("/delete-account", deleteAccount);

export default loginRouter;
