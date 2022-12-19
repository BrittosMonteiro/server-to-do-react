import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  status: Number,
  title: { type: String, required: true },
  startDate: String,
  endDate: String,
  totalTime: String,
  items: Array,
  checkList: Array,
  notes: String,
  idUser: { type: String, required: true },
});

const TaskModel = mongoose.model("task", taskSchema);

export default TaskModel;
