import React from "react";
import "./RateCard.css";

const RateCard = (props) => {
  return <button className="RateCard">{props.rate}</button>;
};

export default RateCard;
