import React, { useState } from 'react'
import image from "./pizzapic.jpg"

export default function Pizza({pizza}) {
    const [quantity,setQuantity] = useState(1);
    const [varient,setVarient] = useState("small");
  return (
    <div style={{margin:"52px"}} className="shadow-lg p-3 mb-5 bg-white rounded">
        <h1>{pizza.name}</h1>
        <img src={image} height={200} width={200} className="fluid" alt='Pepper Pizza'></img>
        <div className='flex-container'>
            <div className='w-100 m-1'>
                <p>Varients</p>
                <select className='form-select' value={varient} onChange = {(e)=>{setVarient(e.target.value)}}>
                    {pizza.varients.map(varient => {
                        return <option value={varient} >{varient}</option>
                    })}
                </select>
            </div>

            <div className='w-100 m-1'>
                <p>Quantity</p>
                <select className='form-select' value={quantity} onChange={(e) => {setQuantity(e.target.value)}} >
                    {[...Array(10).keys()].map((object,index)=>{
                        return <option value={index+1} >{index+1}</option>
                    })}
                </select>
            </div>
        </div>
        <div className='flex-container'>
            <div className='m-1 w-100'>
                <h1 className='mt-1' >Price: {pizza.prices[0][varient] * quantity} Rs/-</h1>
            </div>
            <div className='m-1 w-100'>
                    <button className='btn' >Add to Cart</button>
            </div>
        </div>
    </div>
  )
}
