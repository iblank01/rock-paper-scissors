
//function to compute winner/loser of rock paper scissors
//runs through if/else-if to see if computerSelection or playerSelection wins
function getWinner(playerSelection, computerSelection) {

    if((playerSelection === "rock") && (computerSelection === "scissors")) { // P-WIN: rock v scissors
        return("Player wins! Rock beats" + " " + computerSelection + "!");
    } else if((playerSelection === "rock") && (computerSelection === "paper")) { // P-LOSE: rock v paper
        return("Player loses! Paper beats " + playerSelection + "!");
    } else if((playerSelection === "scissors") && (computerSelection === "rock")) { // P-LOSE: scissors v rock
        return("Player loses! Rock beats" + " " + playerSelection + "!");
    } else if((playerSelection === "scissors") && (computerSelection === "paper")) { // P-WIN: scissors v paper
        return("Player wins! Scissors beats" + " " + computerSelection + "!");
    } else if((playerSelection === "paper") && (computerSelection === "rock")) { // P-WIN: paper v rock
        return("Player wins! Paper beats" + " " + computerSelection + "!");
    } else if((playerSelection === "paper") && (computerSelection === "scissors")) { //P-LOSE: paper v scissors
        return("Player loses! Scissors beats" + " " + playerSelection + "!");
    } else if (playerSelection === computerSelection) { //P-DRAW: paper v paper; scissors v scissors; rock v rock
        return("Draw! Try again!" + " " + playerSelection + " " + "vs" + " " + computerSelection + "!");
    } else {
        return("Invalid Input - Try again!");
    }

}

//this function computes computerSelection
function computerRandom() {

    //to store the computer's selection
    // let computerSelect;

    //now randomize the numbers 1-3
        let randomNum = Math.floor(Math.random() * 2);

        if(randomNum === 0) {
            return("rock");
        } else if(randomNum === 1) {
            return("paper");
        } else if(randomNum === 2) {
            return("scissors");
        } else {
            return("Invalid Input");
        }
}

//assign random to let computerSelect to prevent two different random selections appearing
let gameResult = computerRandom();

// //testing
for(let i=0; i<1; i++) {
    let playerSelects = prompt("Enter your choice: ");
    console.log("Computer selects: " + gameResult);
    console.log(getWinner(playerSelects, gameResult));
}