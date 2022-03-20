import React from "react";
import "./black_rice_payassam.css";
import caribbean_tikki from "./Payasam Pic 1.jpeg";

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
          <b>Serves</b> - Yields 10-15 Laddus
        </p>
        <p>
          <b>Cooking time</b> - 15 min
        </p>
        <p>
          <b>Shelf life</b> - 7/8 days
        </p>
      </div>
      <div className="price">₹299</div>
      <div className="productDescription">
        <p className="para">
          An exotic take on the humble yet versatile payasam. Usually prepared
          on the auspicious eve of Pongal. This also goes well for simple
          occassions like birthdays, parties and special meals.
        </p>
      </div>
      <p className="title">Ingredients</p>
      <div className="ingredients">
        <div className="left">
          <ul>
            <li>Black Rice</li>
            <li>Tetra Pack Milk - 250ml</li>
            <li>Coconut Milk Powder</li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>Jaggery</li>
            <li>Green Cardamom powder</li>
            <li>Assorted nuts</li>
            <li>Ghee</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
