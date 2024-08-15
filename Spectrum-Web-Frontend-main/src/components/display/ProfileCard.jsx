"use client"
import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CustomTypography from "../common/CustomTypography";
import CustomAvatar from "../common/CustomAvatar";

// The component now has a name that better describes its use
function ProfileCard({ avatarSrc, avatarSize, name, description }) {
  return (
    <Box display="flex" alignItems="center" p={1}>
      <CustomAvatar
        src={avatarSrc}
        alt={name}
        sx={{
          width: avatarSize || 36,
          height: avatarSize || 36,
          marginRight: 2,
        }} // Customize size as needed
      />
      <Box>
        <CustomTypography variant="h6" sx={{ fontWeight: 550 }}>
          {name}
        </CustomTypography>
        <CustomTypography variant="subtitle1" color="text.secondary">
          {description}
        </CustomTypography>
      </Box>
    </Box>
  );
}

export default ProfileCard;
