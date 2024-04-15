import { Box } from "@mui/material";
import React from "react";
import { COLOR_PRIMARY_BLACK } from "../../../constants/colors";
import MarketFilterButton from "./MarketFilterButton";

const MarketFilter = ({ value = "Active", onChange = () => {} }) => {
  return (
    <Box
      sx={{ border: `solid ${COLOR_PRIMARY_BLACK} 1px`, p: 0.25, display: "flex" }}
    >
      {["Active", "Matured"].map((item, itemIndex) => {
        return (
          <MarketFilterButton
            key={itemIndex}
            isActive={value === item}
            onClick={() => onChange(item)}
          >
            {item}
          </MarketFilterButton>
        );
      })}
    </Box>
  );
};

export default MarketFilter;
