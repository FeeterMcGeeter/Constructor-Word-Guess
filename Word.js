var Letter = require("./Letter");

var Word = function(word) {
    this.constructWord = function(word) {
        var storeLetter = [];
        for (var i = 0; i < word.length; i++) {
            var currentLetter = new Letter(word[i]);
            storeLetter.push(currentLetter);
        }
        return storeLetter;
    }
    this.letters = this.constructWord(word);
    this.wordChosen = word;
    this.checkGuess = function(guess) {
        for (var j = 0; j < this.letters.length; j++) {
            this.letters[j].checkLetter(guess);
        }
    }
    this.display = function() {
        var storeLetter = "";
        for (var k = 0; k < this.letters.length; k++) {
            storeLetter += this.letters[k].display();
        }
        return storeLetter;
    }
}

module.exports = Word;