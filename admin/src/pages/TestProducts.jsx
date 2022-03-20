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
    const [qty1, setQty1] = useState(0);
    const [qty2, setQty2] = useState(0);
    const [qty3, setQty3] = useState(0);
    const [qty4, setQty4] = useState(0);
    const [qty5, setQty5] = useState(0);
    const [qty6, setQty6] = useState(0);
    const [qty7, setQty7] = useState(0);
    const [qty8, setQty8] = useState(0);
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
                <button className="btn" disabled={qty1 === 0 ? true : false} onClick={e => {
                    setQty1(pre => pre === 0 ? 1 : pre - 1)
                  }}>-</button>
                  <strong style={{}}>&nbsp;&nbsp; {qty1} &nbsp;&nbsp;</strong>
                  <button className="btn" disabled={reduxSingleProduct.serves === qty1 ? true : false} onClick={e => {
                    setQty1(pre => pre + 1)
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
                <button className="btn" disabled={qty2 === 0 ? true : false} onClick={e => {
                    setQty2(pre => pre === 0 ? 1 : pre - 1)
                  }}>-</button>
                  <strong style={{}}>&nbsp;&nbsp; {qty2} &nbsp;&nbsp;</strong>
                  <button className="btn" disabled={reduxSingleProduct.serves === qty2 ? true : false} onClick={e => {
                    setQty2(pre => pre + 1)
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
                <button className="btn" disabled={qty3 === 0 ? true : false} onClick={e => {
                    setQty3(pre => pre === 0 ? 1 : pre - 1)
                  }}>-</button>
                  <strong style={{}}>&nbsp;&nbsp; {qty3} &nbsp;&nbsp;</strong>
                  <button className="btn" disabled={reduxSingleProduct.serves === qty3 ? true : false} onClick={e => {
                    setQty3(pre => pre + 1)
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
                <button className="btn" disabled={qty4 === 0 ? true : false} onClick={e => {
                    setQty4(pre => pre === 0 ? 1 : pre - 1)
                  }}>-</button>
                  <strong style={{}}>&nbsp;&nbsp; {qty4} &nbsp;&nbsp;</strong>
                  <button className="btn" disabled={reduxSingleProduct.serves === qty4 ? true : false} onClick={e => {
                    setQty4(pre => pre + 1)
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
                <button className="btn" disabled={qty5 === 0 ? true : false} onClick={e => {
                    setQty5(pre => pre === 0 ? 1 : pre - 1)
                  }}>-</button>
                  <strong style={{}}>&nbsp;&nbsp; {qty5} &nbsp;&nbsp;</strong>
                  <button className="btn" disabled={reduxSingleProduct.serves === qty5 ? true : false} onClick={e => {
                    setQty5(pre => pre + 1)
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
                <button className="btn" disabled={qty6 === 0 ? true : false} onClick={e => {
                    setQty6(pre => pre === 0 ? 1 : pre - 1)
                  }}>-</button>
                  <strong style={{}}>&nbsp;&nbsp; {qty6} &nbsp;&nbsp;</strong>
                  <button className="btn" disabled={reduxSingleProduct.serves === qty6 ? true : false} onClick={e => {
                    setQty6(pre => pre + 1)
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
                <button className="btn" disabled={qty7 === 0 ? true : false} onClick={e => {
                    setQty7(pre => pre === 0 ? 1 : pre - 1)
                  }}>-</button>
                  <strong style={{}}>&nbsp;&nbsp; {qty7} &nbsp;&nbsp;</strong>
                  <button className="btn" disabled={reduxSingleProduct.serves === qty7 ? true : false} onClick={e => {
                    setQty7(pre => pre + 1)
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
                <button className="btn" disabled={qty8 === 0 ? true : false} onClick={e => {
                    setQty8(pre => pre === 0 ? 1 : pre - 1)
                  }}>-</button>
                  <strong style={{}}>&nbsp;&nbsp; {qty8} &nbsp;&nbsp;</strong>
                  <button className="btn" disabled={reduxSingleProduct.serves === qty8 ? true : false} onClick={e => {
                    setQty8(pre => pre + 1)
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