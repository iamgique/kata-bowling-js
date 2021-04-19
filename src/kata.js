const { KataFrame } = require('./kata-frame')

class Kata {

    constructor() {
        this.currentFrame = new KataFrame();
        this.frameList = [];
        this.frameList.push(this.currentFrame);
    }

    roll(pins) {

        this.currentFrame.add(pins);
        if(this.currentFrame.isComplete) {
            this.currentFrame = this.currentFrame.createNextFrame();
            this.frameList.push(this.currentFrame);
        }
    }

    get score() {
        return this.frameList.reduce((acc, f, index) =>
            acc + f.computeScore(), 0);
    }

    get frame() {
        return this.currentFrame.frameIndex;
    }

}

module.exports = Kata;