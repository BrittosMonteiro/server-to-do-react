import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  status: Number,
  title: String,
  startDate: String,
  endDate: String,
  totalTime: String,
  items: Array,
  checkList: Array,
  notes: String,
});

const TaskModel = mongoose.model("task", taskSchema);

export default TaskModel;
