import { Box, Button, Grid, TextField, TextareaAutosize } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { useDispatch } from "react-redux";
import { createOrder } from "../../../store/order/ActionType";
import { useNavigate } from "react-router-dom";

const DeliveryAddressForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("streetAddress"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zipCode"),
      mobile: data.get("mobile"),
    };
    const orderData = { address, navigate };
    dispatch(createOrder(orderData));
    console.log("order address is", orderData);
  };
  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          lg={5}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 5, bgcolor: "#4f46e5", color: "#ffffff" }}
              size="large"
              varient="contained"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shado-md p-5">
            <form onSubmit={handleChange}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First name"
                    fullWidth
                    required
                    id="firstName"
                    name="firstName"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last name"
                    fullWidth
                    required
                    id="lastName"
                    name="lastName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="address"
                    fullWidth
                    required
                    id="streetAddress"
                    name="streetAddress"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="city"
                    fullWidth
                    required
                    id="city"
                    name="city"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="state/Proviance/Region"
                    fullWidth
                    required
                    id="state"
                    name="state"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Zip Code"
                    fullWidth
                    required
                    id="zipCode"
                    name="zipCode"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Phone Number"
                    fullWidth
                    required
                    id="mobile"
                    name="mobile"
                  />
                </Grid>
                <Grid item xs={12} className="flex justify-start">
                  <button
                    type="submit"
                    sx={{
                      mt: 2,
                      width: "9rem",
                      bgcolor: "#4f46e5",
                    }}
                    size="large"
                    varient="contained"
                  >
                    Next
                  </button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
