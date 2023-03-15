import { Button, IconButton, Typography } from '@mui/material'
import { useContext, useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import styles from './itemcount.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContextProvider';
import { Navigate } from 'react-router-dom';


function ItemCount({ product, stock, initial }) {
    const [count, setCount] = useState(initial);
    const { cartList, addToCart, clear, removeItem } = useContext(CartContext);
    const navigate= useNavigate();
    return (
        <div className={styles.container}>
            <IconButton color="primary" aria-label="add items" onClick={() => count < stock && setCount(count + 1)}>
                <AddCircleIcon fontSize='large' />
            </IconButton>
            <Typography variant="h5" component="div">
                {count}
            </Typography>
            <IconButton color="primary" aria-label="remove items" onClick={() => count > 1 && setCount(count - 1)}>
                <RemoveCircleIcon fontSize='large' />
            </IconButton>
            <IconButton color="primary" aria-label="add to shopping cart">
                <Button variant="outlined" onClick={() => { addToCart(product,count); navigate('/Coder-React/cart');console.log("click")}}>Agregar al Carrito</Button>
            </IconButton>
        </div>
    )
}

export default ItemCount