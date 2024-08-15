"use client";
import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import CustomCircularProgress from "./CustomCircularProgress";

const StyledButton = styled(Button)(({ theme, color, variant }) => {
  const mainColor = theme.palette[color]?.main || theme.palette.primary.main;
  const darkColor = theme.palette[color]?.dark || theme.palette.primary.dark;
  const lightColor = theme.palette[color]?.light || theme.palette.primary.light;
  const contrastText = theme.palette.getContrastText(mainColor);
  // console.log(theme.palette)
  const baseStyles = {
    textTransform: "none",
    fontWeight: "bold"
  };

  const variantStyles = {
    contained: {
      backgroundColor: mainColor,
      color: contrastText,
      boxShadow: "none",
      "&:hover": {
        backgroundColor: darkColor,
        boxShadow: "none",
      },
      "&.Mui-disabled": {
        backgroundColor: mainColor,
        opacity: 0.4,
        color: contrastText,
        boxShadow: "none",
      },
    },
    outlined: {
      borderColor: mainColor,
      color: mainColor,
      "&:hover": {
        borderColor: darkColor,
        color: darkColor,
        backgroundColor: "transparent", // Ensure no background change on hover
      },
      "&.Mui-disabled": {
        borderColor: mainColor,
        color: mainColor,
        opacity: 0.4,
        backgroundColor: "transparent", // Ensure no background in disabled state
      },
    },
    text: {
      color: mainColor,
      "&:hover": {
        color: darkColor,
        backgroundColor: "transparent", // Ensure no background change on hover
      },
      "&.Mui-disabled": {
        color: mainColor,
        opacity: 0.4,
        backgroundColor: "transparent", // Ensure no background in disabled state
      },
    },
  };

  return {
    ...baseStyles,
    ...variantStyles[variant],
  };
});

const CustomButton = ({
  variant = "contained",
  onClick,
  style,
  color = "primary",
  disabled,
  fullWidth,
  endIcon,
  startIcon,
  sx,
  size,
  loading,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      onClick={onClick}
      color={color}
      disabled={disabled || loading}
      fullWidth={fullWidth}
      startIcon={startIcon}
      style={style}
      endIcon={
        endIcon ||
        (loading ? (
          <CustomCircularProgress size={20} color={color} variant={variant} />
        ) : (
          ""
        ))
      }
      sx={sx}
      {...props}
    >
      {props.children}
    </StyledButton>
  );
};

export default CustomButton;
