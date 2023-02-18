const countDisplay = document.getElementById("count");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;
let counterInterval = null;

startBtn.addEventListener("click", () => {
  if (counterInterval === null) {
    counterInterval = setInterval(() => {
      count++;
      countDisplay.textContent = count;
    }, 1000);
  }
});

resetBtn.addEventListener("click", () => {
  clearInterval(counterInterval);
  count = 0;
  countDisplay.textContent = count;
  counterInterval = null;
});