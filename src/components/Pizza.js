import React, { useState } from 'react'
import image from "./pizzapic.jpg"
import Modal from 'react-bootstrap/Modal';

export default function Pizza({pizza}) {
    const [quantity,setQuantity] = useState(1);
    const [varient,setVarient] = useState("small");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div style={{margin:"52px"}} className="shadow-lg p-3 mb-5 bg-white rounded">
        <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img src={image} height={200} width={200} className="fluid" alt='Pepper Pizza'></img>
        </div>
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

        <Modal show={show}>
      <Modal.Header closeButton>
        <Modal.Title>{pizza.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <img src={image} height={280} width={280} className="fluid" alt='Pepper Pizza'></img>
      <p>{pizza.description}</p>
      </Modal.Body>

      <Modal.Footer>
        <button className='btn' onClick={handleClose}>Close</button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}
