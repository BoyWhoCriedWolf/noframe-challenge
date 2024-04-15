import { Box, Typography } from "@mui/material";
import React from "react";
import {
  COLOR_PRIMARY_BLACK,
  COLOR_PRIMARY_GRADIENT,
} from "../../../constants/colors";

const ConnectWalletButton = ({
  label = "",
  icon = null,
  variant = "default" | "gradient",
}) => {
  return (
    <Box
      sx={{
        background: variant === "gradient" ? COLOR_PRIMARY_GRADIENT : "inherit",
        border: `solid ${COLOR_PRIMARY_BLACK} 1px`,
        py: 2.5,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <img
        src={icon}
        alt={label}
        style={{ width: 22, height: 22, marginRight: 4 }}
      />
      <Typography fontWeight={500} fontSize={14} lineHeight={"21px"}>
        {label}
      </Typography>
    </Box>
  );
};

export default ConnectWalletButton;
