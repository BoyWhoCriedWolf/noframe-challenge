import { Box } from "@mui/material";
import React from "react";

const SocialButton = ({ label = "", icon = null }) => {
  return (
    <Box
      sx={{
        width: 36,
        height: 36,
        background: (th) => th.palette.common.black,
        color: (th) => th.palette.common.white,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: "50%",
      }}
    >
      {icon}
    </Box>
  );
};

export default SocialButton;
