import { Box, Button, Grid, Link, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";

const Footer = () => {
  return (
    <Box>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "wite", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <Box>
            <Button className="pb-5" variant="h6">
              {" "}
              About
            </Button>
          </Box>
          <Box>
            <Button className="pb-5" variant="h6">
              {" "}
              Blog
            </Button>
          </Box>
          <Box>
            <Button className="pb-5" variant="h6">
              {" "}
              Jobs
            </Button>
          </Box>
          <Box>
            <Button className="pb-5" variant="h6">
              Partners
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            FAQ
          </Typography>
          <Box>
            <Button className="pb-5" variant="h6">
              Recently Asked Questions
            </Button>
          </Box>
          <Box>
            <Button className="pb-5" variant="h6">
              Queries
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Social Media
          </Typography>
          <Box>
            <Button className="pb-5" variant="h6">
              <FacebookIcon /> Face Book
            </Button>
          </Box>
          <Box>
            <Button className="pb-5" variant="h6">
              <TwitterIcon /> Twiter
            </Button>
          </Box>
          <Box>
            <Button className="pb-5" variant="h6">
              <InstagramIcon /> Instagram
            </Button>
          </Box>
          <Box>
            <Button className="pb-5" variant="h6">
              <LocalPostOfficeIcon /> ecomerse@sdk.com
            </Button>
          </Box>
        </Grid>
        <Grid className="pt-12" item xs={12}>
          <Typography varient="body1" componant="p">
            &copy; Company, All rights reserved
          </Typography>
          <Typography varient="body2" componant="p">
            Icons Made by:{" "}
            <Link Href="#" color="inherit" underline="always">
              {" "}
              Freepeak{" "}
            </Link>
            From
            <Link Href="#" color="inherit" underline="always">
              {" "}
              www.sdk.com{" "}
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
