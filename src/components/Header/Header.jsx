import React, { useContext } from 'react'
import { BsCart3 } from "react-icons/bs";
import './Header.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

function Header() {
  const {cart} = useContext(CartContext)
  
  return (
    <div className="header-container">
      <Link to="/" className="logo">Allie's Fake Store</Link>
      <Link to="/checkout" className="cart-number">{cart.length}</Link>
      <Link to="/checkout">
      <BsCart3 className="cart-icon"/>
      </Link>
    </div>
    
  )
}

export default Header