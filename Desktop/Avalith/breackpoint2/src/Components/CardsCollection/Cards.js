import Item from "./Item";

const cards = ({ card_prop }) => {
  console.log(card_prop);
  return (
    <div className="container-card">
      {card_prop.map((card, index) => {
        return (
          <div key={index} className="card-card">
            <Item image={card.image} id={card.id} name={card.name}></Item>
          </div>
        );
      })}
    </div>
  );
};

export default cards;
