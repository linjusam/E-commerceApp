import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './navbar.css';
import logo from "../assets/logo1.jpg";
import cartIcon from "../assets/cart2.jpg";


const Navbar = () => {
  const cart = useSelector(state => state.cart.items);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  
  return (
   
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="logo" />Happiness Cart
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <img src={cartIcon} alt="Cart" className="cart-icon" />
                Cart <span className="cart-count">{totalItems}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
 
   
  );
};

export default Navbar;
