import React from 'react'
import { BsCart3 } from "react-icons/bs";
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header-container">
      <Link to="/" className="logo">Fake Store</Link>
      <Link to="/checkout" className="cart-number">1</Link>
      <Link to="/checkout">
      <BsCart3 className="cart-icon"/>
      </Link>
    </div>
    
  )
}

export default Header