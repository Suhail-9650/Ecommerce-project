import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Details from "./Details";
import Create from "./Create";

function App() {
  const { search, pathname } = useLocation();

  return (
    <div className="h-screen w-full flex gap-2">
      {(pathname != "/" || search.length > 0) && (
        <Link
          className="text-blue-500 absolute top-20 left-20 border-[1px] border-sky-500 py-1 px-5 rounded-lg "
          to="/"
        >
          Home
        </Link>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/create" element={<Create/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
