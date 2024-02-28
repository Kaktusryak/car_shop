'use client'
import { useState } from "react"



export default function Filters({onUsedChange, onBrandChange, onModelChange}){

    const [checked, setChecked] = useState('')
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')

    const handleChange = (event)=>{
        setChecked(event.target.value)
        onUsedChange(event.target.value)
    }
    const handleBrandChange = (event)=>{
        setBrand(event.target.value)
        onBrandChange(event.target.value)
    }
    const handleModelChange = (event)=>{
        setModel(event.target.value)
        onModelChange(event.target.value) 
    }
    
    return(
        <div className="border mx-32 mt-4 rounded-xl flex flex-col justify-center items-center">
            <form className="w-full flex justify-between px-64  my-7">
                <label><input type="text" className="text-black" name="brand" value={brand} onChange={handleBrandChange}/>  Brand</label>
                <label><input type="text" className="text-black" name="model" value={model} onChange={handleModelChange}/>  Model</label>
            </form>
            <br className="border-2 w-full border-inherit"/>
            <form className="w-1/5 flex justify-between   my-7">
                <div className="flex ">
                    <input  type="radio" name="used" checked={checked===''}  value=""  onChange={handleChange} /> <p>Any</p>
                </div>
                <div className="flex">
                    <input type="radio" name="used" checked={checked==='true'} value="true" onChange={handleChange}/>  <p>Used</p>
                </div>
                <div className="flex">
                    <input type="radio" name="used"  checked={checked==='false'} value="false" onChange={handleChange}/> <p>New</p> 
                </div> 
            </form>
        </div>
        
    )
}