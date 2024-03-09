/* eslint-disable react/prop-types */
import Card from "./Card";

const GameBoard = ({ cardList }) => {
  for (let i = cardList.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = cardList[i];
    cardList[i] = cardList[j];
    cardList[j] = k;
  }

  const cardsToLoad = cardList.map((card) => {
    return <Card key={card.index} data={card} />;
  });
  return <>{cardsToLoad}</>;
};

export default GameBoard;
