let computerCount = 0;
let playerCount = 0;

function computerPlay(){
 let result = (Math.floor((Math.random()) * 3)+ 1);
 if (result == 1){
     return "Rock";
 } else if (result == 2){
     return "Paper";
 } else {
     return "Scissors";
 }
}

function playerPlay(){
   let playerResult = prompt("Choose your hand!: ");
   playerResult = playerResult.charAt(0).toUpperCase() + playerResult.slice(1, ).toLowerCase();
   return playerResult;
}

function playRound(playerSelection, computerSelection){
    
    computerSelection = computerPlay();
    playerSelection = playerPlay();
  
     if (playerSelection === computerSelection){
        return "Tie!";
    }
    else if (computerSelection == "Scissors" && playerSelection == "Paper" || computerSelection == "Paper" && playerSelection == "Rock" || computerSelection == "Rock" && playerSelection == "Scissors"){
        computerCount++;
        console.log(computerCount);
        return `Player loses the round! ${computerSelection} beats ${playerSelection.toLowerCase()}!`;    
    } else {
        playerCount++;
        console.log(playerCount);
        return `Player wins the round! ${playerSelection} beats ${computerSelection.toLowerCase()}!`   
    }
}

function game(){
    for (let i = 0; i <5; i++){
        console.log(playRound()); 
    }
    if (computerCount === playerCount){
        console.log("The game is a tie! Try again!")
    }
    else if (computerCount > playerCount){
        console.log("Computer wins this game, Too bad!")
    } else{
        console.log("Player wins the game! Nice job!");
    }
}

