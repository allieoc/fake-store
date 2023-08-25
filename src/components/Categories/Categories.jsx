import React, {useEffect, useState} from 'react'
import "./Categories.css"
import axios from 'axios';

function Categories({setProducts}) {
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
                //console.log(res.data)
                //I have the category data, where do I store it?
                //store it in state
                setCategories(res.data)
                //this is what will display in categories conatiner
            })
            .catch(err =>console.log(err))

        }, [] 
    )

    //function to change endpoint based on which category is clicked
    //this function needs to show the data for a specific category
    const handleClick = (category) => {
        // console.log(category)
        //make api call to get products that match clicked category
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
            //at end of url i need to add the category that gets clicked
            //the category that gets clicked needs to be stored in a state ??
            //how do i store it ??
        .then(res => {
            console.log(res.data) //this is the right data
            //what do i do with this data?
            //i want to see THESE products on homepage
            setProducts(res.data) //is this right?
        })
        .catch(err => {console.log(err)})

    }

    //this function needs to show all products when All is clicked
    const showAll = () => {
        //you need to make API call to get all products
        axios.get("https://fakestoreapi.com/products")
            .then(res => {
                // console.log(res.data)
                //store product data in state
                setProducts(res.data)
            })
            .catch(err => console.log(err))
    }

  return (
    <div className="categories-container">
        <p onClick={showAll}>All</p>
        {
            categories.map(item=><p onClick={() => handleClick(item)}>{item}</p>)
            //how do i display the data i have in the clickedCategory state?
        } 
    </div>
  )
}

export default Categories