'use client'

import { createContext,useEffect,useState } from "react";


export const CartContext = createContext({})

const CartProvider = ({children})=>{
    const [cart, setCart] = useState([])

    const addToCart = (id)=>{
        setCart([...cart,id])
        console.log(cart)
    }
    const removeFromCart = (id)=>{
        const newCart = cart.filter(item=>Number(item)!==Number(id))
        setCart([...newCart])
        console.log(newCart)
    }

    const value = {cart, addToCart, removeFromCart}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>

}

export default CartProvider


