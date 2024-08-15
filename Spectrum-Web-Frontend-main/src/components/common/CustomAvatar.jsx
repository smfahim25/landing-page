"use client";
import React from "react";
import Avatar from "@mui/material/Avatar";

const CustomAvatar = ({
  src,
  alt,
  size = 36,
  cursor = "pointer",
  sx,
  ...props
}) => {
  return (
    <Avatar
      src={src}
      alt={alt || "Not found"}
      sx={{
        width: size,
        height: size,
        cursor: cursor,
        ...sx,
      }}
      {...props}
    />
  );
};

export default CustomAvatar;
