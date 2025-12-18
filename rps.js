    let computerScores = 0;
    let humanScores = 0;
    let gameOver = false;


    const rockBtn = document.getElementById("rock");
    const paperBtn = document.getElementById("paper");
    const scissorsBtn = document.getElementById("scissors");

    const computerScoreEl = document.getElementById("score-com");
    const playerScoreEl = document.getElementById("score-player");
    const feedbackEl = document.getElementById("feedback");



    function playGame(humanChoice) {
        if (gameOver) return;

        const computerChoice = getComputerChoice();
        const resultMessage = playAround(humanChoice, computerChoice);

        feedbackEl.textContent =
            `Computer chose ${computerChoice}. ${resultMessage}`;

        computerScoreEl.textContent = computerScores;
        playerScoreEl.textContent = humanScores;

        getState(computerScores, humanScores);
    }



    rockBtn.addEventListener("click", () => playGame("rock"));
    paperBtn.addEventListener("click", () => playGame("paper"));
    scissorsBtn.addEventListener("click", () => playGame("scissors"));


    function playAround(humanChoice, computerChoice){
        if(humanChoice === computerChoice){
            return "Tie!";
        } else if(humanChoice === "rock" && computerChoice === "paper"){
            computerScores++;
            return "Computer wins! Paper beats Rock.";
        } else if(humanChoice === "rock" && computerChoice === "scissors"){
            humanScores++;
            return "You win! Rock beats Scissors.";
        } else if(humanChoice === "paper" && computerChoice === "rock"){
            humanScores++;
            return "You win! Paper beats Rock.";
        } else if(humanChoice === "paper" && computerChoice === "scissors"){
            computerScores++;
            return "Computer wins! Scissors beats Paper.";
        } else if(humanChoice === "scissors" && computerChoice === "rock"){
            computerScores++;
            return "Computer wins! Rock beats Scissors.";
        } else if(humanChoice === "scissors" && computerChoice === "paper"){
            humanScores++;
            return "You win! Scissors beats Paper.";
        } else {
            return "Invalid move.";
        }
    }


    function getHumanChoice(){
        const humanChoice = prompt("Rock, Paper, Scissors!");

        if(humanChoice === null){
            alert("Invaid choice. Try again");
        } else if(humanChoice === ""){
            alert("Stop throwing the game!");
        } else if(humanChoice.toLowerCase() === "rock"){
            console.log(`humanChoice is ${humanChoice}`);
            return "rock";
        } else if(humanChoice.toLowerCase() === "paper"){
            console.log(`humanChoice is ${humanChoice}`);
            return "paper";
        } else if(humanChoice.toLowerCase() === "scissors"){
            console.log(`humanChoice is ${humanChoice}`);
            return "scissors";
        } else{
            return humanChoice;
        }
    }

    function getComputerChoice(){
        const choices = ["rock", "paper", "scissors"];
        const randomNumber = getRandomInt(0,3);
        console.log(`computerChoice is ${choices[randomNumber]}`)
        return computerChoice = choices[randomNumber];
    }

    function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    }

    function getState(computerScores, humanScores){
        if(computerScores === 5){
            feedbackEl.textContent += " Game over. You lose.";
            gameOver = true;
        } else if(humanScores === 5){
            feedbackEl.textContent += " Game over. You win!";
            gameOver = true;
        }
    }
