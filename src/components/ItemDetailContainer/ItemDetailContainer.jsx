import { doc, getDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ActionAreaCard from '../Card/ActionAreaCard';
import styles from './itemdetailcontainer.module.css'
import db from '../../../db/firebase-config';

function ItemDetailContainer({ products }) {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [loadingMsg, setLoadingMsg] = useState("Loading");
    let product = products.find(product => product.id == id);
    //console.log(product)
    
    const fb_getProductItem = async (id) => {
        const docRef = doc(db, 'items', id)
        const docSnap = await getDoc(docRef)
        product = { id: docSnap.id, ...docSnap.data()};
        console.log("fetch product by id")
        setLoading(false);
        setLoadingMsg("404 Producto no encontrado")
    }

    //Si array de productos esta vacio, entonces ejecuta la funcion fb_getProductItem, esto cuando el usuario ingresa el item directo en la url
    product?? fb_getProductItem(id)
    

    const cardProps = { maxWidth: "100%", height: 300, showRating: true, showPrice: true, showDescription: true, showActions: true, canHover: false }
    const videoUrl = (product!= undefined) ? "https://www.youtube.com/embed/" + product.video.split("/").slice(-1) : "";
    {
        if (product === undefined) {//si el producto no existe, muestra un mensaje de error
            return (
                <div className={styles.container}>
                    <h2 style={{ marginLeft: "auto", marginRight:"auto" }}>{loadingMsg}</h2>
                </div>)
        }
        else {//si el producto existe, muestra el detalle del producto
            return (
                <div className={styles.container}>
                    <ActionAreaCard key={product.id} product={product} cardProps={cardProps} loading={loading} />
                    <iframe width="100%" height="600" src={videoUrl} title={product.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            )
        }
    }
}

export default ItemDetailContainer