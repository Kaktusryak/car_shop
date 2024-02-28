'use client'
import CarList from "@/components/carList";
import Filters from "@/components/filters";
import data from "@/public/data";
import { useState } from "react";




export default function Showcase(){

    

    const [filteredData,setFilteredData]= useState(data)
    const onUsedChange = (query)=>{
        if(query){
            setFilteredData(data.filter((item)=>item.used.toString() == query))
            console.log(query)
            
        }else{
            setFilteredData(data)
        }
        
    }
    const onBrandChange = (query)=>{
        if(query){
            
            setFilteredData(data.filter((item)=>item.brand.toLowerCase().includes(query.trim().toLowerCase())))
            console.log(query)
            console.log(filteredData)
        }else{
            setFilteredData(data)
        }
        
    }
    const onModelChange = (query)=>{
        if(query){
            setFilteredData(data.filter((item)=>item.model.toLowerCase().includes(query.trim().toLowerCase())))
            console.log(query)
        }else{
            setFilteredData(data)
        }
        
    }


    return (

        <div>
            <Filters onUsedChange={onUsedChange} onBrandChange={onBrandChange} onModelChange={onModelChange}/>
            <div className="text-center my-6">Here is currently available cars:</div>
            <CarList data={filteredData}/>
            
        </div>
    )
}