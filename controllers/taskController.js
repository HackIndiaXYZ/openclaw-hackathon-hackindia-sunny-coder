const Task = require("../models/Task");

// Add Task
exports.addTask = async (req, res) => {
  const { title, subject, studyType, date } = req.body;

  const newTask = new Task({
    user: req.user._id,
    title,
    subject,
    studyType,
    date
  });

  await newTask.save();
  res.redirect("/planner");
};

// Get Tasks
exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user._id });
  res.render("planner", { tasks });
};

// Delete Task
exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.redirect("/planner");
};