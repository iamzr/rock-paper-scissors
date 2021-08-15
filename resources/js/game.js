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
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection){
        return "Tie!"
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
    return `You lose, ${computerSelection} beats ${playerSelection}.
    Player score: ${playerScore}
    Computer score: ${computerScore} `;
}

function win(playerSelection, computerSelection) {
    playerScore++;
    return `You win, ${playerSelection} beats ${computerSelection}
    Player score: ${playerScore}
    Computer score: ${computerScore} `;
}

let playerScore = 0;
let computerScore= 0;
function game() {
    i=5;
    while (i>0){
        playerSelection = prompt("Rock, Paper, Scissors? (input below)");
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        i--;
    }
}