function Letter(character) {
    this.character = character;
    this.guessed = false;
    this.letterGuessed = function () {
        if (this.guessed) {
            return this.character;
        } else {
            return '_ ';
        }
    }
    this.makeGuess = function (guess) {
        if (guess === this.character.toLowerCase()) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;