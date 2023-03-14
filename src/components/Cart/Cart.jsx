import { IconButton } from '@mui/material'
import React from 'react'
import styles from './cart.module.css'
import DeleteIcon from '@mui/icons-material/Delete';

function Cart({ cartProducts }) {
    return (
        <div className={styles.cartcontainer}>
            {cartProducts.map((product) =>
                <div className={styles.cartcard}>
                    <img src={product.img} alt="" width="20px" />
                    <h3>{product.title}</h3>
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </div>)}
        </div>
    )
}

export default Cart