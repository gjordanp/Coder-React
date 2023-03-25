import db from '../../db/firebase-config'
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { createContext, useEffect, useState } from 'react'
export const CartContext = createContext();


export const CartContextProvider = ({ children }) => {
    //const [cartList, setCartList] = useState([]);
    const [cartFirebaseProducts, setCartFirebaseProducts] = useState([])
    const cartCollectionRef = collection(db, 'cart')

    useEffect(() => {
        fb_getCartItems();
    }, [])
    useEffect(() => {
        fb_getCartItems();
    }, [cartFirebaseProducts])

    //useEffect(() => {setCartList(cartFirebaseProducts);}, [cartFirebaseProducts])

    const addToCart = (product, qty) => {//implementa la funcionalidad para agregar un producto al carrito
        if (isInCart(product.id)) {
            //console.log(product.id)
            //console.log(isInCart(product.id))
            resetQty(product.id, qty)
        }
        else {

            //setCartList([...cartList, { "product": product, "quantity": qty }])
            //console.log(cartList);
            fb_addCartItem({ "product": product, "quantity": qty }, product.id);
            //console.log(cartFirebaseProducts);
        }
    }
    const clear = () => {	//implementa la funcionalidad para dejar el carrito vacío
        //setCartList([]);
        fb_deleteCart();
    }
    const removeItem = (id) => {	//implementa la funcionalidad para borrar un producto del carrito
        //setCartList(cartList.filter((obj) => obj.product.id !== id))
        fb_deleteCartItem(id);
    }
    const isInCart = (id) => {	//implementa la funcionalidad para verificar si un producto ya está en el carrito
        // console.log(cartList.length);
        // console.log(cartList.length === 0);
        return (cartFirebaseProducts.length === 0)?false:cartFirebaseProducts.some((obj) => obj.product.id === id)
    }

    const cartCount = () => {	//implementa la funcionalidad para contar la cantidad de productos en el carrito
        return cartFirebaseProducts.reduce((acc, obj) => acc + obj.quantity, 0)
    }

    const resetQty = (id, qty) => {	//implementa la funcionalidad para resetear la cantidad de un producto en el carrito
        //setCartList(cartList.map((obj) => obj.product.id === id ? { "product": obj.product, "quantity": qty } : obj));
        fb_updateCartItemQuantity(id, qty);
    }

    const fb_getCartItems = async () => {
        const cartCollection = await getDocs(cartCollectionRef)
        const cartItems = cartCollection.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        //console.log(cartItems)
        setCartFirebaseProducts(cartItems);
        //setCartList(cartFirebaseProducts);
    }

    const fb_deleteCartItem = async (id) => {
        await deleteDoc(doc(db, 'cart', id))
        fb_getCartItems();
    }

    const fb_deleteCart = async () => {
        cartFirebaseProducts.forEach(async (item) => {
            await deleteDoc(doc(db, 'cart', item.id))
        })
        fb_getCartItems();
    }

    const fb_addCartItem = async (item,id) => {
        const ref = doc(db, "cart", id);
        const docRef =await setDoc(ref, item);
        fb_getCartItems();
    }
    const fb_updateCartItemQuantity = async (id, qty) => {
        await updateDoc(doc(db, 'cart', id), { quantity: qty })
        fb_getCartItems();
    }



    return (
        <CartContext.Provider value={{cartFirebaseProducts, addToCart, clear, removeItem, isInCart, resetQty, cartCount, fb_getCartItems}}>
            {children}
        </CartContext.Provider>
    )
}
