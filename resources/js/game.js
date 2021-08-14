function randomInt(max) {
    return Math.floor(Math.random()*max);
}
function computerPlay() {
    choice = randomInt(3);

    switch (choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        default:
            return "Scissors";
    }
}
