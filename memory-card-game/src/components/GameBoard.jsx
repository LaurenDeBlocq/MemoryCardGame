/* eslint-disable react/prop-types */
import Card from "./Card";
import { loadCard, selectCards } from "../slices/cardSlice";
import { useDispatch, useSelector } from "react-redux";

const GameBoard = ({ cardList }) => {
  const dispatch = useDispatch();
  for (let i = cardList.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = cardList[i];
    cardList[i] = cardList[j];
    cardList[j] = k;
  }
  // console.log(cardList);
  cardList.forEach((card) => dispatch(loadCard(card)));
  //   const handleClick = (event) => {
  //     event.preventDefault();
  //     console.log(event);
  //   };
  const cardsToPlay = useSelector(selectCards);
  console.log(cardsToPlay);

  const cardsToLoad = useSelector(selectCards).map((card) => {
    return (
      <Card
        key={cardList.indexOf(card)}
        // handleClick={handleClick}
        data={card}
      />
    );
  });
  return <>{cardsToLoad}</>;
};

export default GameBoard;
