import ActionAreaCard from '../Card/ActionAreaCard'
import SkeletonAreaCard from '../Card/SkeletonAreaCard'
import styles from './itemlistcontainer.module.css'
import { Link, useParams } from 'react-router-dom'
import db from '../../../db/firebase-config'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useState } from 'react'
import { useEffect } from 'react'


const ItemListContainer = ({products, loading}) => {

  const cardProps = { maxWidth: 345, height: 200, showRating: true, showPrice: true, showDescription: false, showActions: false, canHover: true }
  const { cat } = useParams();

  let filteredProducts = []

  // useEffect(() => {
  //   if (!products.map(e=>e.category).includes(cat)) {
  //     cat === undefined ? fb_getProductItems() : fb_getProductItemsByCategory();
  //     setLoading(false);
  //   }
  // }, [])

  // useEffect(() => {
  //   if (!products.map(e=>e.category).includes(cat)) {
  //     console.log(products.includes(cat))
  //     cat === undefined ? fb_getProductItems() : fb_getProductItemsByCategory();
  //     setLoading(false);
  //   }
  // }, [cat])


  //Funcion para obtener los productos de una categoria especifica en firebase
  const fb_getProductItemsByCategory = async () => {
    const q = query(collection(db, "items"), where("category", "==", cat));
    const itemsCollection = await getDocs(q)
    const items = itemsCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    setProducts(items)
    console.log("fetch category products")
  }

  //Si se accede a una categoria directamente desde la URL (productos=[]), se ejecuta la funcion fb_getProductItemsByCategory, si no, se filtra el array de productos por categoria
  cat != undefined ? filteredProducts = products.filter((product) => product.category === cat) : filteredProducts = products;

  const fakeproducts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <div className={styles.container}>
      {loading ?
        fakeproducts.map((product =>
          <SkeletonAreaCard key={product} cardProps={cardProps} />
        ))
        :
        filteredProducts.map((product =>
          <Link to={`/item/${product.id}`} key={product.id}>
            <ActionAreaCard key={product.id} product={product} cardProps={cardProps} />
          </Link>
        ))}
    </div>
  )
}

export default ItemListContainer