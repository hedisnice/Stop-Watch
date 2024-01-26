const timeEl = document.querySelector(".time");
const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timer = null;

// Event listeners
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

// Timer functions
function startTimer() {
  clearInterval(timer);
  timer = setInterval(displayTime, 10);
}

function pauseTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  hours = minutes = seconds = milliseconds = 0;
  updateDisplay();
}

function displayTime() {
  milliseconds += 10;
  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  updateDisplay();
}

// Helper function to update the display
function updateDisplay() {
  const h = formatTimeUnit(hours);
  const m = formatTimeUnit(minutes);
  const s = formatTimeUnit(seconds);
  const ms = formatTimeUnit(milliseconds);

  timeEl.innerHTML = `${h}:${m}:${s}:${ms}`;
}

// Helper function to format time units (add leading zero if needed)
function formatTimeUnit(unit) {
  return unit < 10 ? "0" + unit : unit;
}
