import Item from "./Item";

const cards = ({ card_prop }) => {
  console.log(card_prop);
  return (
    <div className="container-card">
      {card_prop.map((card) => {
        return <Item image={card.image} id={card.id} name={card.name} />;
      })}
    </div>
  );
};

export default cards;
