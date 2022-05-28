let hoursLeft = document.querySelector(".hours .hours-num-left");
let hoursRight = document.querySelector(".hours .hours-num-right");
let minutsLeft = document.querySelector(".minuts .minuts-num-left");
let minutsRight = document.querySelector(".minuts .minuts-num-right");
let secondsLeft = document.querySelector(".seconds .seconds-num-left");
let secondsRight = document.querySelector(".seconds .seconds-num-right");
const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const ResetBtn = document.querySelector(".reset-btn");

startBtn.addEventListener("click", startTimer);

function startTimer() {
  let interval = setInterval(() => {
    secondsRight.innerHTML = +secondsRight.innerHTML + 1;
    if (secondsRight.innerHTML === "10") {
      secondsRight.innerHTML = 0;
      secondsLeft.innerHTML = +`${+secondsLeft.innerHTML + 1}`;
    }
    if (secondsLeft.innerHTML === "6") {
      secondsLeft.innerHTML = 0;
      secondsRight.innerHTML = 0;
      minutsRight.innerHTML = +minutsRight.innerHTML + 1;
    }
    if (minutsRight.innerHTML === "10") {
      minutsRight.innerHTML = 0;
      minutsLeft.innerHTML = +`${+minutsLeft.innerHTML + 1}`;
    }
    if (minutsLeft.innerHTML === "6") {
      minutsLeft.innerHTML = 0;
      minutsRight.innerHTML = 0;
      hoursRight.innerHTML = +hoursRight.innerHTML + 1;
    }
    if (hoursRight.innerHTML === "10") {
      hoursRight.innerHTML = 0;
      hoursLeft.innerHTML = +`${+hoursLeft.innerHTML + 1}`;
    }
  }, 1);
  stopBtn.onclick = function () {
    clearInterval(interval);
  };
  ResetBtn.onclick = function () {
    clearInterval(interval);
    secondsLeft.innerHTML = "0";
    secondsRight.innerHTML = "0";
    minutsLeft.innerHTML = "0";
    minutsRight.innerHTML = "0";
    hoursLeft.innerHTML = "0";
    hoursRight.innerHTML = "0";
  };
}
