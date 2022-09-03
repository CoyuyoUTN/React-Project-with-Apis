import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Cards from "./Cards";
import "./cards.css";
import PaginationCards from "./PaginationCards";

const CardsCollection = () => {
  const page = 2;
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
      setCards(getAxios.data.results);
    };
    getCardsAxios();
  }, []);

  return (
    <div className="body-container">
      <Link to="/">
        <div className="container_back_card">
          <button type="submit" className="container_back_btn_card" href="">
            <span>Back</span>
          </button>
        </div>
      </Link>
      <div className="body-card">
        <Cards card_prop={cards} />
      </div>
      <PaginationCards />
    </div>
  );
};

export default CardsCollection;
