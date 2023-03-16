import { createContext, useState } from 'react'
export const CartContext = createContext();


export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const addToCart = (product, qty) => {//implementa la funcionalidad para agregar un producto al carrito
        isInCart(product.id) ? resetQty(product.id, qty) :
        setCartList([...cartList, { "product": product, "quantity": qty }])
    }
    const clear = () => {	//implementa la funcionalidad para dejar el carrito vacío
        setCartList([])
    }
    const removeItem = (id) => {	//implementa la funcionalidad para borrar un producto del carrito
        setCartList(cartList.filter((obj) => obj.product.id !== id))
    }
    const isInCart = (id) => {	//implementa la funcionalidad para verificar si un producto ya está en el carrito
        return cartList.some((obj) => obj.product.id === id)
    }

    const resetQty = (id, qty) => {	//implementa la funcionalidad para resetear la cantidad de un producto en el carrito
        setCartList(cartList.map((obj) => obj.product.id === id ? { "product": obj.product, "quantity": qty } : obj));
    }

    return (
        <CartContext.Provider value={{ cartList, addToCart, clear, removeItem, isInCart, resetQty }}>
            {children}
        </CartContext.Provider>
    )
}
