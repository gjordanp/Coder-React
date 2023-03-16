import { IconButton } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import styles from './cart.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../contexts/CartContextProvider';
import ItemCount from '../ItemCount/ItemCount';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { height, textAlign } from '@mui/system';

function Cart() {
    const { cartList, addToCart, clear, removeItem } = useContext(CartContext);
    const [cartListChange, setcartListChange] = useState(cartList);
    const onChange = () => { setcartListChange(cartList) };
    useEffect(() => { setcartListChange(cartList) }, [cartList])

    return (
        <>
            <div style={{ height: "100vh" }} >
                <h2 className={styles.cartTitleContainer}>Carrito</h2>
                <div className={styles.cartcontainer}>
                    {cartList.length === 0 ?
                        <div className={styles.emptyCart}> 
                            <RemoveShoppingCartIcon fontSize='large' />
                            <h3> No hay productos en el carrito </h3>
                        </div>
                        :
                        cartListChange.map((item) =>
                            <div className={styles.cartcard} key={item.product.id}>
                                <img src={item.product.image} alt="img" width={50} style={{ objectFit: "contain" }} />
                                {/* <h3>{item.product.title}</h3> */}
                                <div style={{ width: "70%" }}>
                                    <h3>{item.product.title}</h3>
                                    <h2>{"$" + (item.product.price * item.quantity).toFixed(2)}</h2>
                                </div>
                                <ItemCount product={item.product} stock={5} initial={item.quantity} hideAddToCart={true} onChange={onChange} />
                                <IconButton aria-label="delete" onClick={() => removeItem(item.product.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </div>)}
                </div>
                <h2 className={styles.cartTotalContainer}>Subtotal: {"$" + cartList.reduce((acc, item) => acc + item.product.price * item.quantity, 0).toFixed(2)} </h2>
            </div>

        </>
    )
}

export default Cart