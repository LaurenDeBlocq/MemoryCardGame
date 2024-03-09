import Card from "./Card";

const GameBoard = () => {
  const cardsToLoad = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const cards = cardsToLoad.map((card) => {
    return <Card key={card} />;
  });
  return <>{cards}</>;
};

export default GameBoard;
