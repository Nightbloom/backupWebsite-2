import React from 'react';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"



export default function Navbar() {
    const dispatch = useDispatch()
    const { cartItem } = useSelector(state => state.cart)

    return <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
            <Link className="navbar-brand" to="/"><strong>ZangBox</strong></Link>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item">
                <Link className="nav-link" to="/cart">
                <button className="btn btn-light btn-sm">Cart
                    <div className="badge text-dark">
                        {
                            cartItem.reduce((acc, item) => acc + (+item.qty), 0)
                        }
                    </div>
                </button>
                </Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    </div>;
}
