import React, { useContext } from 'react'
import "./CartItem.css"
import { BsTrash } from "react-icons/bs";
import { CartContext } from '../../contexts/CartContext';

function CartItem({product}) {
    const {removeProduct} = useContext(CartContext)

  return (
    <div className="cart-item-container">
        <div className="cart-item-details">
            <img src={product.image} />
            <p>{product.title}</p>
        </div>
        <div className="cart-item-data">
            <p>{product.price}€</p>
            <p>1</p>
            <BsTrash onClick={()=>removeProduct(product.id)}/>
        </div>
    </div>
  )
}

export default CartItem