/* eslint-disable react/prop-types */
import Card from "./Card";
import {
  loadChosenCard,
  selectCards,
  selectChosenCards,
  toggleCard,
  removeCardsFromChosen,
} from "../slices/cardSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toggleActive as togglePlayerTwoActive } from "../slices/playerTwoSlice";
import { toggleActive as togglePlayerOneActive } from "../slices/playerOneSlice";

const GameBoard = ({ handleMatch }) => {
  const playingCards = useSelector(selectCards);
  const chosenCards = useSelector(selectChosenCards);

  const dispatch = useDispatch();

  useEffect(() => {
    let cardsMatch;
    if (chosenCards.length === 2) {
      setTimeout(() => {
        cardsMatch = checkMatch();
        if (cardsMatch) {
          handleMatch();
        }
        dispatch(removeCardsFromChosen());
      }, [2000]);
    }
  }, [chosenCards, dispatch, handleMatch]);

  const toggleTurnedOver = (cardId) => {
    dispatch(toggleCard(cardId));
  };

  const toggleActivePlayer = () => {
    dispatch(togglePlayerOneActive());
    dispatch(togglePlayerTwoActive());
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
    toggleActivePlayer();

    return matchResult;
  };

  const handleClick = (event, cardId) => {
    event.preventDefault();

    toggleTurnedOver(cardId);
    dispatch(loadChosenCard(cardId));
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
