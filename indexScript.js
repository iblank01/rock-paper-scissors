//function to compute winner/loser of rock paper scissors
//runs through if/else-if to see if computerSelection or playerSelection wins
function getWinner(playerSelection, computerSelection) {
    //variables to store the winner
    let playerWin;
    let computerWin;

    for (let totalWin = 0; totalWin < 5; totalWin++) {
        if (playerSelection === "rock" && computerSelection === "scissors") {
            // P-WIN: rock v scissors
            return "Player wins! Rock beats" + " " + computerSelection + "!";
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            // P-LOSE: rock v paper
            return "Player loses! Paper beats " + playerSelection + "!";
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            // P-LOSE: scissors v rock
            return "Player loses! Rock beats" + " " + playerSelection + "!";
        } else if (
            playerSelection === "scissors" &&
            computerSelection === "paper"
        ) {
            // P-WIN: scissors v paper
            return "Player wins! Scissors beats" + " " + computerSelection + "!";
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            // P-WIN: paper v rock
            return "Player wins! Paper beats" + " " + computerSelection + "!";
        } else if (
            playerSelection === "paper" &&
            computerSelection === "scissors"
        ) {
            //P-LOSE: paper v scissors
            return "Player loses! Scissors beats" + " " + playerSelection + "!";
        } else if (playerSelection === computerSelection) {
            //P-DRAW: paper v paper; scissors v scissors; rock v rock
            return (
                "Draw! Try again!" +
                " " +
                playerSelection +
                " " +
                "vs" +
                " " +
                computerSelection +
                "!"
            );
        } else {
            return "Invalid Input - Try again!";
        }
    }
}

//this function computes computerSelection
function computerRandom() {
    //to store the computer's selection
    // let computerSelect;

    //now randomize the numbers 1-3
    let randomNum = Math.floor(Math.random() * 2);

    if (randomNum === 0) {
        return "rock";
    } else if (randomNum === 1) {
        return "paper";
    } else if (randomNum === 2) {
        return "scissors";
    } else {
        return "Invalid Input";
    }
}

let playerWin = 0;
let computerWin = 0;
let computerSelect = computerRandom();

for (let totalWin = 0; totalWin < 5; totalWin++) {
    let playerSelects = prompt("Enter your choice: ");
    playerSelects = playerSelects.toLowerCase(); //converts playerSelect to lowercase
    console.log("Computer selects: " + computerSelect);
    console.log(getWinner(playerSelects, computerSelect));

    if (
        getWinner(playerSelects, computerSelect) ===
        "Player wins! Rock beats scissors!" ||
        getWinner(playerSelects, computerSelect) ===
        "Player wins! Scissors beats paper!" ||
        getWinner(playerSelects, computerSelect) ===
        "Player wins! Paper beats rock!"
    ) {
        playerWin++;
        console.log("Player wins: " + playerWin);
    } else if (
        getWinner(playerSelects, computerSelect) ===
        "Player loses! Rock beats paper!" ||
        getWinner(playerSelects, computerSelect) ===
        "Player loses! Paper beats scissors!" ||
        getWinner(playerSelects, computerSelect) ===
        "Player loses! Scissors beats rock!"
    ) {
        computerWin++;
        console.log("Computer wins: " + computerWin);
    }
}
