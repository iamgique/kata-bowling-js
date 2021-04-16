class KataFrame {

    constructor() {
        this.first = 0;
        this.second = 0;
        this.counter = 0;
    }

    firstCell(pins) {
        this.first = pins;
    }

    secondCell(pins) {
        this.second = pins;
    }

    add(pins) {
        if(this.counter === 0) {
            this.first = pins;
        } else {
            this.second = pins;
        }
        this.counter += 1;
    }

    get isNormal() {
        return this.first + this.second < 10;
    }

    get isSpare() {
        return !this.isStrike && (this.first + this.second === 10);
    }

    get isStrike() {
        return this.first === 10;
    }
}

module.exports = KataFrame;