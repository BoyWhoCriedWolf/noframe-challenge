import { Box } from "@mui/material";
import React from "react";
import MarketFilterButton from "./MarketFilterButton";

const MarketFilter = ({ value = "Active", onChange = () => {} }) => {
  return (
    <Box
      sx={{
        border: (th) => `solid ${th.palette.common.black} 1px`,
        p: 0.25,
        display: "flex",
      }}
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
