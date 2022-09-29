import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Cards from "./Cards";
import "./cards.css";
import PaginationCards from "./PaginationCards";
import Button from "react-bootstrap/Button";

const CardsCollection = () => {
  const [cards, setCards] = useState([]);
  const [info, setInfo] = useState({});

  const URL_CARDS = `https://rickandmortyapi.com/api/character/`;
  const fetch_Data = async (url) => {
    const getAxios = await axios.get(url).catch(function (error) {
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
    setInfo(getAxios.data.info);
  };

  const onNext = () => {
    fetch_Data(info.next);
  };

  const onBack = () => {
    fetch_Data(info.prev);
  };

  useEffect(() => {
    fetch_Data(URL_CARDS);
  }, [URL_CARDS]);

  return (
    <div className="body-container">
      <div className="container_back_card">
        <Link to="/">
          <Button variant="dark">Back</Button>
        </Link>
      </div>
      <PaginationCards
        prev={info.prev}
        next={info.next}
        onBack={onBack}
        onNext={onNext}
      />
      <div className="body-card">
        <Cards card_prop={cards} />
      </div>
      <PaginationCards
        prev={info.prev}
        next={info.next}
        onBack={onBack}
        onNext={onNext}
      />
    </div>
  );
};

export default CardsCollection;
