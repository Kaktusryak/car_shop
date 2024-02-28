'use client'
import { CartContext } from "@/app/context/cartContext"
import { useContext , useState, useEffect} from "react"
import data from "@/public/data";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Cart(){
    const {cart,removeFromCart} = useContext(CartContext)
    const cartLength = cart.length
    console.log(cartLength)

    const cartItems = data.filter(item => cart.includes(item.id.toString()));

    const removeHandler = (e)=>{
        
        removeFromCart(e.target.value)
    }


    const submitOrder = ()=>{
        const info = cartItems.map(item=>{return item.model + " " + item.brand + " " + item.year + " " })
        console.log(info)
        alert(info.toString())
    }
   
    return (

        <div className="w-full flex flex-col items-center space-between">
            {cartLength ? (<button onClick={submitOrder} className="mt-4 p-4 bg-slate-700 border rounded-xl">Submit order</button>):(<div className="mt-4">Nothing in cart yet</div>)}
            <div className="my-4">Cars in your cart:</div>
            <ul>
                {cartItems.map(item => {
                    return (<li className=" w-96 flex justify-between bg-slate-700 p-4 my-4 border rounded-xl"  key={item.id}>{item.brand} {item.model} <br/>{item.year} <button value={item.id} onClick={removeHandler} className=" flex justify-center items-center h-8 mx-4 w-8 text-red-500 z-10 "> <FaRegTrashAlt  className="z-0 pointer-events-none"/>  </button></li>)
                })}

            </ul>


        </div>
    )
}