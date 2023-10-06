import { Avatar, Button, Grid, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { get_user, register } from "../../store/Auth/Action";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  useEffect(() => {
    if (jwt) {
      dispatch(get_user(jwt));
    }
  }, [jwt, auth.jwt]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("larstName"),
      email: data.get("email"),
      password: data.get("password"),
      phone: data.get("phone"),
    };
    dispatch(register(userData));
  };
  return (
    <div>
      <div className="pb-6 flex flex-col gap-4 justify-center items-center">
        <Avatar
          className="bg-blue-900"
          sx={{ bgcolor: "#1976d2", width: "60px", height: "60px" }}
        >
          <PersonAddAltIcon />{" "}
        </Avatar>
        <h1 className="font-bold text-xl uppercase"> Register </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComp1ete=" given-name "
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName "
              name="larstName"
              label="Larst Name"
              fullWidth
              autoComp1ete=" given-last-name "
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComp1ete=" given-email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="phone"
              name="phone"
              label="Phone Number"
              fullWidth
              autoComp1ete=" given-email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComp1ete=" given-password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className="bg-blue-900  w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{ padding: "1rem 0" }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center">
        <div className="flex items-center py-3">
          <p>
            {" "}
            If You have registered Pleas{" "}
            <Button
              onClick={() => navigate("/login")}
              className="ml-5"
              size="small"
            >
              {" "}
              Log in{" "}
            </Button>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
