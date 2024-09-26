import axios from './utils/axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import {Link, useParams} from "react-router-dom"
import Loading from './Loading';


function Details() {

  const [product, setProduct] =useState(null);

 const {id} = useParams();

  const getSingleProduct = async ()=>{
    try{

      const {data} = await axios.get(`/products/${id}`);
      setProduct(data);
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    getSingleProduct()
  }, [])
 

  return (  product ?
    <div className='w-full  m-auto '>
        <div className='max-w-screen-lg py-10  mx-auto flex items-center justify-center gap-10 '>
           <div className='w-[20rem]  p-5 h-[25rem]'>
            <img className='w-full h-full object-contain bg-center'  src={product.image} alt="" />
           </div>

        <div className="content 500 w-[40%] p-5">
         <h1 className='title text-3xl font-regular leading-none tracking-tight'>{product.title}</h1>
         <p className=' font-light text-zinc-500 mt-3'>{product.category}</p>
         <h2 className='mt-3'>{product.price}</h2>
         <p className='font-md font-medium '>{product.description}</p>
        <div className='btns mt-4 flex gap-5'>
        <Link className='px-5 py-3 text-blue-400 border-[2px] rounded-md w-[30%] text-center text-xl' href="">Edit</Link>
        <Link  className='px-5 py-3 text-red-500 border-[2px] rounded-md w-[30%] text-center text-xl' href="">Delete</Link>
        </div>

        </div>

        </div>
    </div>
    : <Loading/>
  )
}

export default Details