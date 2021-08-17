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
        historyDiv.textContent += "Tie \n"
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
    historyDiv.textContent += "Lose \n"
    checkScore();
}

function win(playerSelection, computerSelection) {
    playerScore++;
    computerScoreDiv.textContent = computerScore;
    playerScoreDiv.textContent = playerScore;
    historyDiv.textContent += "Win \n"
    checkScore();
}

function checkScore () {
    if (playerScore >=5) {
        resultDiv.textContent = "Player wins";
        resetGame();
    } else if (computerScore >= 5) {
        resultDiv.textContent = "Computer wins";
        resetGame();
    }
}
let playerScore = 0;
let computerScore= 0;

function playerClick(id) {
    playRound("paper", "rock");
    console.log("pressed")
}

const buttons = document.querySelectorAll(".rps");
const playerScoreDiv = document.querySelector("#player-score");
const computerScoreDiv = document.querySelector("#computer-score");
const historyDiv = document.querySelector("#history")
const resultDiv = document.querySelector("#result")
const startButton = document.querySelector("#start")

stopGame = false;
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        game(e.target.id)
    })
});

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    stopGame = false;
    historyDiv.textContent = "";
    resultDiv.textContent = "";
}



function game(playerSelection) {
    let playerScore = 0;
    let computerScore = 0;
    computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}


