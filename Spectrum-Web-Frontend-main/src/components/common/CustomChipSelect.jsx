"use client";
import React, { useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";

function CustomChipSelect({ chips, onChange, value = [] }) {
  const [selectedChips, setSelectedChips] = useState([...value]);

  //   useEffect(() => {
  //     if (value && value.length) {
  //       setSelectedChips(value);
  //     }
  //   }, [value]);

  const handleChipClick = (chip) => {
    const currentIndex = selectedChips.indexOf(chip.value);
    const newSelectedChips = [...selectedChips];

    if (currentIndex === -1) {
      newSelectedChips.push(chip.value);
    } else {
      newSelectedChips.splice(currentIndex, 1);
    }

    setSelectedChips(newSelectedChips);

    // Call the onChange callback if it exists
    if (onChange) {
      onChange(newSelectedChips);
    }
  };

  return (
    <Box
      component="ul"
      elevation={0}
      className="flex justify-start flex-wrap list-none p-2 m-0 bg-transparent"
    >
      {chips.map((chip, index) => {
        const isSelected = selectedChips.includes(chip.value);
        return (
          <li key={index}>
            <Chip
              sx={{ m: 1 }}
              label={chip.label}
              onClick={() => handleChipClick(chip)}
              color={isSelected ? "primary" : "default"}
              variant={isSelected ? "contained" : "outlined"}
            />
          </li>
        );
      })}
    </Box>
  );
}

export default CustomChipSelect;
