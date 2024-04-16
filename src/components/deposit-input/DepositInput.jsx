import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import imgFixUsd from "../../assets/img/icons/fixUsd.png";

const DepositInput = () => {
  return (
    <Box sx={{ mt: 0.5 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography fontWeight={400} fontSize={12} lineHeight={"18px"}>
          Deposit fixUSD
        </Typography>
        <Typography
          fontWeight={400}
          fontSize={12}
          lineHeight={"18px"}
          align="right"
        >
          Balance 0.000 fixUSD
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "stretch" }}>
        <TextField fullWidth />
        <Box
          sx={{
            color: (th) => th.palette.common.white,
            background: (th) => th.palette.common.black,

            display: "flex",
            alignItems: "center",

            cursor: "pointer",

            px: 1.5,
          }}
        >
          <img src={imgFixUsd} alt="fixUSD" style={{ marginRight: 4 }} />
          <Typography fontWeight={400} fontSize={14} lineHeight={"21px"}>
            fixUSD
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DepositInput;
