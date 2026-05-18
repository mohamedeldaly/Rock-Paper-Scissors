const buttons = document.querySelectorAll("button");
function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
const roundWinner = document.querySelector("#current");
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    roundWinner.textContent = "you win";
    humanScore++;
  } else if (humanChoice === computerChoice) {
    roundWinner.textContent = "draw";
  } else {
    roundWinner.textContent = `you lose ${computerChoice} beat ${humanChoice}`;
    computerScore++;
  }
}
const humanChoice = document.querySelector("#human");
const computerChoice = document.querySelector("#computer");
const winner = document.querySelector("#winner");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playRound(e.target.textContent, getComputerChoice());
    humanChoice.textContent = `human score: ${humanScore}`;
    computerChoice.textContent = `computer score: ${computerScore}`;
    if (humanScore === 5) {
      winner.textContent = "human won";
    } else if (computerScore === 5) {
      winner.textContent = "computer won";
    }
    if (winner.textContent !== "") {
      buttons.forEach((button) => {
        button.disabled = true;
      });
    }
  });
});
