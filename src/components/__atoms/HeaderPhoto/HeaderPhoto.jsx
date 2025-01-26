import React from "react";
import "./HeaderPhoto.css";
import Pay from "../../../assets/images/pay.png";

const HeaderPhoto = () => {
  return (
    <div className="HeaderPhoto">
      <img src={Pay} alt="pay" />
    </div>
  );
};

export default HeaderPhoto;
