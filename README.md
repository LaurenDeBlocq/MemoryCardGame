# Hello Specno!

[Here](https://lauren-de-blocq-memory-game.web.app/game/) you'll find the hosted version of my version of the memory based matching game challenge!

## Set up required:

In order to run this repo, please run one of the following commands:

The command for if you don't have an SSH key configured:

```
git clone https://github.com/LaurenDeBlocq/MemoryCardGame.git
```

The command for if you do have an SSH key configured:

```
git@github.com:LaurenDeBlocq/MemoryCardGame.git
```

Once that is complete, please run the following commands one at a time:

```
npm install
npm run dev
```

Upon running `npm run dev`, a localhost url should be provided which you can then run in your browser and see the app!

## Rules of the game:

1. Each player takes turns to pick 2 cards to flip over from the layout in front of them
2. If the cards match, the player wins 2 points (one for each card) and the cards are removed from play.
3. If the cards do not match, they must be flipped back over and stay in the same position that they started in.
4. The game ends when all the cards have been matched.
5. The player with the most matches wins! 🏆
