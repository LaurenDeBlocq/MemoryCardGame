/* eslint-disable react/prop-types */
const Card = (props) => {
  console.log(props.data.img);
  return (
    <>
      <img
        className="card--image"
        src={props.data.isTurnedOver ? props.data.img : props.data.defaultImg}
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
