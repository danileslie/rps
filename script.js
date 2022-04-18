let resetButton = document.querySelector('div.reset button');
let playerScore = document.querySelector('.playerScore');
let computerScore = document.querySelector('.computerScore');

let allButtons = document.querySelectorAll('div.buttons button');

allButtons.forEach(button => {
    button.addEventListener('click', testCycle)});

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
         console.log("Tie!");
    }
    else if (computerSelection == "Scissors" && playerSelection == "Paper" || computerSelection == "Paper" && playerSelection == "Rock" || computerSelection == "Rock" && playerSelection == "Scissors"){
        computerCount++;
        console.log(computerSelection);
        console.log(`Player loses the round! ${computerSelection} beats ${playerSelection.toLowerCase()}!`);    
        computerScore.textContent = computerCount;
    } else {
        playerCount++;
        console.log(playerSelection);
        console.log(`Player wins the round! ${playerSelection} beats ${computerSelection.toLowerCase()}!`);   
        playerScore.textContent = playerCount;
    }
    game();   
}

function game(){
     if (computerCount === 5 || playerCount === 5){
         if (computerCount > playerCount){
            console.log("Computer wins this game, Too bad!");
            disableButtons();
         } else {
        console.log("Player wins the game! Nice job!");
        disableButtons();
     }
    }
}

// ui section

function testCycle(e){
let playerSelection = e.target.textContent;
playerHand = e.target.textContent;
playRound(playerSelection, computerPlay())
}

function disableButtons(){
    allButtons.forEach(button => {
        button.removeEventListener('click', testCycle)});
}

function resetGame(){
    document.location.reload();  
}


// set up div with winning round/game messages

// what i learned: the importance of anonymous functions vs named functions. the disableButtons function is one that not 
// work on anonymous functions, so i had to find a way to loop through my buttons instead of having them 
// all separated like i did originally

// how to reset a game through a button on the page

// how to deal with buttons doing different things once a win condition is met 
