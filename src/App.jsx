import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/navbar/Navbar'
import ItemListContainer from './components/containers/ItemListContainer'
import { Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/containers/ItemDetailContainer'
import { CartContextProvider } from './contexts/CartContextProvider'
import Cart from './components/Cart/Cart'
import { collection, getDocs } from 'firebase/firestore'
import db from '../db/firebase-config'


function App() {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  const itemsCollectionRef = collection(db, 'items')
  // const getProducts = async () => {
  //   const response = await axios.get('https://fakestoreapi.com/products');
  //   setProducts(response.data);
  //   setLoading(false);
  // };
  const getProducts = async () => {
    const itemsCollection = await getDocs(itemsCollectionRef)
    console.log(itemsCollection)
    const items = itemsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    setProducts(items)
    setLoading(false);
  }
  const categories = products.map((product) => product.category);
  useEffect(() => {
    getProducts();
  }, [])

  //With Fetch
  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then(res => res.json())
  //     .then(data => setProducts(data))
  // }, [])


  return (
    //React Fragment
      <CartContextProvider children={
        <>
        <NavBar categories={categories} />
        <Routes>
          <Route path='/Coder-React' element={<ItemListContainer products={products} loading={loading} />} />
          {/* <Route path='/products' element={<ProductList products={products}/>}/> */}
          <Route path='/Coder-React/categories/:cat' element={<ItemListContainer products={products} />} />
          <Route path='/Coder-React/item/:id' element={<ItemDetailContainer products={products} />} />
          <Route path='/Coder-React/cart' element={<Cart/>} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
        </>
      } />
  )
}

export default App
