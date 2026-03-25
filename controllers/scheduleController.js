
exports.generateSchedule = (req, res) => {
  const { examDate, topics } = req.body;
  

  const topicList = topics.split(",");

  let days = Math.ceil(
    (new Date(examDate) - new Date()) / (1000 * 60 * 60 * 24)
  );

  // 🔥 FIX: minimum 1 day
  if (days <= 0) {
    days = 1;
  }

  let topicsPerDay = Math.ceil(topicList.length / days);

  let plan = [];
  let day = 1;

  for (let i = 0; i < topicList.length; i += topicsPerDay) {
    let dailyTopics = topicList.slice(i, i + topicsPerDay);
    plan.push(`Day ${day}: ${dailyTopics.join(", ")}`);
    day++;
  }

  res.render("schedule", { plan });
};