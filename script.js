"use script";

let nowPlaying = true;
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(randomNumber);
const correct = document.querySelector(".guess__correct");

const startGuessing = document.querySelector(".guess__start");
const check = document.querySelector(".btn-check");

function displayMessage(message) {
  startGuessing.textContent = message;
}

check.addEventListener("click", function () {
  if (nowPlaying) {
    const guess = Number(document.querySelector(".guess__number").value);
    console.log(typeof guess, guess);
    //not a number
    if (!guess) {
      displayMessage("⛔ Not a Number!");
      document.querySelector(".guess__number");
    }

    //correct number
    else if (guess === randomNumber) {
      displayMessage("🎉 Correct Number!");
      correct.textContent = guess;
      correct.style.width = "30%";
      document.querySelector(".container").style.backgroundColor = "green";

      //highscore
      if (score > highScore) {
        highScore = score;
        document.querySelector(".guess__highscore").textContent = highScore;
      }

      nowPlaying = false;

      //not correct
    } else if (guess !== randomNumber) {
      if (score > 1) {
        displayMessage(
          guess > randomNumber ? "📈 Number too high" : "📉 Number too low"
        );
        score--;
        document.querySelector(".guess__score").textContent = score;
      } else {
        displayMessage("💥 You Lost!");
        document.querySelector(".guess__score").textContent = 0;
      }
    }
  }
});

document.querySelector(".btn-replay").addEventListener("click", replay);
document.querySelector(".btn-new").addEventListener("click", init);

function replay() {
  nowPlaying = true;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".guess__score").textContent = 20;
  displayMessage("🔃 Start guessing...");
  correct.textContent = "?";
  document.querySelector(".container").style.backgroundColor = "orangered";
  document.querySelector(".guess__number").value = "";
}

function init() {
  nowPlaying = true;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  highScore = 0;
  document.querySelector(".guess__highscore").textContent = highScore;
  document.querySelector(".guess__score").textContent = 20;
  displayMessage("🔃 Start guessing...");
  correct.textContent = "?";
  document.querySelector(".container").style.backgroundColor = "orangered";
  document.querySelector(".guess__number").value = "";
}
