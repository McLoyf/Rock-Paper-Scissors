    let computerScores = 0;
    let humanScores = 0;
    let gameOver = false;


    const rockBtn = document.getElementById("rock");
    const paperBtn = document.getElementById("paper");
    const scissorsBtn = document.getElementById("scissors");

    const computerScoreEl = document.getElementById("score-com");
    const playerScoreEl = document.getElementById("score-player");
    const feedbackEl = document.getElementById("feedback");
    const playerChoiceEl = document.getElementById("player-choice");
    const computerChoiceEl = document.getElementById("computer-choice");
    const restartBtn = document.getElementById("restart");




    function playGame(humanChoice) {
        if (gameOver) return;

        const computerChoice = getComputerChoice();
        const result = playAround(humanChoice, computerChoice);

        const isGameOver = getState(computerScores, humanScores);

        playerChoiceEl.textContent = `Player: ${humanChoice}`;
        computerChoiceEl.textContent = `Computer: ${computerChoice}`;


        computerChoiceEl.classList.remove("computer-animate");
        void computerChoiceEl.offsetWidth;
        computerChoiceEl.classList.add("computer-animate");

        feedbackEl.textContent = result.message;


        computerScoreEl.textContent = computerScores;
        playerScoreEl.textContent = humanScores;

        if (isGameOver) return;

        rockBtn.classList.remove("lose", "win", "tie");
        paperBtn.classList.remove("lose", "win", "tie");
        scissorsBtn.classList.remove("lose", "win", "tie");

        const selectedDiv = document.getElementById(humanChoice);

        if (result.winner === "computer") {
            selectedDiv.classList.add("lose");
        } else if (result.winner === "human") {
            selectedDiv.classList.add("win");
        } else if (result.winner === "tie") {
            selectedDiv.classList.add("tie");
        }
        
        computerChoiceEl.classList.remove("computer-animate");
        void computerChoiceEl.offsetWidth;
        computerChoiceEl.classList.add("computer-animate");
    }


    rockBtn.addEventListener("click", () => playGame("rock"));
    paperBtn.addEventListener("click", () => playGame("paper"));
    scissorsBtn.addEventListener("click", () => playGame("scissors"));


    function playAround(humanChoice, computerChoice){
    
    if(humanChoice === computerChoice){
        return { message: "It's a tie!", winner: "tie" };
    } 
    else if(humanChoice === "rock" && computerChoice === "paper"){
        computerScores++;
        return { message: "Paper covers rock!", winner: "computer" };
    } 
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        humanScores++;
        return { message: "Rock bashes scissors!", winner: "human" };
    } 
    else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScores++;
        return { message: "Paper covers rock!", winner: "human" };
    } 
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        computerScores++;
        return { message: "Scissors shreds paper!", winner: "computer" };
    } 
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        computerScores++;
        return { message: "Rock bashes scissors!", winner: "computer" };
    } 
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        humanScores++;
        return { message: "Scissors shreds paper!", winner: "human" };
    } 
    else {
        return { message: "How the hell did you trigger this?", winner: "none" };
    }
}




    function getHumanChoice(){
        const humanChoice = prompt("Rock, Paper, Scissors!");

        if(humanChoice === null){
            alert("Invaid choice. Try again");
        } else if(humanChoice === ""){
            alert("Stop throwing the game!");
        } else if(humanChoice.toLowerCase() === "rock"){
            return "rock";
        } else if(humanChoice.toLowerCase() === "paper"){
            return "paper";
        } else if(humanChoice.toLowerCase() === "scissors"){
            return "scissors";
        } else{
            return humanChoice;
        }
    }

    function getComputerChoice(){
        const choices = ["rock", "paper", "scissors"];
        const randomNumber = getRandomInt(0,3);
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
            document.body.classList.add("game-over");
            return true;
        } 
        else if(humanScores === 5){
            feedbackEl.textContent += " Game over. You win!";
            gameOver = true;
            document.body.classList.add("game-over");
            return true;
        }
        return false;
    }


    restartBtn.addEventListener("click", () => {
    computerScores = 0;
    humanScores = 0;
    gameOver = false;

    computerScoreEl.textContent = "0";
    playerScoreEl.textContent = "0";

    feedbackEl.textContent = "";
    playerChoiceEl.textContent = "Player: —";
    computerChoiceEl.textContent = "Computer: —";

    rockBtn.classList.remove("lose", "win", "tie");
    paperBtn.classList.remove("lose", "win", "tie");
    scissorsBtn.classList.remove("lose", "win", "tie");
    document.body.classList.remove("game-over");
});
