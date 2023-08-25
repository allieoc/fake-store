import React, {useContext} from 'react'
import "./Checkout.css"
import { CartContext } from '../../contexts/CartContext'
import ProductCard from '../../components/ProductCard/ProductCard'
import CartItem from '../../components/CartItem/CartItem'

function Checkout() {
  //access the global state
  //NOTE {} not ()
  const {addProduct, cart, removeProduct} = useContext(CartContext)

  return (
    <div className="checkout-container">
      <div className="checkout-titles">
        <p>Item</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Remove</p>
      </div>
      <hr />
      <div className="checkout-products">
        {
          cart?.length > 0? 
          cart?.map(item=><CartItem product={item} key={item.id} />)
            :
          <p>Your cart is empty</p>
        }
      </div>
      <hr />

    </div>
  )
}

export default Checkout