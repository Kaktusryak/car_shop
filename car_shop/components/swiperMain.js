// import Swiper from 'swiper';
// 'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router'
import 'swiper/css';


export default function SwiperMain({images}){
   


    const slides = images.map((item)=>{
        return (<SwiperSlide   key={item.id} className='border rounded-xl border-1 '><img className='border rounded-xl border-0 ' src={`./images/swiperMainImages/${item.name}`}/></SwiperSlide>)
    })

    return(
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            
        >
            {slides}
            
     
        </Swiper>
    )
}