import TaskModel from "../model/taskModel.js";

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

export async function readTasks(req, res) {
  let taskList = [];

  await TaskModel.find().then((docs) => {
    for (let doc of docs) {
      const task = {
        id: doc._id,
        status: doc.status,
        title: doc.title,
        startDate: doc.startDate,
        endDate: doc.endDate,
        totalTime: doc.totalTime,
        items: doc.items,
        checkList: doc.checkList,
        notes: doc.notes,
      };
      taskList.push(task);
    }
  });

  return res.send(taskList);
}

export async function readTaskById(req, res) {
  const { id } = req.body;

  const task = await TaskModel.findById(id);

  return res.send(task);
}

export async function updateTask(req, res) {
  const task = req.body;

  const taskUpdate = await TaskModel.findByIdAndUpdate(task.id, {
    status: task.status,
    title: task.title,
    startDate: task.startDate,
    endDate: task.endDate,
    totalTime: task.totalTime,
    items: task.items,
    checkList: task.checkList,
    notes: task.notes,
  });

  return res.send(taskUpdate);
}

export async function updateTaskStatus(req, res) {}

export async function deleteTask(req, res) {
  const { id } = req.body;

  const remove = await TaskModel.findByIdAndDelete(id);

  return res.send(remove);
}

export async function deleteTasks(req, res) {}
