import React, {useEffect, useState} from 'react'
import "./Categories.css"
import axios from 'axios';

function Categories() {
    //first we need to map out the categories
    //use state to hold categories
    const [categories, setCategories] = useState([])

    //this page should show all the categories when it loads
    //create useEffect for this
    //https://fakestoreapi.com/products/categories

    useEffect(
        ()=>{
            // console.log("categories loaded")
            //make api call to get categories
            axios.get('https://fakestoreapi.com/products/categories')
            .then(res => {
                console.log(res.data)
                //I have the category data, where do I store it?
                //store it in state
                setCategories(res.data)
                //this is what will display in categories conatiner
            })
            .catch(err =>console.log(err))

        }, [] 
    )



  return (
    <div className="categories-container">
        <button>All</button>
        {
            categories.map(item=> <button>{item}</button>)
        } 
    </div>
  )
}

export default Categories