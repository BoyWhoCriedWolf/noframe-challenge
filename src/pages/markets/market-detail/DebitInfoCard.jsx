import { Box, Typography } from "@mui/material";
import React from "react";
import DotsConnected from "../../../components/typography/dots-connected";
import imgTicket from "../../../assets/img/backgrounds/ticket.svg";

const DebitInfoCard = () => {
  return (
    <Box
      sx={{
        // color: (th) => th.palette.common.white,
        // background: (th) => th.palette.common.black,
        px: 2.25,
        py: 2.5,
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <img
        style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }}
        src={imgTicket}
        alt="Ticket background"
      />
      <Box sx={{ mb: 2, position: "relative" }}>
        <Typography fontWeight={700} fontSize={16} lineHeight={"24px"}>
          Debit Info
        </Typography>
      </Box>

      <Box sx={{ mb: 1.5, position: "relative" }}>
        <DotsConnected words={["Net dept", "3348 fixUSD"]} />
      </Box>

      <Box sx={{ mb: 1.5, position: "relative" }}>
        <DotsConnected words={["Mint fee", "0.3%"]} />
      </Box>

      <Box sx={{ mb: 1.5, position: "relative" }}>
        <DotsConnected words={["Liquidation Reserve", "20 fixUSD"]} />
      </Box>

      <Box sx={{ mb: 3, position: "relative" }}>
        <DotsConnected words={["Liquidation Price", "1400$"]} />
      </Box>

      <Box
        sx={{
          borderTop: "1px solid",
          pt: 1.5,
          position: "relative",
        }}
      >
        <DotsConnected words={["Your Total Debt", "3368 fixUSD"]} />
      </Box>
    </Box>
  );
};

export default DebitInfoCard;
