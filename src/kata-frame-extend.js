const KataFrame = require('./kata-frame')

class KataFrameExtend extends KataFrame {

    constructor(frameIndex) {
        super(frameIndex)
        this.third = null;
    }

    add(pins) {
        if(this.counter === 0) {
            this.first = pins;
        } else if(this.counter === 1) {
            this.second = pins;
        } else if(this.counter === 2) {
            this.third = pins;
        }
        this.counter += 1;
    }

    get isComplete() {
        if((this.isSpare || this.isStrike) && this.third === null) {
            return false;
        } else {
            return true;
        }
    }

    computeScore() {
        return this.first + this.second + this.third;
    }

}

module.exports = KataFrameExtend;