let time = 25 * 60;
let timer;
let running = false;
let sessions = 0;
let focusTime = 0;

function updateDisplay() {
  let min = Math.floor(time / 60);
  let sec = time % 60;

  document.getElementById("time").innerText =
    `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

function startTimer() {
  if (running) return;

  running = true;
  timer = setInterval(() => {
    time--;

    if (time <= 0) {
      clearInterval(timer);
      running = false;
      sessions++;
      focusTime += 25;

      document.getElementById("sessions").innerText = sessions;
      document.getElementById("focus").innerText = focusTime;

      alert("Session Complete 🎉");
      time = 25 * 60;
    }

    updateDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  running = false;
}

function resetTimer() {
  clearInterval(timer);
  running = false;
  time = 25 * 60;
  updateDisplay();
}

updateDisplay();