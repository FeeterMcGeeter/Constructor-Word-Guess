var Letter = function(letter) {
    this.letter = letter;
    this.guessed = false;
}

Letter.prototype.display = function() {
    if (this.guessed === true) {
        return this.letter;
    } else if (this.guessed === false){
        return "_";
    }
};

Letter.prototype.checkLetter = function(guess) {
    if (guess.toLowerCase() === this.letter.toLowerCase()) {
        this.guessed === true;
    }
}

module.exports = Letter;