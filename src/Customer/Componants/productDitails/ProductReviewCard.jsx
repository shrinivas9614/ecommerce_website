import { Avatar, Box, Card, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <Card sx={{ border: "2px 2px solod gray"  }} className="flex flex-col px-3 ">
      <Grid container spacing={3} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              S
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <div className=" space-y-2 flex flex-col w-[30rem] gap-2">
            <p>Shriganesh</p>
            <p> september 19 2022 </p>
          <Rating value={4} name="half-rating" readOnly />
          <p> the experience for using this shirt was good i like the quality of the fabric and deasign</p>
          </div> 
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProductReviewCard;
