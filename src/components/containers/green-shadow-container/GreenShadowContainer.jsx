import { Box } from "@mui/material";
import React from "react";

const GreenShadowContainer = ({ children = null }) => {
  return (
    <Box
      sx={{
        width: "100%",
        background: (th) => th.palette.common.white,
        border: (th) => `1px solid ${th.palette.common.black}`,
        boxShadow: (th) => `9px 7px 0px ${th.palette.primary.main}`,
      }}
    >
      {children}
    </Box>
  );
};

export default GreenShadowContainer;
