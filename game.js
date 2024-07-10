let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gameDraw = () => {
    console.log("game is draw");
    msg.innerText = "Game is draw.Play again.";
    msg.style.backgroundColor= "#071952";
}
const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random()*3);
     return options[randomIdx];
}
const showWinning = (userWin,userChoice,compChoice) => {
          if(userWin){
            userScore++;
            userScorePara.innerText = userScore;
            console.log("you win!");
            msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor= "green";
          }else {
            compScore++;
            compScorePara.innerText = compScore;
            console.log("you lose");
            msg.innerText = `You lose. ${compChoice} beats yours ${userChoice}`;
            msg.style.backgroundColor ="red";
          }
    
}

const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);
    
    if(userChoice === compChoice){
       gameDraw();
    }else {
        let userWin = true;
        if(userChoice === "rock") {
            //compChoice = scissors, paper;
            userWin = compChoice === "scissors" ?  true : false;
        }else if(userChoice === "paper"){
            //compChoice = rock,scissors;
            userWin = compChoice === "rock" ? true : false;
        }else { //userChoice= scissors
            //compChoice = rock, paper;
            userWin = compChoice === "rock" ? false : true; 
        }
        showWinning(userWin,userChoice,compChoice);
    }

}
choices.forEach((choice) => {
         choice.addEventListener("click" , () => {
       const userChoice = choice.getAttribute("Id");
       playGame(userChoice);
         });
});
