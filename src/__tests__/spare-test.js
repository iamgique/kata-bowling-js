const Spare = require('../spare');

let game;

beforeEach(() => {
    game = new Spare();
});

it ('should return 0 for a game of all zeros', () => {
    rollBall(0, 20);
    expect(game.score).toEqual(0);
});

it ('should return 20 for a game of all ones', () => {
    rollBall(1, 20);
    expect(game.score).toEqual(20);
});

it ('should return the correct score when a spare is rolled', () => {
    game.roll(4);
    game.roll(6);
    game.roll(9);
    rollBall(0, 17);
    expect(game.score).toEqual(28);
});

function rollBall(pins, rolls) {
    for(let i = 0; i < rolls; i++) {
        game.roll(pins);
    }
}