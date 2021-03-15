const KataBowling = require('../kata-bowling');

let game;

beforeEach(() => {
    game = new KataBowling();
})

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

it ('should return the correct score when a strike is rolled', () => {
    game.roll(10);
    game.roll(1);
    game.roll(2);
    rollBall(0, 17);
    expect(game.score).toEqual(16);
});

it ('should return the correct score when spare in frame 10', () => {
    game.roll(6);
    game.roll(4);
    game.roll(10);
    game.roll(8);
    game.roll(1);
    game.roll(10);
    game.roll(7);
    game.roll(0);
    game.roll(10);
    game.roll(7);
    game.roll(2);
    game.roll(10);
    game.roll(10);
    game.roll(7);
    game.roll(3);
    game.roll(1);
    expect(game.score).toEqual(158);
});

it ('should return the correct score when strike in frame 10', () => {
    game.roll(6);
    game.roll(4);
    game.roll(10);
    game.roll(8);
    game.roll(1);
    game.roll(10);
    game.roll(7);
    game.roll(0);
    game.roll(10);
    game.roll(7);
    game.roll(2);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(7);
    game.roll(1);
    expect(game.score).toEqual(175);
});

it ('should return the correct score when a strike 12 times', () => {
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    expect(game.score).toEqual(300);
});

function rollBall(pins, rolls) {
    for (let i = 0; i < rolls; i++) {
        game.roll(pins);
    }
}