class KataFrame {

    constructor(frameIndex) {
        this.first = null;
        this.second = null;
        this.counter = 0;
        this.nextFrame = null;
        this.frameIndex = frameIndex || 1;
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

    computeScore() {
        if(this.isNormal) {
            return this.first + this.second;
        } else if (this.isSpare) {
            return 10 + this.nextFrame.first;
        } else if (this.isStrike) {
            if(this.nextFrame.isStrike) {
                return 20 + this.nextFrame.nextFrame.first;
            } else {
                return (this.nextFrame.first + this.nextFrame.second) + 10;
            }
        }
    }

    createNextFrame() {
        return this.nextFrame = this.frameIndex === 9 ?
            new KataFrameExtend(this.frameIndex + 1) :
            new KataFrame(this.frameIndex + 1);
    }

    get isComplete() {
        return this.isStrike || 
            (this.first !== null && this.second !== null);
    }
}

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
        } else if (this.first !== null && this.second !== null) {
            return true;
        } else {
            return false;
        }
    }

    computeScore() {
        return this.first + this.second + this.third;
    }

}

module.exports = {KataFrame, KataFrameExtend};