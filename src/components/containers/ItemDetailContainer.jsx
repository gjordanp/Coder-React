import React from 'react'
import { useParams } from 'react-router-dom'
import ActionAreaCard from '../Card/ActionAreaCard';
import styles from './itemdetailcontainer.module.css'

function ItemDetailContainer({ products, loading }) {

    const { id } = useParams();
    const product = products.find(product => product.id == id)
    const cardProps = { maxWidth: "100%", height: 300, showRating: true, showPrice: true, showDescription: true, showActions: true, canHover: false }
    const videoUrl = "https://www.youtube.com/embed/" + product.video.split("/").slice(-1);
    return (
        <div className={styles.container}>
            <ActionAreaCard key={product.id} product={product} cardProps={cardProps} loading={loading} />
            <iframe width="100%" height="600" src={videoUrl} title={product.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}

export default ItemDetailContainer