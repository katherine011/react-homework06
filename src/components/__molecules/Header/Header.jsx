import React from "react";
import "./Header.css";
import Star from "../../__atoms/Star/Star";
import MiddleText from "../../__atoms/MiddleText/MiddleText";

const Header = () => {
  return (
    <div className="Header">
      <Star />
      <MiddleText />
    </div>
  );
};

export default Header;
