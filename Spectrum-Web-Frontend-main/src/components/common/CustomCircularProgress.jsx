"use client";
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyledCircularProgress = styled(CircularProgress)(
  ({ theme, color, buttonvariant, disabled }) => {
    const mainColor = color
      ? theme.palette[color]?.main
      : theme.palette.primary?.main;

    return {
      color: (() => {
        if (!mainColor) return undefined; // Use default color

        switch (buttonvariant) {
          case "contained":
            return theme.palette.getContrastText(mainColor);
          case "outlined":
          case "text":
          default:
            return mainColor;
        }
      })(),
    //   opacity: buttonvariant === "contained" ? 1 : 0.4,
    };
  }
);

export default function CustomCircularProgress({
  size,
  color,
  variant,
  disabled,
  ...props
}) {
  return (
    <Box sx={{ display: "flex" }}>
      <StyledCircularProgress
        size={size}
        color={color}
        buttonvariant={variant}
        disabled={disabled}
        {...props}
      />
    </Box>
  );
}
