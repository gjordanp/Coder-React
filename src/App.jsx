import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContextProvider } from './contexts/CartContextProvider'
import Cart from './components/Cart/Cart'
import { collection, getDocs } from 'firebase/firestore'
import db from '../db/firebase-config'



function App() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fb_getProductItems()
    setLoading(false);
  }, [])

  //funcion para obtener todos los productos de firebase
  const fb_getProductItems = async () => {
    const itemsCollectionRef = collection(db, 'items')
    const itemsCollection = await getDocs(itemsCollectionRef)
    //console.log(itemsCollection)
    const items = itemsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    setProducts(items)
    console.log("fetch products")
  }

  return (
    //React Fragment
    <CartContextProvider children={
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer products={products} loading={loading} />} />
          <Route path='/categories/:cat' element={<ItemListContainer products={products} loading={loading} />} />
          <Route path='/item/:id' element={<ItemDetailContainer products={products} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </>
    } />
  )
}

export default App
