const Pook = require('../pook');
let game;

beforeEach( () => {
    game = new Pook();
});

it ('should return score 0 for a game of all zeros', () => {
    rollBall(0, 20);
    expect(game.score).toEqual(0);
});

it ('should return score 20 for a game of all ones', () => {
    rollBall(1, 20);
    expect(game.score).toEqual(20);
});

it ('should return score with bonus for a game with spare', () => {
    game.roll(4);
    game.roll(6);
    game.roll(9);
    rollBall(0, 17);
    expect(game.score).toEqual(28);
});

it ('should return score with bonus for a game with strike', () => {
    game.roll(10);
    game.roll(1);
    game.roll(2);
    rollBall(0, 16);
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
    rollBall(10, 12);
    expect(game.score).toEqual(300);
});

function rollBall(pins,times){
    for (let i=0;i<times;i++) {
        game.roll(pins);
    }
}