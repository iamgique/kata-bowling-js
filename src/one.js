class One {

    constructor() {
        this.runningScore = 0;
    }

    roll(pins) {
        this.runningScore += pins;
    }

    get score() {
        return this.runningScore;
    }
}

module.exports = One;