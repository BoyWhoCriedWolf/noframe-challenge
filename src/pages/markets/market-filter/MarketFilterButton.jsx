import { Box } from "@mui/material";
import React from "react";

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
        background: isActive ? (th) => th.palette.common.black : "inherit",
        color: isActive ? (th) => th.palette.common.white : "inherit",
      }}
    >
      {children}
    </Box>
  );
};

export default MarketFilterButton;
