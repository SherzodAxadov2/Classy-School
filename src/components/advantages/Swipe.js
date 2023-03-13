import React from "react";
import "./advantage.css";

const Swiper = ({ swiper }) => {
  return (
    <div className="swipe" >
      <div className="swipe-box">
        <div className="swipe-img">
          <img src={swiper.img} alt="img" />
        </div>
        <div className="swipe-title">{swiper.title}</div>
        <div className="swipe-text">{swiper.subtitle}</div>
      </div>
    </div>
  );
};

export default Swiper;
