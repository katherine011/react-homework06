import React, { useState } from "react";
import "./MainCard.css";
import Header from "../../__molecules/Header/Header";
import Rating from "../../__molecules/Rating/Rating";
import Button from "../../__molecules/Button/Button";
import HeaderPhoto from "../../__atoms/HeaderPhoto/HeaderPhoto";
import Rated from "../../__atoms/Rated/Rated";
import FooterText from "../../__atoms/FooterText/FooterText";

const MainCard = (props) => {
  const [rate, setRate] = useState(null);
  const [nextPage, setNextPage] = useState(false);

  const next = () => {
    if (rate) {
      setNextPage(true);
    }
  };

  const rated = (rate) => {
    setRate(rate);
  };

  return (
    <div className="MainCard">
      {!nextPage ? (
        <>
          <Header />
          <Rating rate={props.rate} letRate={rated} />
          <div className="Button" onClick={next}>
            <Button />
          </div>
        </>
      ) : (
        <div className="Main">
          <HeaderPhoto />
          <Rated rate={rate} />
          <FooterText />
        </div>
      )}
    </div>
  );
};

export default MainCard;
