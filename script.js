let displayMove = document.querySelector(".displayMove");
let userPoint = document.querySelector(".user p");
let computerPoint = document.querySelector(".computer p");
let userScore = 0;
let computerScore = 0;
let play = true;
let winDisplay = document.querySelector(".winner");
let resetButton = document.querySelector(".winner button");
// window.alert(
//   "To win you have to score 10 and after winning reload the page to play again"
// );
document.querySelectorAll(".element").forEach(function (item) {
  item.addEventListener("click", function () {
    if (play) {
      let userChoice = this.id;
      let computerChoice = computerPicked();
      let result = decision(userChoice, computerChoice);
      displayMove.textContent = `Computer chose ${computerChoice}`;
      if (result == "draw") {
        // Handle draw if needed
      } else if (result == "win") {
        userPoint.textContent = ++userScore;
      } else {
        computerPoint.textContent = ++computerScore;
      }
      if (userScore == 5 || computerScore == 5) {
        play = false;
        winDisplay.style.opacity = "1";
        winDisplay.style.pointerEvents = "all";
        resetButton.addEventListener("click", () => {
          winDisplay.style.opacity = "0";
          winDisplay.style.pointerEvents = "none";
          play = true;
          userScore = 0;
          userPoint.textContent = "0";
          computerScore = 0;
          computerPoint.textContent = "0";
        });
      }
    }
  });
});

function computerPicked() {
  let gameArray = ["rock", "paper", "scissor"];
  let math = Math.floor(Math.random() * 3);
  return gameArray[math];
}

function decision(userChoice, computerChoice) {
  if (userChoice == computerChoice) {
    return "draw";
  } else if (
    (userChoice == "rock" && computerChoice == "scissor") ||
    (userChoice == "paper" && computerChoice == "rock") ||
    (userChoice == "scissor" && computerChoice == "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
}
