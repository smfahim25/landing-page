"use client";
import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/material";
import { ICONS } from "@/assets";
import CustomTypography from "./CustomTypography";

function CustomSelectableList({ items, onChange, value = [] }) {
  const [selected, setSelected] = useState([...value]);

  const handleToggle = (value) => {
    const currentIndex = selected.indexOf(value);
    const newSelected = [...selected];

    if (currentIndex === -1) {
      newSelected.push(value);
    } else {
      newSelected.splice(currentIndex, 1);
    }

    setSelected(newSelected);

    // Call onChange if it's provided
    if (onChange) {
      onChange(newSelected);
    }
  };

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {items.map((item, index) => {
        const isSelected = selected.indexOf(item.id) !== -1;
        return (
          <React.Fragment key={index}>
            <ListItem
              role={undefined}
              className="w-full flex flex-row justify-between cursor-pointer hover:bg-slate-100"
              dense
              onClick={() => handleToggle(item.id)}
            >
              <ListItemText primary={item.component} />

              {isSelected && (
                <ListItemIcon>
                  <ICONS.check_box_filled size={32} />
                </ListItemIcon>
              )}
            </ListItem>
            {
              // if do not want to show the last divider: index < items.length - 1 &&
              <Divider />
            }
          </React.Fragment>
        );
      })}
    </List>
  );
}

export default CustomSelectableList;
