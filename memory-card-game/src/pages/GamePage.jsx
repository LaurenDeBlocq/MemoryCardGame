import playerOneImage from "../resources/images/player1.png";
import playerTwoImage from "../resources/images/player2.png";

import {
  selectName as selectPlayerTwoName,
  selectScore as selectPlayerTwoScore,
} from "../slices/playerTwoSlice";
import {
  selectName as selectPlayerOneName,
  selectScore as selectPlayerOneScore,
} from "../slices/playerOneSlice";
import { useSelector } from "react-redux";

const GamePage = () => {
  const playerOneName = useSelector(selectPlayerOneName);
  const playerTwoName = useSelector(selectPlayerTwoName);

  const playerOneScore = useSelector(selectPlayerOneScore);
  const playerTwoScore = useSelector(selectPlayerTwoScore);
  return (
    <>
      <div className="game">
        <div className="game--player-block">
          <img
            className="game--player-img"
            src={playerOneImage}
            alt="Image for player One"
          />
          <h2 className="game--player-name">{playerOneName}</h2>
          <h3 className="game--player-score">{playerOneScore}</h3>
        </div>
        <div className="game--game-block">
          <p>Actual Game block!</p>
        </div>
        <div className="game--player-block">
          <img
            className="game--player-img"
            src={playerTwoImage}
            alt="Image for player Two"
          />
          <h2 className="game--player-name">{playerTwoName}</h2>
          <h3 className="game--player-score">{playerTwoScore}</h3>
        </div>
      </div>
    </>
  );
};

export default GamePage;
