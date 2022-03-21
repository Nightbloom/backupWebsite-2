import React from "react";
import "./kajjor_laddu.css";
import caribbean_tikki from "./Laddoo Pic 2.png";

export default function Popup(setShowModal) {
  const modalRef1 = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  return (
    <div className="container" ref={modalRef1} onClick={closeModal}>
      <div className="caribbean_tikki">
        <img src={caribbean_tikki} />
      </div>
      <div className="cancel" onClick={() => setShowModal(false)}>
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
      <div className="price">₹259</div>
      <div className="productDescription">
        <p className="para">
          Sesame provides warmth and dates are an excellent source of vital
          nutrients making an important part of winter festivities.
        </p>
      </div>
      <p className="title">Ingredients</p>
      <div className="ingredients">
        <div className="left">
          <ul>
            <li>Grinded and Roasted seasame seeds and cardamoms-Powder</li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>Mashed dates</li>
            <li>Roasted cashews</li>
            <li>Roasted Seasame seeds - 100g</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
