const Zero = require('../zero');

it ('should return 0 for a game of all zeros', () => {
    const game = new Zero();
    for(let i = 0; i < 20; i++) {
        game.roll(0);
    }
    expect(game.score).toEqual(0);
});