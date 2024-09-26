import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { productContext } from "./utils/Context";

function Navbar() {
  const [products] = useContext(productContext);

  let category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);

  category = [...new Set(category)];
  

  return (
    <div className="h-full w-[16rem] border-r-[1px] border-zinc-200 flex flex-col items-center pt-5">
      <Link to="/create"
        className="py-3 px-5 mb-10 border-blue-200 border rounded-md font-medium"
        
      >
        Add new product
      </Link>
      <hr className="w-[80%] mt-3" />
      <h1 className=" text-2xl mt-3 w-[80%] font-regular">Category filter</h1>
      <div className="w-[80%]">
        {category.map((cat, idx) => (
          <Link key={idx}
            to={`/?category=${cat}`}
            className=" flex gap-3 items-center font-medium mt-2"
          >
            {" "}
            <span className="w-[15px] h-[15px] rounded-full bg-sky-500 "></span>
                {cat}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
