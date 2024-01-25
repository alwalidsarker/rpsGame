let playGame = true;
let userScore = 0;
let computerScore = 0;
let computerChoose = "";
let rockpaperscissor = document.querySelectorAll(".container div");
let scoreComputer = document.querySelector(".score .computer p:nth-child(2)");
let scoreUser = document.querySelector(".score .user p:nth-child(2)");
let displayMove = document.querySelector(".displayMove");
let displayWinner = document.querySelector(".displayWinner");
let computerScoreDislay = document.querySelector(
  ".score .computer p:nth-child(2)"
);
let userScoreDislay = document.querySelector(".score .user p:nth-child(2)");
//upper ones are variables
function computerMove() {
  let mathFunction = Math.floor(Math.random() * 3);
  if (mathFunction == 0) {
    computerChoose = "rock";
  } else if (mathFunction == 1) {
    computerChoose = "paper";
  } else {
    computerChoose = "scissor";
  }
}
function playGameTrue(){
  rockpaperscissor.forEach(function (element) {
    element.addEventListener("click", function () {
      computerMove();
      if (computerChoose == "rock" && this.classList[0] == "paper") {
        userScoreDislay.textContent = ++userScore;
        displayMove.textContent = "Computer Choosed Rock";
      } else if (computerChoose == "rock" && this.classList[0] == "rock") {
        displayMove.textContent = "Computer Choosed Rock";
      } else if (computerChoose == "rock" && this.classList[0] == "scissor") {
        computerScoreDislay.textContent = ++computerScore;
        displayMove.textContent = "Computer Choosed Rock";
      } else if (computerChoose == "paper" && this.classList[0] == "paper") {
        displayMove.textContent = "Computer Choosed Paper";
      } else if (computerChoose == "paper" && this.classList[0] == "rock") {
        computerScoreDislay.textContent = ++computerScore;
        displayMove.textContent = "Computer Choosed Paper";
      } else if (computerChoose == "paper" && this.classList[0] == "scissor") {
        userScoreDislay.textContent = ++userScore;
        displayMove.textContent = "Computer Choosed Paper";
      } else if (computerChoose == "scissor" && this.classList[0] == "paper") {
        computerScoreDislay.textContent = ++computerScore;
        displayMove.textContent = "Computer Choosed Scissor";
      } else if (computerChoose == "scissor" && this.classList[0] == "rock") {
        userScoreDislay.textContent = ++userScore;
        displayMove.textContent = "Computer Choosed Scissor";
      } else {
        displayMove.textContent = "Computer Choosed Scissor";
      };
    });
  });
}
if(playGame == true){
  playGameTrue();
};