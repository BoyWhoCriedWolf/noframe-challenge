import { Box } from "@mui/material";
import React from "react";

const SecondaryButton = ({ children = null }) => {
  return (
    <Box
      sx={{
        color: (th) => th.palette.secondary.contrastText,
        background: (th) => th.palette.secondary.main,
        py: 1.5,
        width: "100%",
        cursor: "pointer",
        border: (th) => `solid 1px ${th.palette.common.black}`,

        display: "flex",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
};

export default SecondaryButton;
