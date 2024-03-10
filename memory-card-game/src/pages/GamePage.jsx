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
import { loadCards } from "../slices/cardSlice";

import { useDispatch, useSelector } from "react-redux";
import GameBoard from "../components/GameBoard";

const GamePage = () => {
  const playerOneName = useSelector(selectPlayerOneName);
  const playerOneScore = useSelector(selectPlayerOneScore);

  const playerTwoName = useSelector(selectPlayerTwoName);
  const playerTwoScore = useSelector(selectPlayerTwoScore);
  const dispatch = useDispatch();

  const createCardData = () => {
    const cardData = [];

    for (let i = 0; i < 5; i++) {
      const cardSuit =
        i === 0
          ? "clubs"
          : i === 1
          ? "diamonds"
          : i === 2
          ? "hearts"
          : i === 3
          ? "spades"
          : "joker";

      if (cardSuit !== "joker") {
        for (let n = 0; n < 13; n++) {
          let cardNumber;
          const faceCards = ["A", "J", "Q", "K"];
          if (n < 9) {
            cardNumber = n + 2;
          } else {
            cardNumber = faceCards[n - 9];
          }

          cardData.push({
            suit: cardSuit,
            number: cardNumber,
            isTurnedOver: false,
            img: `/assets/cardImages/${cardSuit}/${cardNumber}.png`,
          });
        }
      } else {
        cardData.push(
          {
            suit: cardSuit,
            number: "Joker_1",
            isTurnedOver: false,

            img: "/assets/cardImages/jokers/Joker_1.png",
          },
          {
            suit: cardSuit,
            number: "Joker_2",
            isTurnedOver: false,
            img: "/assets/cardImages/jokers/Joker_2.png",
          }
        );
      }
    }

    return cardData;
  };

  const cardList = createCardData();

  for (let i = cardList.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = cardList[i];
    cardList[i] = cardList[j];
    cardList[j] = k;
  }
  dispatch(loadCards(cardList));

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
          <div
            className="game--player-one-active"
            // style={{ display: playerOneActive ? "block" : "none" }}
          >
            It&apos;s your turn!
          </div>
        </div>
        <div className="game--game-block">
          <GameBoard className="game--game-board" />
        </div>
        <div className="game--player-block">
          <img
            className="game--player-img"
            src={playerTwoImage}
            alt="Image for player Two"
          />
          <h2 className="game--player-name">{playerTwoName}</h2>
          <h3 className="game--player-score">{playerTwoScore}</h3>
          <div
            className="game--player-two-active"
            // style={{ display: playerTwoActive ? "block" : "none" }}
          >
            It&apos;s your turn!
          </div>
        </div>
      </div>
    </>
  );
};

export default GamePage;
