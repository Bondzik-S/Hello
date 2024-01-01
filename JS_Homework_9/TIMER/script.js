const display = document.querySelector(".stopwatch-display");
const startButton = document.querySelector(
  ".stopwatch-control button:nth-child(1)"
);
const stopButton = document.querySelector(
  ".stopwatch-control button:nth-child(2)"
);
const resetButton = document.querySelector(
  ".stopwatch-control button:nth-child(3)"
);
const containerStopwatch = document.querySelector(".container-stopwatch");

let timerInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;

startButton.onclick = () => {
  clearInterval(timerInterval);
  timerInterval = setInterval(updateStopwatch, 1000);
  updateButtonStyles("green");
};

stopButton.onclick = () => {
  clearInterval(timerInterval);
  updateButtonStyles("red");
};

resetButton.onclick = () => {
  clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
  updateButtonStyles("silver");
};

// Допоміжна функція для форматування чисел (додавання "0" перед однозначними значеннями)
const formatTime = (time) => {
  return time < 10 ? "0" + time : time;
};

const updateStopwatch = () => {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  updateDisplay();
};

// Оновлення таймеру (поставити 0)
const updateDisplay = () => {
  display.innerHTML = `<span>${formatTime(hours)}</span>:<span>${formatTime(
    minutes
  )}</span>:<span>${formatTime(seconds)}</span>`;
};

const updateButtonStyles = (color) => {
  containerStopwatch.className = `container-stopwatch ${color}`;
};
