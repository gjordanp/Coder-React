import { Button, IconButton, Typography } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import styles from './itemcount.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContextProvider';
import { Navigate } from 'react-router-dom';


function ItemCount({ product, stock, initial, hideAddToCart, onChange }) {
    const [count, setCount] = useState(initial);
    const { cartList, addToCart, clear, removeItem, isInCart, resetQty } = useContext(CartContext);
    const navigate = useNavigate();
    const handleClickAdd = () => {
        console.log("Count: " + count);
        count < stock && setCount(count + 1);
        console.log("Count: " + count);
        isInCart(product.id) && resetQty(product.id, count);
        console.log(cartList)
    };
    const handleClickRemove = () => {
        console.log("Count: " + count);
        count > 1 && setCount(count - 1);
        console.log("Count: " + count);
        isInCart(product.id) && resetQty(product.id, count);
        console.log(cartList)
    };

    useEffect(() => { setCount(count) }, [count])

    return (
        <div className={styles.container}>
            <IconButton color="primary" aria-label="add items" onClick={handleClickAdd}>
                <AddCircleIcon fontSize='large' />
            </IconButton>
            <Typography variant="h5" component="div">
                {count}
            </Typography>
            <IconButton color="primary" aria-label="remove items" onClick={handleClickRemove}>
                <RemoveCircleIcon fontSize='large' />
            </IconButton>
            {!hideAddToCart &&
                <Button variant="outlined" onClick={() => { addToCart(product, count); navigate('/Coder-React/cart'); console.log("click") }}>Agregar al Carrito</Button>
            }

        </div>
    )
}

export default ItemCount