import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../store/Cart/ActionType";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const updateQtyValue = (num) => {
    const data = {
      data: { quantity: item.quantity + num },
      cartItemId: item?.id,
    };
    dispatch(updateCartItem(data));
  };
  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(item.id));
  };
  return (
    <div className="p-5 shadow-lg border rounded-lg ">
      <div className="flex item-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={item.product.imageUrl}
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="text-sm font-semibold"> {item.product.title}</p>
          <p className="font-semibold text-sm opacity-50">
            {" "}
            Size: s, Color: Yello{" "}
          </p>
          <p className="opacity-50 font-semibold">
            {" "}
            Seller: {item.product.brand}{" "}
          </p>

          <div className="flex iem-center space-x-5 pt-6">
            <p className="opacity-50 line-through font-semibold text-sm">
              {item.discountedPrice}
            </p>
            <p className="font-bold text-sm text-black"> {item.price} </p>
            <p className="font-medium text-sm text-green-700">
              {" "}
              {item.product.discountPercent}% off{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-6 pt-4 ">
        <div className="flex items-start gap-6 sapce-x-2">
          <IconButton
            onClick={() => updateQtyValue(-1)}
            disabled={item.quantity <= 1}
            color="primary"
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm ">
            <p className="text-lg font-semibold"> {item.quantity} </p>
          </span>
          <IconButton onClick={() => updateQtyValue(1)} color="primary">
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div className="">
          <Button onClick={handleRemoveCartItem}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
