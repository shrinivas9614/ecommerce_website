import { Login } from "@mui/icons-material";
import { Avatar, Button, Grid, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { get_user, login } from "../../store/Auth/Action";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(login(userData));
    console.log(userData);
  };
  return (
    <div>
      <div className="pb-6 flex flex-col gap-4 justify-center items-center">
        <Avatar
          className="bg-blue-900"
          sx={{ bgcolor: "#1976d2", width: "60px", height: "60px" }}
        >
          <Login />{" "}
        </Avatar>
        <h1 className="font-bold text-xl uppercase"> LOG IN </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
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
        <div className="flex justify-center flex-col items-center">
          <div className="flex items-center py-3">
            <p>
              If You haven't registered Pleas
              <Button
                onClick={() => navigate("/register")}
                className="ml-5"
                size="small"
              >
                Register
              </Button>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
