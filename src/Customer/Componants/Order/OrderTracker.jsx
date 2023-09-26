import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

const OrderTracker = ({ activeStep }) => {
  const steps = [
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out For Delivary",
    "Delivered",
  ];
  return (
    <div className="w-full">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step>
            <StepLabel sx={{ bgcolor: "#915SFD", fontSize: "44px" }}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default OrderTracker;
