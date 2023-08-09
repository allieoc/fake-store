import React from 'react'
import './ProductCard.css';
import { AiFillHeart } from "react-icons/ai";

function ProductCard({product}) {
  return (

    <div className="product-card">
        <div className="image-container">
            <AiFillHeart className="product-heart"/>
            <img src={product.image} />
        </div>
        
        <p className="product-title">{product.title}</p>
        <p className="product-category">{product.category}</p>
        <br></br>
        <p className="product-title">{product.price}€</p>
    </div>
  )
}

export default ProductCard