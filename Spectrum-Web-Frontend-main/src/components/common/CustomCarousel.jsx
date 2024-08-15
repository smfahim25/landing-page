"use client";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CustomCarousel = ({ items, height, width, autoPlayInterval = 1000 }) => {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));
  const isLg = useMediaQuery(theme.breakpoints.only("lg"));
  const isXl = useMediaQuery(theme.breakpoints.only("xl"));

  const getComputedHeight = (height) => {
    if (typeof height !== "object") return height;

    // Return the most appropriate height based on breakpoints
    if (isXl && height.xl) return height.xl;
    if (isLg && height.lg) return height.lg;
    if (isMd && height.md) return height.md;
    if (isSm && height.sm) return height.sm;
    if (isXs && height.xs) return height.xs;

    // Fallback to the closest available height if the current breakpoint height is not defined
    if (height.xl) return height.xl;
    if (height.lg) return height.lg;
    if (height.md) return height.md;
    if (height.sm) return height.sm;
    if (height.xs) return height.xs;

    // Fallback to 'auto' if no height is defined
    return "auto";
  };

  const computedHeight = getComputedHeight(height);

  return (
    <Carousel
      autoPlay
      interval={autoPlayInterval}
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      emulateTouch
      style={{ width: width || "100%", height: computedHeight || "100%", borderRadius: "10px" }}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        const indicatorStyle = {
          backgroundColor: isSelected ? "white" : "rgba(255, 255, 255, 0.5)",
          width: 8,
          height: 8,
          display: "inline-block",
          margin: "0 8px",
          borderRadius: "50%",
          cursor: "pointer",
        };
        return (
          <li
            style={indicatorStyle}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            aria-label={`${label} ${index + 1}`}
          />
        );
      }}
    >
      {items.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: computedHeight,
          }}
        >
          {React.cloneElement(item, {
            style: {
              ...item.props.style,
              maxHeight: "100%",
              width: "auto",
              height: "auto",
            },
          })}
        </Box>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
