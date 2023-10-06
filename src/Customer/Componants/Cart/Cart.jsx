import React, { useDeferredValue, useEffect } from "react";
import CartItem from "./CartItem";
import { Button, Divider } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart, updateCartItem } from "../../../store/Cart/ActionType";

const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {cart} = useSelector(store=>store)
  const handleCheckoutNavigation = () => {
    navigate("/checkout?step=2")
  }


  useEffect(()=>{
    dispatch(getCart())
  },[cart.updateCartItem, cart.deleteCartItem])


  return (
    
      <div>
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
          <div className="col-span-2">
            {cart.cart?.cartItems.map((item) => (
              <div key={item.id}>

                <CartItem item={item}/>
              </div>
            ))}
          </div>

          <div className="px-5 sticky top-0 h-100vh mt-5 lg:mt-0">
            <div className="border">
              <p className="uppercase font-bold text-lg opacity-4 pb-4">
                Price Ditails{" "}
              </p>
              <Divider />
              <div className="space-y-3 font-bold">
                <div className="flex justify-between pt-3 text-black">
                  <span> Items </span>
                  <span> {cart.cart?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span> Price </span>
                  <span> {cart.cart?.totalItem}</span>
                </div>

                <div className="flex justify-between pt-3  ">
                  <span> Discount </span>
                  <span className="text-green-600"> -{cart.cart?.discount} </span>
                </div>

                <div className="flex justify-between pt-3">
                  <span> Divilary Charges </span>
                  <span className=" text-green-600"> free </span>
                </div>

                <div className="flex justify-between pt-3 text-black">
                  <span> Total Amount </span>
                  <span> {cart.cart?.totalDiscountedPrice} </span>
                </div>
                <div className="pt-3">
                  <Button
                    type="submit"
                    className="text-xl bg-indigo-800 w-full pt-4 "
                    color="secondary"
                    variant="contained"
                    sx={{ px: "2rem", py: "0.5rem", width: "full" }}
                    onClick={handleCheckoutNavigation}
                  >
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Cart;
