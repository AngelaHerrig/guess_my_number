"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displaySecretNumber = function (message) {
  document.querySelector(".number").textContent = message;
};
const displayScore = function (message) {
  document.querySelector(".score").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  //when no valid number chosen:
  if (!guess || guess > 20) {
    displayMessage("Not a valid number!");

    //when player win:
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    displaySecretNumber(secretNumber);
    document.querySelector(".number").style.fontSize = "9rem";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //When guess is wrong:
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      displayScore(score);
    } else {
      displayMessage("Game over!");
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".message").style.fontSize = "4rem";
      displayScore(0);
    }
  }
});

//Play again:
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".message").style.fontSize = "2rem";
  displayScore(score);
  displaySecretNumber("?");
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.fontSize = "6rem";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
