let user = 0;
let computer = 0;

const choices = document.querySelectorAll(".choice");

const getComputerChoice = () => {
    const optionsChoice =["rock","paper","scissors"]
    const randIndex = Math.floor(Math.random()*3);
    return optionsChoice[randIndex];
};

const draw =()=>{
    console.log("It,s a draw!");
}
showWinner =(userWins)=>{
    if (userWins){
        console.log("You win!");
    }
    else{
        console.log("Computer wins!");
    }
};
const playGame =(userChoice)=>{
    console.log("User chose:", userChoice);
    // generate computer choice
    const computerChoice = getComputerChoice();
    console.log("Computer chose:", computerChoice);
    //draw condition
    if (userChoice === computerChoice){
        draw();
    }
    // win conditions
    else{
        let userWins = true;
        if (userChoice === "rock"){
            userWins = computerChoice === "paper"? false: true;
        }
        else if (userChoice ==="paper"){
            userWins =computerChoice === "scissors"? false: true;
        }
        else if (userChoice === "scissors"){
            userWins = computerChoice === "rock"? false: true;
        }
        showWinner(userWins);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    });
});