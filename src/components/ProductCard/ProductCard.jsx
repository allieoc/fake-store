import React, {useContext, useEffect} from 'react'
import './ProductCard.css';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';

function ProductCard({product}) {
  //access the global state
  //NOTE {} not ()
  const {addProduct, cart, removeProduct} = useContext(CartContext)


  
  //start with a variable to test UI
  //const isInCart = false;
  //change to state
  const [isInCart, setIsInCart] = React.useState(false)

  useEffect(
    ()=>{
      //console.log(favorites)
      //is this character in favorites?
      setIsInCart(cart?.find(item => item.id === product.id))

    }, [cart] //runs whenever favorites changes
  )
  

  return (

    <div className="product-card">
        <div className="image-container">
            {
              isInCart?
              <FaHeart className="product-heart" onClick={()=>removeProduct(product.id)}/>
              :
              <FaRegHeart className="product-heart" onClick={()=>addProduct(product)}/>
            }
            
            <img src={product.image} />
        </div>
        
        <Link to={`/details/${product.id}`}>{product.title}</Link>
        <p className="product-category">{product.category}</p>
        <br></br>
        <p className="product-price">${product.price}</p>
    </div>
  )
}

export default ProductCard