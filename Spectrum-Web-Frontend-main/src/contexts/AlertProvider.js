import React, { createContext, useContext, useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import api from "@/config/apiInstance";
import CustomSnackbar from "@/components/common/CustomSnackbar";

// Context
const SnackbarContext = createContext();

// Provider Component
export const AlertProvider = ({ children }) => {
  const [snackPack, setSnackPack] = useState([]);
  const [open, setOpen] = useState(false);
  const [messageInfo, setMessageInfo] = useState(undefined);

  React.useEffect(() => {
    api.interceptors.response.use(
      (response) => response,
      (error) => {
        addAlert(
          error?.response?.data?.error || "An unexpected error occured",
          "error"
        );
        return Promise.reject(error);
      }
    );
  }, [api]);

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const addAlert = (message, severity) => {
    let alertMessage;
    if (message instanceof Error) {
      alertMessage = message.message;
    } else if (typeof message === "string") {
      alertMessage = message;
    }

    setSnackPack((prev) => [
      ...prev,
      {
        message: alertMessage,
        severity,
        key: new Date().getTime(),
      },
    ]);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  return (
    <SnackbarContext.Provider value={{ addAlert }}>
      {children}
      <CustomSnackbar
        key={messageInfo ? messageInfo?.key : undefined}
        open={open}
        severity={messageInfo?.severity}
        message={messageInfo?.message}
        autoHideDuration={6000}
        onClose={handleClose}
        onExited={handleExited}
      />
    </SnackbarContext.Provider>
  );
};

export const useAlertContext = () => useContext(SnackbarContext);
