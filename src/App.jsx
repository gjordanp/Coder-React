import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/buttons/Button'
import NavBar from './components/navbar/Navbar'
import { ListH, ListV } from './components/lists/List'
import ItemListContainer from './components/containers/ItemListContainer'
import { Alert, AlertTitle, Snackbar } from '@mui/material'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/containers/ItemDetailContainer'


function App() {

  const [products, setProducts] = useState([])
  const getProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    setProducts(response.data)
  };
  const categories=products.map((product)=>product.category);
  useEffect(() => {
    getProducts(); console.log(products);
  }, [])
  
  //With Fetch
  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then(res => res.json())
  //     .then(data => setProducts(data))
  // }, [])


  return (
    //React Fragment
    <>
      <NavBar categories={categories} />
      <Routes>
        <Route path='/Coder-React' element={<ItemListContainer products={products} />} />
        {/* <Route path='/products' element={<ProductList products={products}/>}/> */}
        <Route path='/Coder-React/categories/:cat' element={<ItemListContainer products={products} />}/>
        <Route path='/Coder-React/item/:id' element={<ItemDetailContainer products={products} />}/>
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>

    </>
  )
}

export default App
