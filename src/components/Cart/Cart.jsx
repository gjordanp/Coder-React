import { IconButton } from '@mui/material'
import React, { useContext } from 'react'
import styles from './cart.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../contexts/CartContextProvider';

function Cart() 
{
    const { cartList, addToCart, clear, removeItem } = useContext(CartContext);
    return (
        
        <div className={styles.cartcontainer}>
            {cartList.map((item) =>
                <div className={styles.cartcard}>
                    <img src={item.product.image} alt="img" width={50} />
                    {/* <h3>{item.product.title}</h3> */}
                    <h3>{"Cantidad: "+item.quantity}</h3>
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </div>)}
        </div>
    )
}

export default Cart