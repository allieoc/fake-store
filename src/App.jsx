import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import Categories from './components/Categories/Categories'
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Contact from './pages/Contact/Contact';


function App() {
  

  return (
    <div className="app-container">
      <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/details/:productId' element={<ProductDetails />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
