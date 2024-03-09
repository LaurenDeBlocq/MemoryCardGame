import playerOneImage from "../resources/images/player1.png";
import playerTwoImage from "../resources/images/player2.png";

const GamePage = () => {
  return (
    <>
      <div className="game">
        <div className="game--player-block">
          <img src={playerOneImage} alt="Image for player One" />
          <p>Player 1 block!</p>
        </div>
        <div className="game--game-block">
          <p>Actual Game block!</p>
        </div>
        <div className="game--player-block">
          <img src={playerTwoImage} alt="Image for player Two" />
          <p>Player 2 block!</p>
        </div>
      </div>
    </>
  );
};

export default GamePage;
