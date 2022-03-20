import React from "react";
import "./bulgar_sugarcane_halwa.css";
import caribbean_tikki from "./Halwa 3 2.png";

export default function popup() {
  return (
    <div className="container">
      <div className="caribbean_tikki">
        <img src={caribbean_tikki} />
      </div>
      <div className="cancel">
        <span></span>
        <span></span>
      </div>
      <div className="description">
        <p>
          <b>Serves</b> - 2
        </p>
        <p>
          <b>Cooking time</b> - 30 mins
        </p>
        <p>
          <b>Shelf life</b> - 48hrs (in a refrigerator after preparation)
        </p>
      </div>
      <div className="price">₹389</div>
      <div className="productDescription">
        <p className="para">
          Quintessentially a Persian grain, bulgur is rich in fibre and trace
          minerals thereby making it the perfect solution for salads, mains and
          in this case, dessert.
        </p>
      </div>
      <p className="title">Ingredients</p>
      <div className="ingredients">
        <div className="left">
          <ul>
            <li>Ghee</li>
            <li>Raisin</li>
            <li>Bulgur</li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>Sugarcane juice</li>
            <li>Jaggery</li>
            <li>Cardmom powder</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
