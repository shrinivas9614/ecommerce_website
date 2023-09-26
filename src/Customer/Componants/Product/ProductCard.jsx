import React from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product/${5}`)}
      className="productCard w-[15rem] m-3 transition-all cursor-pointer "
    >
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top "
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold text-sm opacity-60"> {product.brand} </p>
          <p className=" text-gray-500">{product.title}</p>
          <div className="flex items-center space-x-2 ">
            <p className="font-semibold"> {product.discountedPrice} </p>
            <p className="line-through opacity-50 "> {product.price} </p>
            <p className="font-lg text-green-600 ">
              {" "}
              {product.discountPersent}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
