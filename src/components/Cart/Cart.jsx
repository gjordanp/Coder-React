import { Container, CssBaseline, IconButton } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import styles from './cart.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../contexts/CartContextProvider';
import ItemCount from '../ItemCount/ItemCount';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { height, textAlign } from '@mui/system';
import { red } from '@mui/material/colors';


function Cart() {
    const { cartList, addToCart, clear, removeItem } = useContext(CartContext);
    const [cartListChange, setcartListChange] = useState(cartList);
    const onChange = () => { setcartListChange(cartList) };
    useEffect(() => { setcartListChange(cartList) }, [cartList])


    return (
        <>
            <div className={styles.cartcontainer} >
                <div className={styles.cartTitleContainer}>Carrito</div>
                <div className={styles.cartlistcontainer}>
                    {cartList.length === 0 ?
                        <div className={styles.emptyCart}> 
                            <RemoveShoppingCartIcon fontSize='large' />
                            <h3> No hay productos en el carrito </h3>
                        </div>
                        :
                        cartListChange.map((item) =>
                            <div className={styles.cartcard} key={item.product.id}>
                                <img src={item.product.image} alt="img" width={70} style={{ objectFit: "contain" , margin: "0px 0px 0px 10px"}} />
                                {/* <h3>{item.product.title}</h3> */}
                                <div style={{ width: "70%" }}>
                                    <div>{item.product.title}</div>
                                    <div style={{ marginTop: "10px" }}><strong>{"$" + (item.product.price).toFixed(2)+"/un"}</strong></div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "end", padding: "8px", justifyItems: "center"}}>
                                <IconButton aria-label="delete" onClick={() => removeItem(item.product.id)} sx={{position: "relative"}}>
                                    <HighlightOffRoundedIcon sx={{ color: red[500] }} fontSize='medium'/>
                                </IconButton>
                                <ItemCount product={item.product} stock={5} initial={item.quantity} hideAddToCart={true} onChange={onChange} />
                                <div style={{ fontSize: "1.2rem", padding: 10}} ><strong>{"$" + (item.product.price * item.quantity).toFixed(2)}</strong></div>
                                </div>
                            </div>)}
                </div>
                <div className={styles.cartTotalContainer}>Subtotal: {"$" + cartList.reduce((acc, item) => acc + item.product.price * item.quantity, 0).toFixed(2)} </div>
            </div>
        </>
    )
}

export default Cart