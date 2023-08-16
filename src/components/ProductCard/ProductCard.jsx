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
        
        <a href={`/details/${product.id}`}>{product.title}</a>
        <p className="product-category">{product.category}</p>
        <br></br>
        <p className="product-price">{product.price}€</p>
    </div>
  )
}

export default ProductCard