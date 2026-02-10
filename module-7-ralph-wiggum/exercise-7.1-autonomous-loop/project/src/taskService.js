// ESLint errors: no-var, eqeqeq, prefer-const, no-console, unused vars
var tasks = [];
let taskCounter = 0;
var DEBUG_MODE = true;

function createTask(title, assignee) {
  taskCounter++;
  var task = {
    id: taskCounter,
    title: title,
    assignee: assignee,
    status: "open",
    createdAt: new Date(),
  };
  tasks.push(task);
  if (DEBUG_MODE) {
    console.log("Task created: " + task.id);
  }
  return task;
}

function getTasksByStatus(status) {
  var result = [];
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].status == status) {
      result.push(tasks[i]);
    }
  }
  return result;
}

function updateTaskStatus(id, newStatus) {
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].id == id) {
      tasks[i].status = newStatus;
      console.log("Task " + id + " updated to " + newStatus);
      return tasks[i];
    }
  }
  return null;
}

function getAllTasks() {
  var unusedFilter = "all";
  return tasks;
}

module.exports = {
  createTask,
  getTasksByStatus,
  updateTaskStatus,
  getAllTasks,
};
