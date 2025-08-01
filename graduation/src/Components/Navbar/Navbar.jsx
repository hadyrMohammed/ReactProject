import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { FaCartShopping } from "react-icons/fa6";

export default function Navbar({ cart }) {
  return (
    <nav className="navbar bg-light">
    <div className="container d-flex flex-wrap justify-content-between align-items-center py-2">
       <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img src={logo} alt="Logo" style={{ width: "40px" }} />
         <h4 className="m-0">Store</h4>
         </Link>
        <ul className="nav d-flex flex-wrap gap-3 align-items-center mb-0">
         <li className="nav-item">
            <Link className="nav-link " to="/">Home</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/SignIn">Sign In</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/SignUp">Sign Up</Link>
          </li>
           <li>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" />
             <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </li>
          <li className="position-relative">
            <FaCartShopping size={24} />
            {cart > 0 && (
              <p className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"> {cart} </p>
            )}
          </li>
        </ul>
      </div>
    </nav>
  )
}
