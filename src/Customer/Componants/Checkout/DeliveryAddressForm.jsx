import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";

const DeliveryAddressForm = () => {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button
              sx={{ mt: 5, bgcolor: "#cc55e0", color: "#ffffff" }}
              size="large"
              varient="contained"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shado-md p-5">
            <form>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  
                  <TextField
                  label="First name"
                    fullWidth
                    required
                    id="firstName"
                    name="firstName"
                    autoComp1ete=" given- name "
                    Name="Shrinibas"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  
                  <TextField
                  label="First name"
                    fullWidth
                    required
                    id="firstName"
                    name="firstName"
                    autoComp1ete=" given- name "
                    Name="Shrinibas"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  
                  <TextField
                  label="First name"
                    fullWidth
                    required
                    id="firstName"
                    name="firstName"
                    autoComp1ete=" given- name "
                    Name="Shrinibas"
                  />
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
