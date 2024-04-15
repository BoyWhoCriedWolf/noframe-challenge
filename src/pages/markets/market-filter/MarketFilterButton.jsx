import { Box } from "@mui/material";
import React from "react";
import { COLOR_PRIMARY_BLACK } from "../../../constants/colors";

const MarketFilterButton = ({
  isActive = false,
  children = null,
  onClick = () => {},
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: 84,
        height: 32,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        background: isActive ? COLOR_PRIMARY_BLACK : "inherit",
        color: isActive ? "white" : "inherit",
      }}
    >
      {children}
    </Box>
  );
};

export default MarketFilterButton;
