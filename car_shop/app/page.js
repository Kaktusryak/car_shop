'use client'
import SwiperMain from "@/components/swiperMain";
import CartProvider from "./context/cartContext";



export default function Home() {
  const swiperMainImages = [

    {
      name:'AM5.png',
      id:3
    },
    {
      name:'daihatsu1.png',
      id:4
    },
    {
      name:'F19.png',
      id:2
    },
    {
      name:'LuAZ 3.png',
      id:5
    },
    {
      name:'ML300 1.png',
      id:9
    }

    
  ]


  return (

    
      <main className="flex min-h-screen flex-col items-center  p-24">
        
        
        <div className="w-full">
          <SwiperMain images={swiperMainImages} />
        </div>
        <p className="mt-8">This project was created not to be fancy and beautiful but to practise in creating sites like this and it is what it is.<br/> Created using JS, React, Next.js, Tailwind, React-icons and Swiper</p>

      </main>
    
    
  );
}
