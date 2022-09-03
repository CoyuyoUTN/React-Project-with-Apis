import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Cards from "./Cards";

const CardsCollection = () => {
  const page = 1;
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const URL_CARDS = `https://rickandmortyapi.com/api/character/?page= ${page}`;
    const getCardsAxios = async () => {
      const getAxios = await axios.get(URL_CARDS).catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });
      console.log("getAxiosAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", getAxios);
      setCards(getAxios.data.results);
    };
    getCardsAxios();
  }, []);

  return (
    <div>
      <Cards card_prop={cards} />

      <Link to="/">
        <button type="submit" className="button-form" href="">
          <span>Back</span>
        </button>
      </Link>
    </div>
  );
};

export default CardsCollection;
