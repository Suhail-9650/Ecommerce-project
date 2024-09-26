import React, { useContext, useState } from "react";
import { productContext } from "./utils/Context";
import { nanoid } from "nanoid";

function Create() {
  const [products, setProducts] = useContext(productContext);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("each and every input must be atleast 4 character");
      return ;
    }

    let product = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };

    setProducts([...products, product]);
  };

  return (
    <div className="w-full">
      <form
        onSubmit={AddProductHandler}
        className="max-w-screen-lg p-10  mx-auto flex flex-col items-center"
      >
        <h1 className="text-2xl w-1/2  font-semibold ">Add new product</h1>
        <input
          onChange={(e) => setTitle(e.target.value)}
          className="mt-3 w-1/2 p-3 rounded-lg bg-zinc-200 outline-none text-xl"
          type="text"
          placeholder="title"
        />

        <input
          onChange={(e) => setImage(e.target.value)}
          className="mt-3 w-1/2 p-3 rounded-lg bg-zinc-200 outline-none text-xl"
          type="url"
          placeholder="image Link"
        />

        <div className="w-[1/2]   mt-3 flex justify-center gap-2 text-xl ">
          <input
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            placeholder="category"
            className=" w-[46%] outline-none bg-zinc-200 p-3 rounded-lg"
          />

          <input
            type="number"
            placeholder="price"
            onChange={(e) => setPrice(e.target.value)}
            className="w-[46%] p-3 outline-none bg-zinc-200  rounded-lg"
          />
        </div>

        <textarea
          onChange={(e) => setDescription(e.target.value)}
          rows="5"
          placeholder="description"
          className="bg-zinc-200 resize-none p-5 text-xl outline-none rounded-lg w-1/2 mt-2 "
        ></textarea>

        <div className="w-1/2">
          <button className="py-3 px-5 mt-5   border-blue-200 border rounded-md font-medium">
            Add new product
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
