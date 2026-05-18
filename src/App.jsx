import { useState } from 'react'
import NavBar from './components/NavBar'
import ProductList from './components/ProductCard'
import SearchBar from './components/SearchBar'
import ProductForm from './components/ProductForm'

import './App.css'

function App() {
    

  return (
    <div>
      <NavBar/>
      <ProductForm/>
      <SearchBar/>
      <ProductList/>
    </div>
  )
}

export default App
