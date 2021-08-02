import React from "react";
import "./thp.css";
import suvs from "./images/icon-suvs.svg";
import sedans from "./images/icon-sedans.svg";
import luxury from "./images/icon-luxury.svg";

const TCP = () => {
  return (
    <div className="main">
      <div className="card1">
        <img className="img" src={suvs} alt="suvs" />
        <h1 className="header">SEDANS</h1>
        <p className="paraph">
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <label className="label1" onClick="">
          Learn More
        </label>
      </div>
      <div className="card2">
        <img className="img" src={sedans} alt="sedans" />
        <h1 className="header">SUVS</h1>
        <p className="paraph">
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <label className="label2" onClick="">
          Learn More
        </label>
      </div>
      <div className="card3">
        <img className="img" src={luxury} alt="luxury" />
        <h1 className="header">LUXURY</h1>
        <p className="paraph">
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <label className="label3" onClick="">
          Learn More
        </label>
      </div>
    </div>
  );
};

export default TCP;
