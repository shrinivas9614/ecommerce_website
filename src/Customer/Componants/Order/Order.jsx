import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "./OrderCard";

const Order = () => {
  const orderStatus = [
    { label: "On The Way", value: "On_the_Way" },
    { label: "Delivered", value: "delivered" },
    { label: "Canceled", value: "canceled" },
    { label: "Returned", value: "returned" },
  ];

  return (
    <div className="px:5 lg:px-20">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className=" h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className=" font-bold text-lg">Filter</h1>
            <div className=" space-y-4 mt-10">
              <h1 className="font-semibold">ORDER STATUS</h1>

              {orderStatus.map((options) => (
                <div key={options.value}>
                  <input
                    type="checkbox"
                    value={options.value}
                    id={options.value}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor={options.value}
                    className="text-sm ml-3 text-gray-600"
                  >
                    {options.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={9}>
          {[1, 1, 1, 1, 1].map(() => (
            <div key="item">

              <OrderCard />
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
