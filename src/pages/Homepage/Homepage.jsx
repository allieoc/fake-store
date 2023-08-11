import React, {useEffect, useState} from 'react'
import './Homepage.css';
import axios from 'axios';
import ProductCard from '../../components/ProductCard/ProductCard';
import Categories from '../../components/Categories/Categories';

function Homepage() {
    //create state to hold products
    const [products, setProducts] = useState([])

    //this page should show all the products when it loads
    //create useEffect for this
    //https://fakestoreapi.com/products

    useEffect(
        ()=>{
            // console.log("homepage loaded")
            //make api call to get products
            axios.get("https://fakestoreapi.com/products")
            .then(res => {
                // console.log(res.data)
                //store product data in state
                setProducts(res.data)
            })
            .catch(err => console.log(err))


        }, [] 
    )



  return (
    <div className="homepage-container">
        <Categories />
        <div className="products-container">
            {
                products.map(item=><ProductCard product ={item}
                    key={item.id} />)
            }    
        </div>
        
    </div>
  )
}

export default Homepage