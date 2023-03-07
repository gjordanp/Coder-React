import React from 'react'
import { useParams } from 'react-router-dom'
import ActionAreaCard from '../Card/ActionAreaCard';
import styles from './itemdetailcontainer.module.css'

function ItemDetailContainer({ products }) {
    const { id } = useParams();
    const product = products.find(product => product.id == id)
    const cardProps = { maxWidth: "80vw", height: 350, showRating: true, showPrice: true, showDescription: true }
    return (
        <div className={styles.container}>
            <ActionAreaCard key={product.id} product={product} cardProps={cardProps}/>
        </div>
    )
}

export default ItemDetailContainer