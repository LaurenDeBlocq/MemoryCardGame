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
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(chosenCards.length);
  }, [chosenCards]);

  const toggleTurnedOver = (cardId) => {
    dispatch(toggleCard(cardId));
  };

  const handleClick = (event, cardData, cardId) => {
    event.preventDefault();

    dispatch(loadChosenCard(cardId));
    toggleTurnedOver(cardId);
    console.log(cardData, cardId);
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
