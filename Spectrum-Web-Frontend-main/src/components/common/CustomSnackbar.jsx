import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useTheme } from "@mui/material/styles";

const CustomSnackbar = ({
  message,
  severity,
  open,
  onClose,
  onExited,
  autoHideDuration,
  variant,
}) => {
  const theme = useTheme();

  const getSnackbarBackgroundColor = () => {
    switch (severity) {
      case "error":
        return theme.palette.error.main;
      case "warning":
        return theme.palette.warning.main;
      case "info":
        return theme.palette.info.main;
      case "success":
        return theme.palette.success.main;
      default:
        return theme.palette.error.main;
    }
  };

  const bgColor = getSnackbarBackgroundColor();

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000 || autoHideDuration}
      onClose={onClose}
      color={"error" || severity}
      TransitionProps={{ onExited: onExited }}
    >
      <Alert
        onClose={onClose}
        severity={severity || "error"}
        variant={variant || "filled"}
        sx={{
          width: "100%",
          fontWeight: "bold",
          backgroundColor: bgColor,
          color: theme.palette.getContrastText(bgColor),
          "& .MuiAlert-icon": {
            color: theme.palette.getContrastText(bgColor),
          },
        }}
      >
        {message ? message : ""}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
