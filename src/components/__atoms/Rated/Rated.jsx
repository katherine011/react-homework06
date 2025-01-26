import React from "react";
import "./Rated.css";

const Rated = ({ rate }) => {
  const rated1 = <p>You selected {rate} out of 5</p>;

  return <div className="Rated">{rated1}</div>;
};

export default Rated;
