import { Link } from "react-router-dom";
const CardsCollection = () => {
  return (
    <div>
      <Link to="/">
        <button type="submit" className="button-form" href="">
          <span>Back</span>
        </button>
      </Link>
    </div>
  );
};

export default CardsCollection;
