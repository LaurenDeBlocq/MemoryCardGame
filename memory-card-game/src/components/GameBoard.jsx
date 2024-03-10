/* eslint-disable react/prop-types */
import Card from "./Card";
import {
  loadChosenCard,
  selectCards,
  selectChosenCards,
  toggleCard,
} from "../slices/cardSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  toggleActive as togglePlayerTwoActive,
  // selectActive as selectPlayerTwoActive,
  incrementScore as incrementPlayerTwoScore,
} from "../slices/playerTwoSlice";
import {
  toggleActive as togglePlayerOneActive,
  selectActive as selectPlayerOneActive,
  incrementScore as incrementPlayerOneScore,
} from "../slices/playerOneSlice";

const GameBoard = () => {
  const playingCards = useSelector(selectCards);
  const chosenCards = useSelector(selectChosenCards);

  const playerOneActive = useSelector(selectPlayerOneActive);

  console.log(chosenCards);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(chosenCards.length);
  }, [chosenCards]);

  const toggleTurnedOver = (cardId) => {
    dispatch(toggleCard(cardId));
  };

  const checkMatch = () => {
    const red = ["hearts", "diamonds"];
    const black = ["clubs", "spades"];
    const cardOne = chosenCards[0];
    const cardTwo = chosenCards[1];
    let matchResult;

    if (cardOne.suit === "joker" && cardTwo.suit === "joker") {
      matchResult = true;
    } else if (red.includes(cardOne.suit) && red.includes(cardTwo.suit)) {
      matchResult = cardOne.number === cardTwo.number ? true : false;
    } else if (black.includes(cardOne.suit) && black.includes(cardTwo.suit)) {
      matchResult = cardOne.number === cardTwo.number ? true : false;
    } else {
      matchResult = false;
    }

    dispatch(toggleCard(playingCards.indexOf(cardOne)));
    dispatch(toggleCard(playingCards.indexOf(cardTwo)));

    return matchResult;
  };

  const toggleActivePlayer = () => {
    dispatch(togglePlayerOneActive());
    dispatch(togglePlayerTwoActive());
  };

  const handleMatch = () => {
    // needs to remove cards from play and add points to relevant player
    playerOneActive
      ? dispatch(incrementPlayerOneScore())
      : dispatch(incrementPlayerTwoScore());
  };

  const handleClick = (event, cardData, cardId) => {
    event.preventDefault();

    toggleTurnedOver(cardId);
    dispatch(loadChosenCard(cardId));

    let cardsMatch;
    if (chosenCards.length === 2) {
      cardsMatch = checkMatch();
    }

    if (cardsMatch) {
      handleMatch();
    }
    toggleActivePlayer();
  };

  const cardsToLoad = playingCards.map((card) => {
    return (
      <Card
        key={playingCards.indexOf(card)}
        id={playingCards.indexOf(card)}
        handleClick={handleClick}
        data={card}
      />
    );
  });
  return <>{cardsToLoad}</>;
};

export default GameBoard;
