import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <h1 className="font-semibold text-lg"> Order Address </h1>
      <div>
        <AddressCard />
      </div>
      <div>
        <OrderTracker activeStep={3} />
      </div>
      <Grid className="space-x-5 " container>
        {[1, 1, 1, 1, 1].map(() => (

          <div key="item">
            <Grid
              item
              container
              className="shadow-xl rounded-md p-5 border"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Grid item xs={6}>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/h/y/g/34-jeans-bt008-laheja-original-imagqqbsfgmdhcvn.jpeg?q=70"
                    className="w-[5rem] h-[ 5rem] object-cover object-top "
                    alt=""
                  />
                  <div className="space-y-2 ml-5">
                    <p className="font-semibold"> Mens Sleak Jins </p>
                    <p className="opacity-50 font-semibold text-xs space-x-5">
                      <span> Size:M </span>
                      <span> Color:Black </span>{" "}
                    </p>
                    <p className=""> Sailer: ZARA</p>
                    <p className=""> 999</p>
                  </div>
                </div>
              </Grid>
              <Grid item>
                <Box sx={{ color: deepPurple[500] }}>
                  <StarOutlineIcon
                    sx={{ fontSize: "3rem" }}
                    className="px-2 text-5x1"
                  />
                  <span> Rate And Review Product </span>
                </Box>
              </Grid>
            </Grid>
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
