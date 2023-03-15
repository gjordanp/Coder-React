import { createContext, useState } from 'react'
export const CartContext = createContext();


export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const addToCart = (product, qty) => { 
        console.log("producto añadido") //implementa la funcionalidad para agregar un producto al carrito
        setCartList([...cartList, { "product":product, "quantity":qty }])
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

    return (
        <CartContext.Provider value={{ cartList, addToCart, clear, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}
