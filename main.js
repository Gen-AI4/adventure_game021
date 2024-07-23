#! /usr/bin/env node
import inquirer from "inquirer";
function startGame() {
    console.log("\t \t \t Welcome to the Adventure Game!\n");
    inquirer
        .prompt({
        type: "input",
        name: "playerName",
        message: "What is your name?",
        validate: (input) => {
            return input !== "" ? true : "Please enter your name";
        },
    })
        .then((answers) => {
        const playerName = answers["playerName"];
        console.log(`\t \t \t Welcome ${playerName}! Let's start.\n`);
        explore();
    });
}
function explore() {
    inquirer
        .prompt({
        type: "list",
        name: "action",
        message: "What you want?",
        choices: [
            "Fight",
            "Open the Treasure",
            "Run",
            "Explore",
            "Talk to the wizard",
        ],
    })
        .then((answers) => {
        const action = answers["action"];
        switch (action) {
            case "Fight":
                console.log("You fought bravely.");
                break;
            case "Open the Treasure":
                console.log("You found a treasure full of gold! Congrats");
                break;
            case "Run":
                console.log("You ran away from danger! bettter luck for next time.");
                break;
            case "Explore":
                console.log("You enter the historical place and found a hidden city.");
                break;
            case "Talk to the wizard":
                console.log("The wizard grants you a magical item to ai you on your journey.");
                break;
            default:
                console.log("You stand still, unsure of what to do?");
                break;
        }
        inquirer
            .prompt({
            type: "confirm",
            name: "playAgain",
            message: "Do you want to play again?",
        })
            .then((answers) => {
            const playAgain = answers["playAgain"];
            if (playAgain) {
                console.log("\n \t \t \t starting a new adventure... \n");
                explore();
            }
            else {
                console.log("\t  \t Thanks for playing!");
            }
        });
    });
}
function exploreCave() {
    inquirer
        .prompt({
        type: "list",
        name: "action",
        message: "You find yourself in a branching tunnel, What do you do?",
        choices: [
            "follow the left path.",
            "follow the right path.",
            "return to the entrance.",
        ],
    })
        .then((answers) => {
        const action = answers["action"];
        switch (action) {
            case "follow the left path.":
                console.log("You encounter a group of bats, but find a valuable gamestone.");
                break;
            case "follow the right path.":
                console.log("You stumble upon a sleeping troll, quietly backtrack and find a scret exit.");
                break;
            case "return to the entrance.":
                console.log("You decide to return to the entrance of the cave.");
                break;
            default:
                console.log("You stand still, unsure of what to do?");
                break;
        }
    });
    console.log("\t \t \t Welcome to adventure game project!");
}
startGame();
