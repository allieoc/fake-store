import { useState, createContext, useEffect } from 'react'

//create this context "thing"

export const CartContext = createContext()

export default function CartContextProvider(props){

    //create my global state to hold favorite characters
    const [cart, setCart] = useState([])


    /*
    //set up useEffect to run when component loads to check local storage
    useEffect(
    ()=>{
        //get the value from localStorage
        const storedFavorites = localStorage.getItem('favoritesList')

        //check if something was there
        if (storedFavorites){
            //use this value for the state
            setFavorites(JSON.parse(storedFavorites))
        }
    }, []
    )
    

    //save favorites anytime it changes
    useEffect(
        () => {
            //store the value in localStorage
            localStorage.setItem('favoritesList', JSON.stringify(favorites))
        }, [favorites] //runs whenever the state changes
    )
    */
  

    //create a function to add a character to state
    const addProduct = (productToAdd) =>{
        //console.log('adding', productToAdd)
        //need to add productToAdd to favorites
        //create new array with old stuff plus this
        let newCart = [...cart, productToAdd]
        //save this to state
        setCart(newCart)
    }
    
    

    //create a function to remove a character
    const removeProduct = (productId) =>{
        //console.log('removing', productId)
        //remove the character with this id
        //keep all the ones that are NOT this id
        let newCart = cart.filter(item=> item.id != productId)
        //reset our state to this
        setCart(newCart)

    }
    

    //anything we need global access to needs to be added to value
    return(
        <CartContext.Provider value={{addProduct, cart, removeProduct}} >
            {props.children}
        </CartContext.Provider>
    )
}