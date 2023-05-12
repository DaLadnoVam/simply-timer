// Choose time
const btnsTime = document.querySelectorAll(".btn-quantity");
const quantityTime = document.querySelectorAll(".quantity__time");

const minDozens = document.querySelector(".timer__minute-dozens");
const minUnits = document.querySelector(".timer__minute-units");
const secDozens = document.querySelector(".timer__second-dozens");
const secUnits = document.querySelector(".timer__second-units");

const btnStart = document.querySelector(".btn-start");
const btnStop = document.querySelector(".btn-stop");

let timer = 10;
let timerActive;

const go = function () {
  timer--;
  console.log(timer);
  if (timer < 1) {
    clearInterval(start);
  }
  minDozens.textContent = Math.trunc(timer / 60 / 10);
  minUnits.textContent = Math.trunc(timer / 60);
  secDozens.textContent = Math.trunc((timer % 60) / 10);
  secUnits.textContent = Math.round(
    ((timer % 60) / 10 - Math.trunc((timer % 60) / 10)) * 10
  );
};

let start;

const startTimer = function () {
  if (!timerActive) {
    start = setInterval(go, 1000);
    timerActive = true;
  }
};

btnStart.addEventListener("click", startTimer);

btnStop.addEventListener("click", function () {
  if (timerActive) {
    clearInterval(start);
    minDozens.textContent = 0;
    minUnits.textContent = 5;
    secDozens.textContent = 0;
    secUnits.textContent = 0;
    timerActive = false;
  }
});

const abs = function (btn) {
  minUnits.textContent = Number(btn.children[0].textContent);
};

btnsTime.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (!timerActive) {
      btnsTime.forEach((btn) => {
        btn.classList.remove("active");
      });

      e.currentTarget.classList.add("active");
      timer = e.currentTarget.dataset.value;
      abs(btn);
    }
  });
});

console.log(btnsTime);
