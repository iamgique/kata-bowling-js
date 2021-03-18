class Pook {
    constructor() {
        this.rolls = [];
    }
    roll(pins){
        this.rolls.push(pins);
    }
    get score(){
        let score = 0;
        let rollIndex = 0;
        for (let frame = 0; frame < 10; frame++) {
            if (this.isStrike(rollIndex)) {
                score += this.scoreWithStrikeBonus(rollIndex);
                rollIndex += 1;
                continue;
            }

            const frameScore = this.rolls[rollIndex] + this.rolls[rollIndex+1];
            
            if (this.isSpare(frameScore)) {
                score += this.scoreWithSpareBonus(rollIndex);
            } else {
                score += frameScore;
            }
            rollIndex += 2;
        }
        return score;
    }

    isSpare(frameScore) {
        return frameScore === 10;
    }

    scoreWithSpareBonus(rollIndex) {
        return 10 + this.rolls[rollIndex+2];
    }

    isStrike(rollIndex) {
        return this.rolls[rollIndex] === 10;
    }

    scoreWithStrikeBonus(rollIndex) {
        return 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
    }
}
module.exports = Pook;