import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import Categories from './components/Categories/Categories'
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Contact from './pages/Contact/Contact';
import CartContextProvider from './contexts/CartContext';
import Checkout from './pages/Checkout/Checkout';


function App() {
  

  return (
    <div className="app-container">
      <BrowserRouter>
      <CartContextProvider>
      <Header />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/details/:productId' element={<ProductDetails />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      
      <Footer />
      </CartContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
