import { useSelector } from "react-redux";
import {
  selectName as selectPlayerOneName,
  selectScore as selectPlayerOneScore,
} from "../slices/playerOneSlice";
import {
  selectName as selectPlayerTwoName,
  selectScore as selectPlayerTwoScore,
} from "../slices/playerTwoSlice";

import winningPlayerImg from "../resources/images/winningPlayer.png";
import winningToken from "../resources/images/winningToken.png";
import playerOneImg from "../resources/images/player1.png";
import playerTwoImg from "../resources/images/player2.png";
import { Link } from "react-router-dom";

const Leaderboard = () => {
  const playerOneName = useSelector(selectPlayerOneName);
  const playerOneScore = useSelector(selectPlayerOneScore);
  const playerTwoName = useSelector(selectPlayerTwoName);
  const playerTwoScore = useSelector(selectPlayerTwoScore);

  const winningPlayer = {};
  const losingPlayer = {};

  if (playerOneScore > playerTwoScore) {
    winningPlayer.name = playerOneName;
    winningPlayer.score = playerOneScore;
    winningPlayer.img = playerOneImg;

    losingPlayer.name = playerTwoName;
    losingPlayer.score = playerTwoScore;
    losingPlayer.img = playerTwoImg;
  } else {
    winningPlayer.name = playerTwoName;
    winningPlayer.score = playerTwoScore;
    winningPlayer.img = playerTwoImg;

    losingPlayer.name = playerOneName;
    losingPlayer.score = playerOneScore;
    losingPlayer.img = playerOneImg;
  }
  return (
    <div className="leaderboard">
      <div className="leaderboard--text">
        <h2 className="poppins-bold">Well done!</h2>
        <h1 className="poppins-bold">{winningPlayer.name}</h1>
      </div>
      <img
        className="leaderboard--winning-player"
        src={winningPlayerImg}
        alt="Spaceman holding a trophy"
      />
      <div className="leaderboard--player-info">
        <div className="leaderboard--winner-container">
          <img
            className="leaderboard--winner-token"
            src={winningToken}
            alt="Token of a trophy"
          />
          <div className="leaderboard--info leaderboard--winner">
            <img
              className="leaderboard--info-img"
              src={winningPlayer.img}
              alt="Picture of the winning player's token"
            />
            <p className="poppins-bold">1st Place</p>
            <p className="poppins-medium">{winningPlayer.name}</p>
            <p className="poppins-medium">Score: {winningPlayer.score}</p>
          </div>
        </div>
        <div className="leaderboard--info leaderboard--loser">
          <img
            className="leaderboard--info-img"
            src={losingPlayer.img}
            alt="Picture of the losing player's token"
          />
          <p className="poppins-bold">1st Place</p>
          <p className="poppins-medium">{losingPlayer.name}</p>
          <p className="poppins-medium">Score: {losingPlayer.score}</p>
        </div>
      </div>
      <Link to={"/"} className="play-again poppins-bold">
        PLAY AGAIN
      </Link>
    </div>
  );
};

export default Leaderboard;
