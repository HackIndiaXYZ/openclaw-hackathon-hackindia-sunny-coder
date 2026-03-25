function generateSchedule() {
  const topicsInput = document.getElementById("topics").value;
  const examDate = document.getElementById("examDate").value;

  if (!topicsInput || !examDate) {
    alert("Fill all fields");
    return;
  }

  const topics = topicsInput.split(",").map(t => t.trim());
  const list = document.getElementById("scheduleList");
  list.innerHTML = "";

  const today = new Date();
  const exam = new Date(examDate);

  const days = Math.ceil((exam - today) / (1000 * 60 * 60 * 24));

  if (days < 0) {
    alert("Invalid exam date");
    return;
  }

  let topicIndex = 0;

  for (let i = 1; i <= days; i++) {
    if (topicIndex >= topics.length) break;

    const li = document.createElement("li");

    li.innerText = `Day ${i}: ${topics[topicIndex]}`;

    list.appendChild(li);

    topicIndex++;
  }
}