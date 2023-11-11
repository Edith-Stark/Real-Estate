import React from "react";

import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import "./Resdiencies.css";
import data from "../../src/utils/slider.json";
import { sliderSettings } from "../../src/utils/common";
function Resdiencies() {
  return (
    <section id="Residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText"> Popular Residencies</span>
        </div>
        <div className="cards">
          {data.map((card, i) => (
            <div key={i} className="flexColStart r-card ">
              <img src={card.image} alt="" />
              <span className="secondaryText r-price">
                <span style={{ color: "orange" }}>$</span>
                <span>{card.price}</span>
              </span>
              <span className="primaryText">{card.name}</span>
              <span className="secondaryText">{card.detail}</span>
            </div>
          ))}
          {data.map((card, i) => (
            <div key={i} className="flexColStart r-card ">
              <img src={card.image} alt="" />
              <span className="secondaryText r-price">
                <span style={{ color: "orange" }}>$</span>
                <span>{card.price}</span>
              </span>
              <span className="primaryText">{card.name}</span>
              <span className="secondaryText">{card.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resdiencies;
const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-button">
      <button onClick={() => swiper.slidePrev}>&lt;</button>
      <button onClick={() => swiper.slideNext}>&gt;</button>
    </div>
  );
};
