import playerOne from "../resources/images/player1.png";
import playerTwo from "../resources/images/player2.png";

const StartPage = () => {
  return (
    <>
      <h1 className="start-page--text">Are you ready to play?</h1>
      <div className="start-page--player-container">
        <div className="start-page--player-one start-page--player-block">
          <img
            className="start-page--player-image"
            src={playerOne}
            alt="player 1 image"
          />
          <input
            className="start-page--input"
            id="player-one-name"
            type="text"
            placeholder="name of player 1"
          />
        </div>
        <div className="start-page--player-two start-page--player-block">
          <img
            className="start-page--player-image"
            src={playerTwo}
            alt="player 2 image"
          />
          <input
            className="start-page--input"
            id="player-two-name"
            type="text"
            placeholder="name of player 2"
          />
        </div>
      </div>
      <button className="start-page--start-button">Let's play!</button>
    </>
  );
};

export default StartPage;
