var inquirer = require("inquirer");
var Word = require("./Word");

var guessesRemaining = 10;
var wordArray = ["Celtics", "Wizards", "Mavericks", "Timberwolves", "Magic", "Thunder", "Blazers", "Warriors", "Suns", "Bulls"];
var guessedLetters = [];

function chooseGameWord() {
    var wordSelection = wordArray[Math.floor(Math.random() * wordArray.length)];
    chosenWord = new Word(wordSelection);
    chosenWord.wordArray();
}

function askUser() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Choose a letter!',
            name: 'letter'
        }
    ]).then(function (answer) {
        if (guessedLetters.indexOf(answer.letter.toLowerCase()) === - 1) {
            guessedLetters.push(answer.letter);
            chosenWord.checkGuess(answer.letter);
            var wordString = chosenWord.createWord();
            console.log(wordString);

            if (wordString.indexOf('_') === - 1) {
                console.log("You guessed it correctly!  Guess a new letter to start again.");
                guessesRemaining = 10;
                guessedLetters = [];
                chooseGameWord();
                askUser();
            } else {
                guessesRemaining--;
                console.log(guessesRemaining + " guesses remaining.");
                if (guessesRemaining > 0) {
                    askUser();
                } else {
                    console.log("You Lose!!!");
                }
            }
        } else {
            askUser();
        }
    })
}

chooseGameWord();
askUser();