import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import { useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";

const AuthModal = ({ handleClose, openMenu }) => {
  const location = useLocation();
  return (
    <div>
      <Dialog
        open={openMenu}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Box>
            {location.pathname === "/login" ? (
              <LoginForm />
            ) : (
              <RegistrationForm />
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AuthModal;
