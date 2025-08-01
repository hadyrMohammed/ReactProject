import React from 'react'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
export default function Home() {
  let [productsArr , setPeoducts] = useState([]);
  async function getProds() {
    let res = await axios.get("https://fakestoreapi.com/products");
    setPeoducts(res.data);
    // console.log(res.data);
  }

  useEffect ( () =>{
    getProds();
  } ,[])

  return (
    <>
      <div className='container my-5'>
        <div className='row'>
          {productsArr.map((product) => <Item key = {product.id} products = {product}/>)}
        </div>
      </div>
    </>
  )
}

function Item({products}){
  let [like , setLike] = useState(false);
  function Heart(){
    setLike();
  }

  return(
    <>
    <div className='col-md-4 mb-4'>
          <div className='card h-100 position-relative shadow' >
            <Link to = {`/product/${products.id}`} state={products}>
              <img className='card-img-top p-3 image ' src= {products.image} alt={products.title}style={{ maxHeight: '250px', objectFit: 'contain' }} />
            </Link>
           {
            !like ? 
             <CiHeart className = 'heart' 
              onClick={() => setLike(!like) }
             /> : 
             <FaHeart  className='heart like'
             onClick={() => setLike(!like) }
             />

           }
           <div className='card-body d-flex flex-column'>
            <h5 className='card-title'> {products.title}</h5>
            <p className='fw-bold card-text'> ${products.price}</p>
            <p className='text-muted'>{products.category}</p>
            
           </div>
          </div>
    </div>
  </>
  )
}