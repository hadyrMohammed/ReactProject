import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
export default function ProdDetails({cart, setCart }) {
    const {state} = useLocation();
    const [qty , setQty] = useState(1);
    
    function increase(){
      setQty(qty+1);
    }
    function decrease(){
        if (qty == 1) return;
        setQty(qty-1);
    }
    function addToCart(){
       setCart(qty + cart);
    }
  return (
    <>
       <div className='container d-flex flex-column flex-md-row justify-content-center w-100 py-5 border gap-5 shadow'>
        <div className='text-center'>
          <img className='image img-fluid' src={state.image} alt={state.title} style={{ maxWidth: '300px', maxHeight: '300px', objectFit: 'contain' }} />
        </div>
        <div>
          <p className='text-muted'> {state.category} </p>
          <h5>{state.title}</h5>
          <p className='fw-bold text-danger p-4 fs-3'>${state.price}</p>

          <div className='d-flex gap-3 align-items-center'>
            <button className='btn btn-info' onClick={decrease}>-</button>
            <p className='fs-3 mb-0'>{qty}</p>
            <button className='btn btn-info' onClick={increase}>+</button>
          </div>

          <button className='btn btn-danger mt-5' onClick={addToCart}>Add to cart</button>
        </div>
      </div>

      <div className='container py-5 border w-100'>
        <p>{state.description}</p>
      </div>
    </>
  )
}
