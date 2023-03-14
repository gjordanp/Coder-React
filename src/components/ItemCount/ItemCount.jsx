import { Button, IconButton, Typography } from '@mui/material'
import { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import styles from './itemcount.module.css';
import { Link } from 'react-router-dom';



function ItemCount({ stock, initial }) {
    const [count, setCount] = useState(initial);

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
            <Link to="/Coder-React/cart">
                <IconButton color="primary" aria-label="add to shopping cart">
                    <Button variant="outlined">Agregar al Carrito</Button>
                </IconButton>
            </Link>
        </div>
    )
}

export default ItemCount