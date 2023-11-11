import React from "react";
import "./GetStarted.css";
function GetStarted() {
  return (
    <section id="GetStarted" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find your Dream House with an attractive quotes
            <br />
            Find your residence soon
          </span>
          <button className="button">
            <a href="mailto:mikibane643@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
