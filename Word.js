var Letter = require("./Letter");

function Word (word) {
    this.letters = [];
    this.wordArray = function () {
        for (i = 0; i < word.length; i++) {
            this.letters.push(new Letter(word.charAt(i)));
        }
    }
    this.createWord = function () {
        var createdWord = '';
        for (var j in this.letters) {
            createdWord = createdWord.concat(this.letters[j].letterGuessed());
        }
        return createdWord;
    }
    this.checkGuess = function (letter) {
        for (var k in this.letters) {
            this.letters[k].makeGuess(letter);
        }
    }
}

module.exports = Word;