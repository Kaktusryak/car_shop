'use client'
import { CartContext } from "@/app/context/cartContext"
import { useContext , useState, useEffect} from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import data from "@/public/data";
import 'swiper/css';
import Image from 'next/image'




export default function Vehicle({params}){
    const {id} = params

    const {cart,addToCart} = useContext(CartContext)

    let isInCart = false

    for(let i of cart){
        if(id===i){
        isInCart = true
        }
    }

    
    const handleAddToCart = ()=>{
        
        addToCart(id)
        
    }
    const images = [1,2,3]

    const vehicle = data.filter(item => item.id.toString()===id);
    
    const slides = images.map((item)=>{
        
        return (<SwiperSlide   key={item} className=' rounded-xl border-1 h-fit w-fit z-10'><img className='border rounded-xl border-0  h-fit w-fit z-0' src={`../images/showcase/${id}/${item}.png`} alt={'car image'}/></SwiperSlide>)
    })

    return(
        <div className="px-48 flex mt-7">
            
           
            <div className="w-3/5 border h-96 border-gray-50 border-solid  rounded-3xl mr-12 p-4 flex space-between">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    

                >
                    {slides}


                </Swiper>
            </div>
            <div className="w-2/5 border h-96 border-gray-50 border-solid  rounded-3xl  p-4 flex flex-col items-start justify-between">
                <div>
                    <ul>
                        <li>Brand: {vehicle[0].brand} </li>
                        <li>Model: {vehicle[0].model} </li>
                        <li>Year of production: {vehicle[0].year}</li>
                        <li>Is used: {vehicle[0].used ? (<span>Used</span>):(<span>Not used</span>)}</li>
                        <li>Colour: {vehicle[0].color}</li>
                        <li>Doors: {vehicle[0].doors}</li>
                    </ul>

                </div>
                {isInCart ? (<div className="w-full flex justify-around">Already in cart</div>) : (<button className=" w-full bg-slate-700 py-4 rounded-3xl" onClick={handleAddToCart}>Add to cart</button>)}
                
            </div>

        </div>

    )
}