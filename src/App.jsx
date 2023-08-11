import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import Categories from './components/Categories/Categories'


function App() {
  

  return (
    <div className="app-container">
      <Header />
      <Categories />
      <Homepage />
      <Footer />
    </div>
  )
}

export default App
