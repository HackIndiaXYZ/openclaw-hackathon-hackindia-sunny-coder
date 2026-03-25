const Task = require("../models/Task");

exports.getDashboard = async (req, res) => {

  const tasks = await Task.find({ user: req.user._id });
  console.log("ALL TASKS:", tasks);

  const today = new Date();
  today.setHours(0,0,0,0);

  // ✅ Today's tasks
  const todayTasks = tasks.filter(t => {
  const d = new Date(t.date);

  return (
    d.getDate() === today.getDate() &&
    d.getMonth() === today.getMonth() &&
    d.getFullYear() === today.getFullYear()
  );
});
  console.log("TODAY'S TASKS:", todayTasks);

  // ✅ Completed today
  const completedToday = todayTasks.length;

  // ✅ Streak logic
  let streak = 0;
  let current = new Date();

  while(true){
    current.setHours(0,0,0,0);

    const found = tasks.find(t => {
      const d = new Date(t.date);
      d.setHours(0,0,0,0);
      return d.getTime() === current.getTime();
    });

    if(found){
      streak++;
      current.setDate(current.getDate() - 1);
    } else break;
  }

  // ✅ Chart data (last 7 days)
  let chartData = {
    labels: [],
    values: []
  };

  for(let i = 6; i >= 0; i--){
    const day = new Date();
    day.setDate(day.getDate() - i);
    day.setHours(0,0,0,0);

    const count = tasks.filter(t => {
      const d = new Date(t.date);
      d.setHours(0,0,0,0);
      return d.getTime() === day.getTime();
    }).length;

    chartData.labels.push(day.toLocaleDateString());
    chartData.values.push(count);
  }

  res.render("dashboard", {
    todayTasks,
    completedToday,
    streak,
    chartData
  });

};