import { Box, Typography } from "@mui/material";
import React from "react";
import {
  COLOR_PRIMARY_GRADIENT,
  COLOR_PRIMARY_GRAY,
} from "../../constants/colors";

const StateWidget = ({
  label = "",
  icon = null,
  value = "",
  additionalValue = "",
  showClaim = false,
}) => {
  return (
    <Box
      sx={{
        px: 3,
        py: 1,
        border: "solid 1px",
        background: COLOR_PRIMARY_GRAY,
        height: "100%",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            color: (th) => th.palette.common.white,
            background: (th) => th.palette.common.black,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mr: 1.5,
          }}
        >
          {icon}
        </Box>

        <Typography fontWeight={500} fontSize={14} lineHeight={"21px"}>
          {label}
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 1.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          fontWeight={500}
          fontSize={24}
          lineHeight={"36px"}
          color="secondary"
          sx={{ mx: 1 }}
          noWrap
        >
          {">"} {value}
          {additionalValue ? (
            <Typography
              fontWeight={500}
              fontSize={20}
              lineHeight={"30px"}
              color="primary"
              sx={{ mx: 1 }}
              component={"span"}
            >
              {additionalValue}
            </Typography>
          ) : null}
        </Typography>
        {showClaim ? (
          <Box
            sx={{
              background: COLOR_PRIMARY_GRADIENT,
              px: 3,
              py: 1,
              cursor: "pointer",
            }}
          >
            <Typography fontWeight={500} fontSize={13} lineHeight={"19.5px"}>
              Claim
            </Typography>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default StateWidget;
