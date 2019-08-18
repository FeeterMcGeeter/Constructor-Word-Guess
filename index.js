var inquirer = require("inquirer");
var Word = require("./Word");

var guessesRemaining = 10;
var gameWords = ["Celtics", "Wizards", "Mavericks", "Timberwolves", "Magic", "Thunder", "Blazers", "Warriors", "Suns", "Bulls"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function chooseGameWord() {
    randomWord = gameWords[Math.floor(Math.random() * gameWords.length)];
    chosenWord = new Word(randomWord);
}

function guessWord() {
    if (guessesRemaining > 0) {
        console.log(chosenWord.display());

        inquirer.prompt([
            {
                name: 'text',
                message: 'Guess a letter!',
                validate: function (value) {
                    if (alphabet.includes(value)) {
                        return true;
                    } else {
                        console.log("\nPlease enter a letter of the alphabet.");
                    }
                }
            }
        ]).then(function (letterGuessed) {
            var guess = letterGuessed.text;
            chosenWord.checkGuess(guess);
            if (randomWord.toLowerCase().indexOf(guess.toLowerCase()) === - 1) {
                guessesRemaining--;
                console.log("Incorrect guess. You have " + guessesRemaining + "remaining.");
            } else if (randomWord === chosenWord.display()) {
                console.log(chosenWord.display());
                guessesRemaining = 10;
                winGame();
            } else if (guessesRemaining === 0) {
                loseGame();
            }
            guessWord();
        })
    }
}

function winGame() {
    console.log("WINNER!!");

    inquirer.prompt([
        {
            type: "confirm",
            message: "Would you like to play again?",
            default: true
        }
    ]).then(function (response) {
        if (response.confirm) {
            guessesRemaining = 10;
            chooseGameWord();
            guessWord();
        } else {
            console.log("See you later!");
            process.exit();
        }
    })
}

function loseGame() {
    console.log("YOU LOSE!!");
    inquirer.prompt([
        {
            type: "confirm",
            message: "Would you like to play again?",
            default: true
        }
    ]).then(function (response) {
        if (response.confirm) {
            guessesRemaining = 10;
            chooseGameWord();
            guessWord();
        } else {
            console.log("See you later!");
            process.exit();
        }
    })
}

chooseGameWord();
guessWord();