const One = require('../one');

let game;

beforeEach(() => {
    game = new One();
});

it ('should return 0 for a game of all zeros', () => {
    rollBall(0, 20);
    expect(game.score).toEqual(0);
});

it ('should return 20 for a game of all ones', () => {
    rollBall(1, 20);
    expect(game.score).toEqual(20);
});

function rollBall(pins, rolls) {
    for(let i = 0; i < rolls; i++) {
        game.roll(pins);
    }
}