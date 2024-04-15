import { Box } from "@mui/material";
import React from "react";
import { COLOR_PRIMARY_BLACK } from "../../constants/colors";

const SocialButton = ({ label = "", icon = null }) => {
  return (
    <Box
      sx={{
        width: 36,
        height: 36,
        background: COLOR_PRIMARY_BLACK,
        color: "white",
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
