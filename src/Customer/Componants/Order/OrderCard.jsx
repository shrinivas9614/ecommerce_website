import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";
const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/account/order/${2}`)}
      className="p-5 shadow-lg hover:shadow-2xl hover:border"
    >
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] ml-5  h-[5rem] object-cover object-top"
              src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/h/y/g/34-jeans-bt008-laheja-original-imagqqbsfgmdhcvn.jpeg?q=70"
              alt=""
            />
            <div className=" ml-5 space-y-2">
              <p className="font-semibold text-lg"> mens sleak jins </p>
              <p className="opacity-50 font-semibold text-xs "> Size:M</p>
              <p className="font-semibold text-xs opacity-50"> Color:Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>999</p>
        </Grid>

        <Grid item xs={4}>
          {true && (
            <>
              <p className="space-x-2">
                <AdjustIcon
                  color="success"
                  sx={{ width: "20px", height: "20px" }}
                />
                <span>Delivered on April 1</span>{" "}
              </p>
              <p className="text-xs "> Your Item is Delivered</p>
            </>
          )}
          {false && (
            <>
              <p> Expect your item to be delivered on April 1</p>
            </>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
