/* eslint-disable react/prop-types */
import cardBack from "../resources/images/cardBack.png";

const Card = (props) => {
  return (
    <>
      <img
        id={props.id}
        data={props.data}
        onClick={(event) => {
          props.handleClick(event, props.data, props.id);
        }}
        className="card--image"
        src={props.data.img}
        // src={props.data.isTurnedOver ? props.data.img : cardBack}
        alt={
          props.data.isTurnedOver
            ? `image for ${props.data.number} of ${props.data.suit}`
            : "default image of a card backing"
        }
      />
    </>
  );
};

export default Card;
