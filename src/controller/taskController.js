import TaskModel from "../model/taskModel";

export async function createTask(req, res) {
  const newTask = req.body;

  if (!newTask) return;

  const taskModel = new TaskModel({
    status: newTask.status,
    title: newTask.title,
    startDate: newTask.startDate,
    endDate: newTask.endDate,
    totalTime: newTask.totalTime,
    items: newTask.items,
    checkList: newTask.checkList,
    notes: newTask.notes,
  });

  const create = await taskModel.save();

  return res.send(create);
}

export async function readTasks(req, res) {}

export async function readTaskById(req, res) {}

export async function updateTask(req, res) {}

export async function updateTaskStatus(req, res) {}

export async function deleteTask(req, res) {}

export async function deleteTasks(req, res) {}
