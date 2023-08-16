import React, { useEffect } from 'react'
import "./ProductDetails.css"
import {useParams} from 'react-router-dom'
import axios from 'axios'

function ProductDetails() {
    //this page shows the details of a specific product
    //when the page loads
    //which product?
    //the id is in the url
    //retrieve id with useParams
    const {productId} = useParams()

    //create state
    const [product, setProduct] = React.useState('')

    //https://fakestoreapi.com/products/1

    useEffect(
        ()=>{
            console.log("show details", productId)
            //make api call to get details for this product
            axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>{
                console.log(res.data)
                //I have the data, where do I store it?
                //store it in state
                setProduct(res.data)
            })
            .catch(err => console.log(err))
        }, []
    )

  return (
    <div className="details-page">
        <div className="product-container">
            <img src={product.image} />
            <div className="product-info">
                <h2>{product.title}</h2> 
                <h2>{product.price}€</h2>
                <h3>Description</h3>
                <p>{product.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    </div>
    
  )
}

export default ProductDetails