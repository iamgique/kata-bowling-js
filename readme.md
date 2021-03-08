# Kata Bowling JS
We will doing with JavaScript.

# Prerequisite
`javascript`
`nodejs`
`jest`

# Initial program
`npm install`

# To test
`npm test`

# Bowling Rules
The game consists of 10 frames. In each frame the player has two rolls to knock down 10 pins. The score for the frame is the total number of pins knocked down, plus bonuses for strikes and spares.

A spare is when the player knocks down all 10 pins in two rolls. The bonus for that frame is the number of pins knocked down by the next roll.

A strike is when the player knocks down all 10 pins on his first roll. The frame is then completed with a single roll. The bonus for that frame is the value of the next two rolls.

In the tenth frame a player who rolls a spare or strike is allowed to roll the extra balls to complete the frame. However no more than three balls can be rolled in tenth frame.

# Requirements
1. Write a `class Game` that has two methods
2. `void roll(int)` is called each time the player rolls a ball. The argument is the number of pins knocked down.
3. `int score()` returns the total score for that game.

# Examples
```
-/- | -/- | -/- | -/- | -/- | -/- | -/- | -/- | -/- | -/-/- = 0
1/1 | 1/1 | 1/1 | 1/1 | 1/1 | 1/1 | 1/1 | 1/1 | 1/1 | 1/1/- = 20
4/6 | 9/- | -/- | -/- | -/- | -/- | -/- | -/- | -/- | -/-/- = 28
10  | 1/2 | -/- | -/- | -/- | -/- | -/- | -/- | -/- | -/-/- = 15
6/4 | 10  | 8/1 | 10  | 7/0 | 10  | 7/2 | 10  | 10  | 10/7/1 = 175
10  | 10  | 10  | 10  | 10  | 10  | 10  | 10  | 10  | 10/10/10  = 300
```

# References
[kata-log.rocks](https://kata-log.rocks/bowling-game-kata)