import React, { useRef } from "react";
import "./combo1.css";
import caribbean_tikki from "./combo 1.png";

export default function Popup({ setShowModal }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  return (
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="caribbean_tikki">
        <img src={caribbean_tikki} />
      </div>
      <div className="cancel" onClick={() => setShowModal(false)}>
        <span></span>
        <span></span>
      </div>
      <div className="description">
        <p>
          <b>Cooking time</b> - 30 min
        </p>
        <p>
          <b>Shelf life</b> - 2 days
        </p>
      </div>
      <div className="price">₹456</div>
      <div className="productDescription">
        <p className="para">
          A classic of the city of Rohtak in Haryana, rewri and gajjak made from
          sugar, jaggery and sesame provide the ultimate comfort of warmth in
          the bleak Northern winters. This is Zang's take on the same
        </p>
      </div>
      <div className="ingredients">
        <div className="left">
          <b>Bulgar Sugar Halwa</b>
          <ul>
            <li>Ghee</li>
            <li>Raisin</li>
            <li>Bulgur</li>
            <li>Sugarcane juice</li>
            <li>Jaggery</li>
            <li>Cardmom powder</li>
          </ul>
        </div>
        <div className="right">
          <b>Belgium Nutty Praline Kit ingredients</b>
          <ul>
            <li>Sugar</li>
            <li>Peanut</li>
            <li>Cashew Nut Broken</li>
            <li>Butter Chiplet</li>
            <li>Refined Vegetable Oil</li>
            <li>Water</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
