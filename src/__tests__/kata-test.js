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
    expect(game.frame).toEqual(2);
});

/*
it ('should return correct score when get spare', () => {
    game.roll(6);
    game.roll(4);
    game.roll(3);
    game.roll(2);
    expect(game.score).toEqual(18);
});
*/