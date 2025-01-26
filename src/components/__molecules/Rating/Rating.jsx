import React from "react";
import "./Rating.css";
import RateCard from "../../__atoms/RateCard/RateCard";

const Rating = ({ letRate }) => {
  return (
    <div className="Rating">
      <div onClick={() => letRate(1)}>
        <RateCard rate={1} />
      </div>
      <div onClick={() => letRate(2)}>
        <RateCard rate={2} />
      </div>
      <div onClick={() => letRate(3)}>
        <RateCard rate={3} />
      </div>
      <div onClick={() => letRate(4)}>
        <RateCard rate={4} />
      </div>
      <div onClick={() => letRate(5)}>
        <RateCard rate={5} />
      </div>
    </div>
  );
};

export default Rating;
