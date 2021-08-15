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
            return "You Lose! Paper beats Rock";
        } else {
            return "You Win! Rock beats Scissors";
        }
    } else if (playerSelection === "paper"){
        if (computerSelection === "scissors"){
            return "You Lose! Scissors beats Paper!";
        } else {
            return "You Win! Paper beats Rock!"
        }
    } else if (playerSelection ==="scissors"){
        if (computerSelection === "rock") {
            return "You Lose! Rock beats Scissors!";
        } else {
            return "You Win! Scissors beats Paper!";
        }
    } else {
        return "Invalid Input";
    }
}


let playerSelection = prompt("Rock, Paper, Scissors? (input below)");
computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
