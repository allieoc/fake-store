import React from 'react'
import './Footer.css';
import { AiFillHeart } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer-container">
        <p>Made with <AiFillHeart /> by mimo</p>
        <a href="/contact">Contact Us</a>
    </div>
  )
}

export default Footer