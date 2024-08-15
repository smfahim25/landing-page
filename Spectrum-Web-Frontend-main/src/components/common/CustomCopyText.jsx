"use client";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import CustomButton from "./CustomButton";

const CustomCopyText = ({ text }) => {
  const [copyText, setCopyText] = useState("Copy");
  const [timer, setTimer] = useState(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyText("Copied!");
      clearTimeout(timer); // Clear any existing timer
      setTimer(
        setTimeout(() => {
          setCopyText("Copy");
        }, 1000)
      ); // Reset the button text after 1 second
    });
  };

  return (
    <TextField
      variant="outlined"
      title={text}
      value={text}
      fullWidth
      InputProps={{
        readOnly: true,
        // disableUnderline: true,
        style: {
          borderRadius: "10px",
          border: "2px solid #e0e0e0",
        },
        endAdornment: (
          <InputAdornment position="end">
            <CustomButton
              onClick={handleCopy}
              variant="contained"
              color="primary"
            >
              {copyText}
            </CustomButton>
          </InputAdornment>
        ),
      }}
      InputLabelProps={{
        shrink: true,
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "transparent",
          },
          "&:hover fieldset": {
            borderColor: "transparent",
          },
          "&.Mui-focused fieldset": {
            borderColor: "transparent",
          },
        },
      }}
    />
  );
};

export default CustomCopyText;
