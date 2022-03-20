import React from "react";
import "./caribbean_tikki.css";
import caribbean_tikki from "./caribbean_tikki.png";

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
          <b>Serves</b> - 3 (10-15 Tikkis)
        </p>
        <p>
          <b>Cooking time</b> - 30 min
        </p>
        <p>
          <b>Shelf life</b> - 48hrs (in a refrigerator after preparation)
        </p>
      </div>
      <div className="price">₹159</div>
      <div className="productDescription">
        <p className="para">
          Inspired by the tingling tastes of the Caribbean, this protien-packed
          starter gives the best of both worlds - Indian and Jamaican - in one
          form
        </p>
      </div>
      <p className="title">Ingredients</p>
      <div className="ingredients">
        <div className="left">
          <ul>
            <li>Rajma</li>
            <li>Oats Powder</li>
            <li>Green Chilli and curry leaves</li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>Ginger and Garlic paste</li>
            <li>Rice flour and corn flour</li>
            <li>Spice mix</li>
            <li>Oil</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
