import { Box, Typography } from "@mui/material";
import React from "react";
import DotsConnected from "../../../components/typography/dots-connected";
import { COLOR_PRIMARY_GRADIENT } from "../../../constants/colors";

const MarketInfoCard = () => {
  return (
    <Box
      sx={{
        color: (th) => th.palette.common.white,
        background: (th) => th.palette.common.black,
        px: 2.25,
        py: 3,
        height: "100%",
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Typography fontWeight={700} fontSize={16} lineHeight={"24px"}>
          Market Info
        </Typography>
      </Box>

      <Box sx={{ mb: 1.5 }}>
        <DotsConnected words={["Max. Collat. Ratio", "200%"]} />
      </Box>

      <Box sx={{ mb: 1.5 }}>
        <DotsConnected words={["Min. Collat. Ratio", "110%"]} />
      </Box>

      <Box sx={{ mb: 1.5 }}>
        <DotsConnected words={["Borrow Interest Rate", "3%"]} />
      </Box>

      <Box sx={{ mb: 1.5 }}>
        <DotsConnected words={["Mint fee", "0.3%"]} />
      </Box>

      <Box
        sx={{
          border: "2px solid",
          borderImageSource: COLOR_PRIMARY_GRADIENT,
          px: 2,
          py: 1,
        }}
      >
        <DotsConnected words={["Your Borrow Power", "$411600"]} />
      </Box>
    </Box>
  );
};

export default MarketInfoCard;
