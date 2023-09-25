import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";
import DeliveryAddressForm from "./DeliveryAddressForm";
import OrderSummery from "./OrderSummery";

const steps = ["Login", "Delivery Address", "Order Summary", "Payment"];

export default function CheckOut() {
  const [activeStep, setActiveStep] = React.useState(0);
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);
  const step = parseInt(querySearch.get("step") || "0"); // Parse the step from the URL query parameter
  const navigate = useNavigate(); // Use useNavigate to navigate programmatically

  React.useEffect(() => {
    // Update the active step when the component mounts or when the URL changes
    setActiveStep(step);
  }, [step]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    updateURL(activeStep + 1); // Update the URL when moving to the next step
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    updateURL(activeStep - 1); // Update the URL when going back to the previous step
  };

  // Update the URL with the new active step
  const updateURL = (step) => {
    navigate(`/checkout?step=${step}`);
  };

  return (
    <div className="px-10 lg:px-20">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
            </Box>

            <div className="">
              {step === 2 ? <DeliveryAddressForm /> : <OrderSummery />}
            </div>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
