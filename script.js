let resetButton = document.querySelector('div.reset button');
let playerScore = document.querySelector('.playerScoreNumber');
let computerScore = document.querySelector('.computerScoreNumber');
let instructions = document.querySelector('.instructions');

let allButtons = document.querySelectorAll('div.buttons button');

allButtons.forEach(button => {
    button.addEventListener('click', playerSelect)});

resetButton.addEventListener('click', resetGame);

//game section
let computerCount = 0;
let playerCount = 0;
let playerHand;

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

function playRound(playerSelection, computerSelection){
    
    computerSelection = computerPlay();
    
     if (playerSelection === computerSelection){
         instructions.textContent = `Tie!`;
    }
    else if (computerSelection == "Scissors" && playerSelection == "Paper" || computerSelection == "Paper" && playerSelection == "Rock" || computerSelection == "Rock" && playerSelection == "Scissors"){
        computerCount++;
        instructions.textContent = `Player loses the round! ${computerSelection} beats ${playerSelection.toLowerCase()}!`;    
        computerScore.textContent = `${computerCount}`;
    } else {
        playerCount++;
        instructions.textContent = `Player wins the round! ${playerSelection} beats ${computerSelection.toLowerCase()}!`;   
        playerScore.textContent = `${playerCount}`;
    }
    game();   
}

function game(){
     if (computerCount === 5 || playerCount === 5){
         if (computerCount > playerCount){
            instructions.textContent = `Computer wins the game, too bad!`;
            disableButtons();
         } else {
        instructions.textContent = `Player wins the game! Nice job!`;
        disableButtons();
     }
    }
}

// ui section

function playerSelect(e){
let playerSelection = e.target.textContent;
playerHand = e.target.textContent;
playRound(playerSelection, computerPlay())
}

function disableButtons(){
    allButtons.forEach(button => {
        button.removeEventListener('click', playerSelect)});
}

function resetGame(){
    document.location.reload();  
}


