import React from 'react'

const Checkout = () => {
  return (
    
    <div className="container my-4">
        <h1>Customer info</h1>
        <form>    
        <div className="mb-3">
            <label  className="form-label">First Name</label>
            <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label  className="form-label">Email</label>
            <input type="email" className="form-control" />
        </div>
        <h1>Where To</h1>
        <div className="mb-3">
            <label  className="form-label">Address</label>
            <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label className="form-label">City</label>
            <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label  className="form-label">State</label>
            <input type="text" className="form-control" />
        </div>
        <h1>Payment Info</h1>
        <div className="mb-3">
            <label  className="form-label">Debit/Credit Card Number</label>
            <input type="number" className="form-control" />
        </div>
        <div className="mb-3">
            <label  className="form-label">Expire On</label>
            <input type="month" className="form-control"/>
        </div>
     
        <div className="mb-3">
            <label  className="form-label">CVV</label>
            <input type="number" className="form-control"  />
        </div>

        {/* <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div> */}
        <button type="submit" className="btn btn-success">Click to Pay</button>
        </form>
    </div>
    
  )
}

export default Checkout