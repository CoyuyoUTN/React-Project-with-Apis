const cards = ({ card_prop }) => {
  console.log(card_prop);
  return (
    <div>
      {card_prop.map((card, index) => {
        return (
          <div className="card" key={index}>
            <img className="image" src={card.image} alt="imgCard"></img>
            <h2 className="id"> Id: {card.id}</h2>
            <h3 className="name"> Name: {card.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default cards;
