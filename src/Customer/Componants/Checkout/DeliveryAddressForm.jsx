import { Box, Button, Grid, TextField, TextareaAutosize } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";

const DeliveryAddressForm = () => {
  const handleChange = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      address: data.get("address"),
      city: data.get("city"),
      State: data.get("state"),
      postalCode: data.get("postalCode"),
      phoneNumber: data.get("phoneNumber"),
    }
    console.log("address", address);
  };
  return (
    <div>
      <Grid container spacing={4}>
        <Grid
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
                    autoComp1ete=" given-name "
                    Name="firstName"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last name"
                    fullWidth
                    required
                    id="lastName"
                    name="lastName"
                    autoComp1ete=" given-name "
                    Name="lastName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="address"
                    fullWidth
                    required
                    id="address"
                    name="address"
                    autoComp1ete=" given-address "
                    Name="address"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="City"
                    fullWidth
                    required
                    id="city"
                    name="city"
                    autoComp1ete=" given-City "
                    Name="City"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="State/Proviance/Region"
                    fullWidth
                    required
                    id="state"
                    name="state"
                    autoComp1ete=" given-state "
                    Name="state"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="postalCode"
                    fullWidth
                    required
                    id="postalCode"
                    name="postalCode"
                    autoComp1ete=" given-postalCode "
                    Name="PostalCode"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Phone Number"
                    fullWidth
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    autoComp1ete=" given-phoneNumber "
                    Name="phoneNumber"
                  />
                </Grid>
                <Grid item xs={12} className="flex justify-start">
                  <Button
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
                  </Button>
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
