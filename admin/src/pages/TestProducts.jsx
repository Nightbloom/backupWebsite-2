import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import "./TestProducts.css"
import Halwa from "../images/Halwa.png"
import pNutty from "../images/pNutty.png"
import Tikki from "../images/Tikki.png"
import Payasam from "../images/Payasam Pic 1.jpeg"
import Laddoo from "../images/Laddoo Pic 2.png"
import combo from "../images/combo 1.png"
import time from "../images/time.png"
import Serves from "../images/Serving.png"

const TestProducts = () => {
    const [qty, setQty] = useState(0);
    const dispatch = useDispatch()
    const { reduxSingleProduct, isLoading } = useSelector((state) => state.singleProduct)
  return (
    <>
    <section style={{marginTop: "20vw"}}>
        <div className='main'  >
            <div className='imageContainer'>
                <div className='priceTag'> 
                ₹389
                </div>
                <img src={Halwa} />
               
            </div>
            <div className='smallInfo'>
                <h6 className='info-header'>
                    SugarCane Halwa
                </h6>
                <div className='info'>
                    <img className='img1' src={time} />
                    <i>&nbsp;&nbsp;&nbsp;30 min</i>
                </div>
                <div className='info'>
                    <img className='img2' src={Serves} />
                    <i>&nbsp;&nbsp;&nbsp;2 serves</i>
                </div>
            </div>
            <div className='quantity'>
                <div>
                Quantity
                </div>
                <div className='quantity-button'>
                <button className="btn" disabled={qty === 0 ? true : false} onClick={e => {
                    setQty(pre => pre === 0 ? 1 : pre - 1)
                  }}>-</button>
                  <strong style={{}}>&nbsp;&nbsp; {qty} &nbsp;&nbsp;</strong>
                  <button className="btn" disabled={reduxSingleProduct.serves === qty ? true : false} onClick={e => {
                    setQty(pre => pre + 1)
                  }}>+</button>
                </div>
            </div>
        </div>
        <p><i class="arrow down"></i></p>
        <hr />
        <div className='main'  >
            <div className='imageContainer'>
                <div className='priceTag'> 
                    ₹199
                </div>
                <img src={pNutty} />
               
            </div>
            <div className='smallInfo'>
                <h6 className='info-header'>
                Belgium Nutty
                </h6>
                <div className='info'>
                    <img className='img1' src={time} />
                    <i>&nbsp;&nbsp;&nbsp;30 min</i>
                </div>
                <div className='info'>
                    <img className='img2' src={Serves} />
                    <i>&nbsp;&nbsp;&nbsp;2 serves</i>
                </div>
            </div>
            <div className='quantity'>
                <div>
                Quantity
                </div>
                <div className='quantity-button'>
                <button className="btn" disabled={qty === 0 ? true : false} onClick={e => {
                    setQty(pre => pre === 0 ? 1 : pre - 1)
                  }}>-</button>
                  <strong style={{}}>&nbsp;&nbsp; {qty} &nbsp;&nbsp;</strong>
                  <button className="btn" disabled={reduxSingleProduct.serves === qty ? true : false} onClick={e => {
                    setQty(pre => pre + 1)
                  }}>+</button>
                </div>
            </div>
        </div>
        <p><i class="arrow down"></i></p>
        <hr />
        <div className='main'  >
            <div className='imageContainer'>
                <div className='priceTag'> 
                    ₹159
                </div>
                <img src={Tikki} />
               
            </div>
            <div className='smallInfo'>
                <h6 className='info-header'>
                    Caribean Tikki
                </h6>
                <div className='info'>
                    <img className='img1' src={time} />
                    <i>&nbsp;&nbsp;&nbsp;30 min</i>
                </div>
                <div className='info'>
                    <img className='img2' src={Serves} />
                    <i>&nbsp;&nbsp;&nbsp;2 serves</i>
                </div>
            </div>
            <div className='quantity'>
                <div>
                Quantity
                </div>
                <div className='quantity-button'>
                <button className="btn" disabled={qty === 0 ? true : false} onClick={e => {
                    setQty(pre => pre === 0 ? 1 : pre - 1)
                  }}>-</button>
                  <strong style={{}}>&nbsp;&nbsp; {qty} &nbsp;&nbsp;</strong>
                  <button className="btn" disabled={reduxSingleProduct.serves === qty ? true : false} onClick={e => {
                    setQty(pre => pre + 1)
                  }}>+</button>
                </div>
            </div>
        </div>
        <p><i class="arrow down"></i></p>
        <hr />
        <div className='main'  >
            <div className='imageContainer'>
                <div className='priceTag'> 
                    ₹299
                </div>
                <img src={Payasam} />
               
            </div>
            <div className='smallInfo'>
                <h6 className='info-header'>
                    Black Payasam
                </h6>
                <div className='info'>
                    <img className='img1' src={time} />
                    <i>&nbsp;&nbsp;&nbsp;30 min</i>
                </div>
                <div className='info'>
                    <img className='img2' src={Serves} />
                    <i>&nbsp;&nbsp;&nbsp;2 serves</i>
                </div>
            </div>
            <div className='quantity'>
                <div>
                Quantity
                </div>
                <div className='quantity-button'>
                <button className="btn" disabled={qty === 0 ? true : false} onClick={e => {
                    setQty(pre => pre === 0 ? 1 : pre - 1)
                  }}>-</button>
                  <strong style={{}}>&nbsp;&nbsp; {qty} &nbsp;&nbsp;</strong>
                  <button className="btn" disabled={reduxSingleProduct.serves === qty ? true : false} onClick={e => {
                    setQty(pre => pre + 1)
                  }}>+</button>
                </div>
            </div>
        </div>
        <p><i class="arrow down"></i></p>
        <hr />
        <div className='main'  >
            <div className='imageContainer'>
                <div className='priceTag'> 
                    ₹259
                </div>
                <img src={Laddoo} />
               
            </div>
            <div className='smallInfo'>
                <h6 className='info-header'>
                    Kajjoor Laddu
                </h6>
                <div className='info'>
                    <img className='img1' src={time} />
                    <i>&nbsp;&nbsp;&nbsp;15 min</i>
                </div>
                <div className='info'>
                    <img className='img2' src={Serves} />
                    <i>&nbsp;&nbsp;&nbsp;10-15 serves</i>
                </div>
            </div>
            <div className='quantity'>
                <div>
                Quantity
                </div>
                <div className='quantity-button'>
                <button className="btn" disabled={qty === 0 ? true : false} onClick={e => {
                    setQty(pre => pre === 0 ? 1 : pre - 1)
                  }}>-</button>
                  <strong style={{}}>&nbsp;&nbsp; {qty} &nbsp;&nbsp;</strong>
                  <button className="btn" disabled={reduxSingleProduct.serves === qty ? true : false} onClick={e => {
                    setQty(pre => pre + 1)
                  }}>+</button>
                </div>
            </div>
        </div>
        <p><i class="arrow down"></i></p>
        <hr />
        <div className='main'  >
            <div className='imageContainer'>
                <div className='priceTag'> 
                    ₹456
                </div>
                <img src={combo} />
               
            </div>
            <div className='smallInfo'>
                <h6 className='info-header'>
                    Combo Meal
                </h6>
                <div className='info'>
                    <img className='img1' src={time} />
                    <i>&nbsp;&nbsp;&nbsp;30 min</i>
                </div>
                <div className='info'>
                    <img className='img2' src={Serves} />
                    <i>&nbsp;&nbsp;&nbsp;2 serves</i>
                </div>
            </div>
            <div className='quantity'>
                <div>
                Quantity
                </div>
                <div className='quantity-button'>
                <button className="btn" disabled={qty === 0 ? true : false} onClick={e => {
                    setQty(pre => pre === 0 ? 1 : pre - 1)
                  }}>-</button>
                  <strong style={{}}>&nbsp;&nbsp; {qty} &nbsp;&nbsp;</strong>
                  <button className="btn" disabled={reduxSingleProduct.serves === qty ? true : false} onClick={e => {
                    setQty(pre => pre + 1)
                  }}>+</button>
                </div>
            </div>
        </div>
        <p><i class="arrow down"></i></p>
        <hr />
        <div className='main'  >
            <div className='imageContainer'>
                <div className='priceTag'> 
                    ₹376
                </div>
                <img src={Halwa} />
               
            </div>
            <div className='smallInfo'>
                <h6 className='info-header'>
                    SugarCane Halwa
                </h6>
                <div className='info'>
                    <img className='img1' src={time} />
                    <i>&nbsp;&nbsp;&nbsp;30 min</i>
                </div>
                <div className='info'>
                    <img className='img2' src={Serves} />
                    <i>&nbsp;&nbsp;&nbsp;2 serves</i>
                </div>
            </div>
            <div className='quantity'>
                <div>
                Quantity
                </div>
                <div className='quantity-button'>
                <button className="btn" disabled={qty === 0 ? true : false} onClick={e => {
                    setQty(pre => pre === 0 ? 1 : pre - 1)
                  }}>-</button>
                  <strong style={{}}>&nbsp;&nbsp; {qty} &nbsp;&nbsp;</strong>
                  <button className="btn" disabled={reduxSingleProduct.serves === qty ? true : false} onClick={e => {
                    setQty(pre => pre + 1)
                  }}>+</button>
                </div>
            </div>
        </div>
        <p><i class="arrow down"></i></p>
        <hr />
        <div className='main'  >
            <div className='imageContainer'>
                <div className='priceTag'> 
                    ₹376
                </div>
                <img src={Halwa} />
               
            </div>
            <div className='smallInfo'>
                <h6 className='info-header'>
                    SugarCane Halwa
                </h6>
                <div className='info'>
                    <img className='img1' src={time} />
                    <i>&nbsp;&nbsp;&nbsp;30 min</i>
                </div>
                <div className='info'>
                    <img className='img2' src={Serves} />
                    <i>&nbsp;&nbsp;&nbsp;2 serves</i>
                </div>
            </div>
            <div className='quantity'>
                <div>
                Quantity
                </div>
                <div className='quantity-button'>
                <button className="btn" disabled={qty === 0 ? true : false} onClick={e => {
                    setQty(pre => pre === 0 ? 1 : pre - 1)
                  }}>-</button>
                  <strong style={{}}>&nbsp;&nbsp; {qty} &nbsp;&nbsp;</strong>
                  <button className="btn" disabled={reduxSingleProduct.serves === qty ? true : false} onClick={e => {
                    setQty(pre => pre + 1)
                  }}>+</button>
                </div>
            </div>
        </div>
        <p><i class="arrow down"></i></p>
        <hr />
    </section>
    </>
  )
}

export default TestProducts