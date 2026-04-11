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
function getHumanChoice() {
  let choice = prompt("choose rock, paper or scissors");
  return choice;
}
function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") ||
      (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") ||
      (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper")
    ) {
      console.log("you win");
      humanScore++;
    } else {
      console.log(`you lose ${computerChoice} beat ${humanChoice}`);
      computerScore++;
    }
  }
  if (humanScore + computerScore <= 5) {
    playRound(getHumanChoice(), getComputerChoice());
  }
}
