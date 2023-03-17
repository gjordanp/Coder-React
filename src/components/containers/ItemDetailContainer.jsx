import React from 'react'
import { useParams } from 'react-router-dom'
import ActionAreaCard from '../Card/ActionAreaCard';
import styles from './itemdetailcontainer.module.css'

function ItemDetailContainer({ products, loading }) {
    
    const { id } = useParams();
    const product = products.find(product => product.id == id)
    const cardProps = { maxWidth: "100%", height: 300, showRating: true, showPrice: true, showDescription: true, showActions: true }
    return (
        <div className={styles.container}>
            <ActionAreaCard key={product.id} product={product} cardProps={cardProps} loading={loading}/>
        </div>
    )
}

export default ItemDetailContainer