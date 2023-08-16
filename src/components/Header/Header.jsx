import React from 'react'
import { BsCart3 } from "react-icons/bs";
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <a href="/">Fake Store</a>
      <p>1</p>
      <BsCart3 className="cart-icon"/>
    </div>
  )
}

export default Header