import React, {useContext, useEffect, useState} from 'react'
import "./Checkout.css"
import { CartContext } from '../../contexts/CartContext'
import CartItem from '../../components/CartItem/CartItem'
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '40%',
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px'
  },
  overlay:{
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById("root"));

function Checkout() {
  //access the global state
  //NOTE {} not ()
  const {addProduct, cart, removeProduct, setCart} = useContext(CartContext)

  //create state to store the total price
  const [totalPrice, setTotalPrice] = useState();
  //initialize price to add cart items prices to
  let price = 0;

  //add price to total every time cart changes
  useEffect(
    ()=>{
      //iterate through cart array to access the prices
      for(let i = 0; i < cart.length; i++){
        //console.log(cart[i].price)
        //add each product's price to price variable
        price += cart[i].price
        //round price to 2 decimal places
        price = (Math.round((price + Number.EPSILON) * 100) / 100)
        //store price variable in state
        setTotalPrice(price)
        }
        if(cart.length === 0){
          setTotalPrice(0)
      }
    }, [cart]
  )

    //create state to control modal
    const [isOpen, setIsOpen] = useState(false)

    const navigate = useNavigate()
    
    const showHome = () =>{
      setCart([])
      navigate('/')
    }


    const handleCheckoutClick = () =>{
      if (cart.length > 0){
        setIsOpen(true)
      } else {
        alert('Please add items to your cart')
      }
    }


  return (
    <div className="checkout-container">
      <div className="checkout-titles">
        <p>Item</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Remove</p>
      </div>
      <div className="checkout-products">
        {
          cart?.length > 0? 
          cart?.map(item=><CartItem product={item} key={item.id} />)
            :
          <p>Your cart is empty</p>
        }
      </div>
      <div className="checkout-total">
        <h3>Total $<span className="checkout-price">{totalPrice}</span></h3>
        <button onClick={handleCheckoutClick}>Checkout</button>

        <Modal
        isOpen={isOpen}
        onRequestClose={()=>setIsOpen(false)}
        style={customStyles}
        contentLabel="Checkout Modal">
      
          <p className="modal-message">Your Order was successful!
            <br />
            <br />
            Check your email for the order confirmation. Thank you for shopping with Fake Store!</p>
            <br />
          <button className="checkout-return" onClick={showHome}>Return to Main Page</button>

        </Modal>
      </div>

    </div>
  )
}

export default Checkout