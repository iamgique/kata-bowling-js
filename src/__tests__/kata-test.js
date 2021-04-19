const Kata = require('../kata');

let game;

beforeEach(() => {
    game = new Kata();
})

it ('should return 0 when 1 roll is zero', () => {
    game.roll(0);
    expect(game.score).toEqual(0);
})

it ('should return 9 when 2 rolls', () => {
    game.roll(5);
    game.roll(4);
    expect(game.score).toEqual(9);
});

it ('should return correct score when rolls twenty times', () => {
    for(let i = 0; i < 10; i++) {
        game.roll(1);
        game.roll(1);
    }
    expect(game.score).toEqual(20);
});

it ('should return correct frames', () => {
    game.roll(6);
    game.roll(3);
    game.roll(3);
    game.roll(3);
    expect(game.frame).toEqual(3);
});

it ('should return correct score when get spare', () => {
    game.roll(6);
    game.roll(4);
    game.roll(3);
    game.roll(2);
    expect(game.score).toEqual(18);
});

it ('should return correct score when get strike', () => {
    game.roll(10);
    game.roll(4);
    game.roll(5);
    expect(game.score).toEqual(28);
});

it ('should return correct score when get strike and spare', () => {
    game.roll(10);
    game.roll(5);
    game.roll(5);
    game.roll(3);
    game.roll(2);

    // F1 10 + 5 + 5 = 20
    // F2 20 + 5 + 5 + 3 = 33
    // F3 33 + 3 + 5 = 38

    expect(game.score).toEqual(38);
});

it ('should return correct score when get strike 2 times', () => {
    game.roll(10);
    game.roll(10);
    game.roll(5);
    game.roll(3);

    // F1 10 + 10 + 5 = 25
    // F2 25 + 10 + 5 + 3 = 43
    // F3 43 + 5 + 3 = 51

    expect(game.score).toEqual(51);
});

it ('should return correct score when get strike 3 times', () => {
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(3);
    game.roll(3);

    // F1 10 + 10 + 10 = 30
    // F2 30 + 10 + 10 + 3 = 53
    // F3 53 + 10 + 3 + 3 = 69
    // F4 69 + 3 + 3 = 75

    expect(game.score).toEqual(75);
});

it ('should return correct score when roll frame 10', () => {
    for (let i = 1; i <= 9; i++) {
        game.roll(10);
    }
    game.roll(9);
    game.roll(1);
    game.roll(3);
    expect(game.score).toEqual(272);
});