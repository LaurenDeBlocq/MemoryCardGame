/* eslint-disable react/prop-types */
import Card from "./Card";
import { loadCards, selectCards } from "../slices/cardSlice";
import { useDispatch, useSelector } from "react-redux";

const GameBoard = ({ cardList }) => {
  const dispatch = useDispatch();
  for (let i = cardList.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = cardList[i];
    cardList[i] = cardList[j];
    cardList[j] = k;
  }
  cardList.forEach((element) => {
    dispatch(loadCards(element));
  });
  const handleClick = (event) => {
    event.preventDefault();
    console.log(event);
  };
  const playingCards = useSelector(selectCards);

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
