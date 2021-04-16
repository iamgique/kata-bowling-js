const KataFrame = require('./kata-frame')

class Kata {

    constructor() {
        this.counter = 0;
        this.frameCounter = 0;
        this.currentFrame = new KataFrame();
        this.frameList = [];
        this.frameList.push(this.currentFrame);
    }

    roll(pins) {

        this.currentFrame.add(pins);

        this.counter += 1;
        if(this.counter === 2) {

            this.currentFrame = new KataFrame();
            this.frameList.push(this.currentFrame);

            this.frameCounter += 1;
            this.counter = 0;
        }
    }

    get score() {
        return this.frameList.reduce((acc, frames) => {
            return acc += (frames.first + frames.second)
        }, 0);
    }

    get frame() {
        return this.frameCounter;
    }

}

module.exports = Kata;