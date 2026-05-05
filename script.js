let user = 0;
let computer = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const getComputerChoice = () => {
    const optionsChoice = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * 3);
    return optionsChoice[randIndex];
};

const draw = () => {
    console.log("It's a draw!");
    msg.innerText = "It's a draw!";
};

const showWinner = (userWins) => {
    if (userWins) {
        user++;
        console.log("You win!");
        msg.innerText = "You win!";
    } else {
        computer++;
        console.log("Computer wins!");
        msg.innerText = "Computer wins!";
    }
};

const playGame = (userChoice) => {
    console.log("User chose:", userChoice);

    const computerChoice = getComputerChoice();
    console.log("Computer chose:", computerChoice);

    if (userChoice === computerChoice) {
        draw();
    } else {
        let userWins;

        if (userChoice === "rock") {
            userWins = computerChoice !== "paper";
        } else if (userChoice === "paper") {
            userWins = computerChoice !== "scissors";
        } else {
            userWins = computerChoice !== "rock";
        }

        showWinner(userWins);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});