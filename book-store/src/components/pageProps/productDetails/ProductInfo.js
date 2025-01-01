import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

const ProductInfo = ({ productInfo  }) => {
  const dispatch = useDispatch();  

  const productName =  productInfo.volumeInfo?.title ?? productInfo.productName;
  const imge = productInfo.volumeInfo?.imageLinks?.thumbnail ?? productInfo.img;
  const des = productInfo.volumeInfo?.description ?? productInfo.des;
  const id = productInfo.id;
  const badge = productInfo.badge;
  const price = productInfo.price ?? 100;
  const publisher = productInfo.volumeInfo?.publisher ?? productInfo.publisher;
  const categories = "Novels, Romance, Thriller, Mystery & Suspense, Science Fiction & Fantasy";


  const handleAddToCart = () => {
    dispatch(
      addToCart({
        _id: id,
        name: productName,
        quantity: 1,
        image: imge,
        badge,
        price,
        publisher,
      })
    );
  };

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productName }</h2>
      <p className="text-xl font-semibold">Rs. {price || "0.00"}</p>
      <p className="text-base text-gray-600">{des || "No description available."}</p>
      <p className="text-sm">Be the first to leave a review.</p>
      <p className="font-medium text-lg">
        <span className="font-normal">Publisher: </span>
        {publisher || "Unknown"}
      </p>
      <button
        onClick={handleAddToCart}
        className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
      >
        Add to Cart
      </button>
      <p className="font-normal text-sm">
        <span className="text-base font-medium">Categories:</span> {categories}
      </p>
    </div>
  );
};

export default ProductInfo;
