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

const GameBoard = () => {
  const playingCards = useSelector(selectCards);
  const chosenCards = useSelector(selectChosenCards);
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

  const handleClick = (event, cardData, cardId) => {
    event.preventDefault();
    dispatch(loadChosenCard(cardId));
    toggleTurnedOver(cardId);
    let cardsMatch;
    if (chosenCards.length === 2) {
      cardsMatch = checkMatch();
    }
    console.log(cardsMatch);
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
