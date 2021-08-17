function randomInt(max) {
    return Math.floor(Math.random()*max);
}
function computerPlay() {
    choice = randomInt(3);

    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        resultDiv.textContent += "Tie \n"
    } else if (playerSelection === "rock"){
        if (computerSelection =="paper") {
            return lose(playerSelection, computerSelection)
        } else {
            return win(playerSelection, computerSelection);
        }
    } else if (playerSelection === "paper"){
        if (computerSelection === "scissors"){
            return lose(playerSelection, computerSelection)
        } else {
            return win(playerSelection, computerSelection);
        }
    } else if (playerSelection ==="scissors"){
        if (computerSelection === "rock") {
            return lose(playerSelection, computerSelection)
        } else {
            return win(playerSelection, computerSelection);
        }
    } else {
        return "Invalid Input";
    }
}

function lose(playerSelection, computerSelection) {
    computerScore++;
    computerScoreDiv.textContent = computerScore;
    playerScoreDiv.textContent = playerScore;
    resultDiv.textContent += "Lose \n"
}

function win(playerSelection, computerSelection) {
    playerScore++;
    computerScoreDiv.textContent = computerScore;
    playerScoreDiv.textContent = playerScore;
    resultDiv.textContent += "Win \t"
}

let playerScore = 0;
let computerScore= 0;

function playerClick(id) {
    playRound("paper", "rock");
    console.log("pressed")
}

const buttons = document.querySelectorAll("button");
const playerScoreDiv = document.querySelector("#player-score");
const computerScoreDiv = document.querySelector("#computer-score");
const resultDiv = document.querySelector("#result")
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        game(e.target.id)
    })
});


function game(playerSelection) {
    let playerScore = 0;
    let computerScore = 0;
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}

