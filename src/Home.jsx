import React, { useContext, useEffect, useState } from "react";
import {Link, useLocation} from "react-router-dom"
import Navbar from "./Navbar";
import { productContext } from "./utils/Context";
import Loading from "./Loading";
import axios from "./utils/axios";

function Home() {
  
 const [products] =  useContext(productContext)


 
 const {search} = useLocation();
 const category = decodeURIComponent(search.split("=")[1]);

 const [filterProducts, setFilterProducts] = useState(null);
 
 const getProducts =  async ()=>{
  try{
    const {data} =await axios.get(`/products/category/${category}`);
    setFilterProducts(data);
   
  }
  catch(err){
    console.log(err);
  }
 }
 
 
 useEffect(()=>{
  if(!filterProducts || category == "undefined") setFilterProducts(products);
  if(category != "undefined" ) getProducts()
 }, [category, products])

  return ( products ?(
 
  <>
  
  <Navbar/>

    <div className="h-full flex-1   overflow-hidden overflow-y-auto">
      <div className="cards flex flex-wrap">
     
        {filterProducts ? filterProducts.map((el, index) => (
              <Link key={index} to={`/details/${el.id}`}>      
        <div className="card w-[12rem]  rounded-lg bg-stone-50 border-[1px] shadow m-2 mt-5 p-3">
          <div className="  rounded-lg p-2 h-[11rem] overflow-hidden hover:scale-125">
            <img
              className=" w-full h-full object-contain object-center bg-center"
              src={el.image}
              alt=""
            />
          </div>
          <p className="mt-3 py-2 text-center text-base h-8   w-full overflow-hidden hover:text-blue-500">
            {el.title}
          </p>
        </div>
        </Link> 
        )) : <Loading/>}
        
       
      </div>
    </div>
    </>
  ) : <Loading/>
   
  );
}

export default Home;
