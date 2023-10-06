import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button, Divider } from "@mui/material";
import CartItem from "../Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../store/order/ActionType";
import { useLocation } from "react-router-dom";

const OrderSummery = () => {
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [dispatch, orderId]);

  const handleNextNavigation = () => {};

  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard address={order.order?.shippingAddress} />
      </div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {order.order?.orderItems.map((item) => (
            <div id="item">
              <CartItem item={item} />
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
                <span> Price </span>
                <span>{order.order?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span> Items </span>
                <span> {order.order?.totalItem}</span>
              </div>

              <div className="flex justify-between pt-3  ">
                <span> Discount </span>
                <span className="text-green-600">
                  {" "}
                  -{order.order?.discount}{" "}
                </span>
              </div>

              <div className="flex justify-between pt-3">
                <span> Divilary Charges </span>
                <span className=" text-green-600"> free </span>
              </div>

              <div className="flex justify-between pt-3 text-black">
                <span> Total Amount </span>
                <span className="text-green-600">
                  {" "}
                  -{order.order?.totalDiscountedPrice}{" "}
                </span>
              </div>
              <div className="pt-3">
                <Button
                  type="submit"
                  className="text-xl bg-indigo-800 w-full pt-4 "
                  color="secondary"
                  variant="contained"
                  sx={{ px: "2rem", py: "0.5rem", width: "full" }}
                  onClick={handleNextNavigation}
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
export default OrderSummery;
