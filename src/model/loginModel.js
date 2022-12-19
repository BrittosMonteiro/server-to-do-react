import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  username: { type: String, unique: true },
  password: { type: String },
});

const UserModel = mongoose.model("user", userSchema);

export default UserModel;
