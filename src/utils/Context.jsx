import React, { useEffect, useState } from 'react'
import axios from "./axios";
import { createContext } from 'react';
export const productContext = createContext();


function Context({children}) {

    const [products, setProducts] = useState(null);

    const getProducts = async()=>{
        try{
            const {data} = await axios.get("/products");
            setProducts(data)
          
        }
        catch(err){
            console.log(err)
        }
   

    }

    console.log(products);

    
    useEffect(()=>{
        getProducts()
    }, [])

  return (
    <div>
        <productContext.Provider value={[products, setProducts]}>
        {children}
        </productContext.Provider>
    </div>
  )
}

export default Context