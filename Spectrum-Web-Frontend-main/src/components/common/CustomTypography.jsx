"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const StyledTypography = styled(Typography)(
  ({ theme, fontWeight, variant, ...props }) => {
    const responsiveSize = theme.typography.responsiveSizes[variant];

    return {
      color: theme.palette.text.primary, // Default text color from theme
      fontSize: responsiveSize
        ? responsiveSize.lg
        : theme.typography.sizes[variant], // Use responsive size if available
      // fontFamily: "Sans",
      fontWeight:
        theme.typography.fontWeights[fontWeight] ||
        theme.typography.fontWeights.regular, // Use custom or regular weight
      [`@media (max-width:${theme.breakpoints.values.lg}px)`]: {
        fontSize: responsiveSize
          ? responsiveSize.md
          : theme.typography.sizes[variant],
      },
      [`@media (max-width:${theme.breakpoints.values.md}px)`]: {
        fontSize: responsiveSize
          ? responsiveSize.sm
          : theme.typography.sizes[variant],
      },
      [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
        fontSize: responsiveSize
          ? responsiveSize.xs
          : theme.typography.sizes[variant],
      },
    };
  }
);

const CustomTypography = ({
  fontWeight,
  variant,
  className,
  style,
  ...props
}) => {
  return (
    <StyledTypography
      fontWeight={fontWeight}
      className={className}
      style={style}
      variant={variant}
      {...props}
    >
      {props.children}
    </StyledTypography>
  );
};

export default CustomTypography;
