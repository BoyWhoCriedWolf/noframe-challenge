import { Box, Typography } from "@mui/material";
import React from "react";
import { COLOR_PRIMARY_GRADIENT } from "../../../constants/colors";

const EarnSummaryWidget = ({
  variant = "default" | "gradient",
  label = "",
  value = "",
}) => {
  return (
    <Box
      sx={{
        border: "solid 1px",
        py: 1.5,
        px: 2.5,
        cursor: "pointer",

        ":hover": {
          background: COLOR_PRIMARY_GRADIENT,
          boxShadow: (th) => `3px 3px 0px 0px ${th.palette.common.black}`,
        },
      }}
    >
      <Typography
        fontWeight={400}
        fontSize={18}
        lineHeight={"27px"}
        sx={{ opacity: 0.5, mb: 0.5 }}
      >
        {label}
      </Typography>
      <Typography fontWeight={600} fontSize={32.85} lineHeight={"49.28px"}>
        {value}
      </Typography>
    </Box>
  );
};

export default EarnSummaryWidget;
