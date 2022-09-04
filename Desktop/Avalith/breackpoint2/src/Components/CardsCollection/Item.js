const Item = ({ image, name, id }) => {
  return (
    <div className="card-card" key={id}>
      <img className="image-card" src={image} alt="imgCard"></img>
      <h2 className="id"> Id: {id}</h2>
      <h3 className="name"> Name: {name}</h3>
    </div>
  );
};
export default Item;
