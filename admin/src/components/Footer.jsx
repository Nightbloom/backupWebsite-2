import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <footer className="text-center text-lg-start my-auto text-muted" style={{backgroundColor:"#89e657" }} >
        <div className="me-5 d-none d-lg-block">
            <span></span>
            </div>
        <section className="mx-4 my-5" style={{marginTop: "10px"}}>
            <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">      
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" style={{paddingTop: "60px", color:"green"}}>
                <h6 className="text-uppercase fw-bold mb-4">
                    Contact
                </h6>
                <p><i className="fas fa-envelope me-3"></i>thezanglife@gmail.com</p>
                <p><i className="fas fa-phone me-3"></i> + 91-8248890189</p>
                </div>
            
                <div className="col-md-3 mx-auto mb-4" style={{paddingTop: "60px",  color:"green"}}>
                
                <p><Link to="/!">Privacy and Refund policy</Link></p>
                <p><Link to="/!">Disclamer Policy</Link></p>
                <p><Link to="/!">Terms and Condition</Link></p>
                <p><Link to="/!">Click here for quick customer support</Link></p>
                </div>
            
            </div>
            </div>
        </section>
        
        <div className="text-center">
            © 2022 Copyright:
            <Link to="/TheSciFi.com" className='mx-2'>ZangBox.com</Link>
        </div>

        </footer>

    </>
  )
}

export default Footer