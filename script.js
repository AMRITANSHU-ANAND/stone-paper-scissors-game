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
const playGame =(userChoice)=>{
    console.log("User chose:", userChoice);
    // generate computer choice
    const computerChoice = getComputerChoice();
    console.log("Computer chose:", computerChoice);
    //draw condition
    if (userChoice === computerChoice){
        draw();
    };

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    });
});