import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-lg ">
      <div className="flex item-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="text-sm font-semibold"> Mens Kurta </p>
          <p className="font-semibold text-sm opacity-50">
            {" "}
            Size: s, Color: Yello{" "}
          </p>
          <p className="opacity-50 font-semibold"> Seller: Zara </p>

          <div className="flex iem-center space-x-5 pt-6">
            <p className="opacity-50 line-through font-semibold text-sm">
              {" "}
              999{" "}
            </p>
            <p className="font-bold text-sm text-black"> 499 </p>
            <p className="font-medium text-sm text-green-700"> 50% off </p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-6 pt-4 ">
        <div className="flex items-start gap-6 sapce-x-2">
          <IconButton color="primary">
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm ">
            <p className="text-lg font-semibold"> 1 </p>
          </span>
          <IconButton color="primary">
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div className="">
          <Button>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
