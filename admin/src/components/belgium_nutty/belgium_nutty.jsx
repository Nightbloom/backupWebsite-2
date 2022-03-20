import React from "react";
import "./belgium_nutty.css";
import caribbean_tikki from "./pNutty.png";

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
          <b>Shelf life</b> - 5 days (in a cool, dry place in an airtight
          container after preparation)
        </p>
      </div>
      <div className="price">₹159</div>
      <div className="productDescription">
        <p className="para">
          A classic of the city of Rohtak in Haryana, rewri and gajjak made from
          sugar, jaggery and sesame provide the ultimate comfort of warmth in
          the bleak Northern winters. This is Zang's take on the same.
        </p>
      </div>
      <p className="title">Ingredients</p>
      <div className="ingredients">
        <div className="left">
          <ul>
            <li>Sugar</li>
            <li>Peanut</li>
            <li>Cashew Nut Broken</li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>Butter Chiplet</li>
            <li>Refined Vegetable Oil</li>
            <li>Water</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
