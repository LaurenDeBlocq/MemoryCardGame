/* eslint-disable react/prop-types */
import Card from "./Card";

const GameBoard = ({ cardList }) => {
  const cardsToLoad = cardList.map((card) => {
    return <Card key={card.index} data={card} />;
  });
  return <>{cardsToLoad}</>;
};

export default GameBoard;
