import { Wallet } from "@mui/icons-material";
import { Box, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const MintCard = () => {
  const [formData, setFormData] = useState({ deposit: 0 });

  const handleChangeFormData = (e) => {
    const { name = "", value = "" } = e?.target ?? {};
    setFormData((s = {}) => ({ ...(s ?? {}), [name]: value }));
  };

  return (
    <Box
      sx={{
        width: "100%",
        background: (th) => th.palette.common.white,
        border: (th) => `1px solid ${th.palette.common.black}`,
        boxShadow: (th) => `9px 7px 0px ${th.palette.primary.main}`,
        pt: 4,
        pb: 5.5,
        pl: 4,
        pr: 7,
      }}
    >
      <Grid container alignItems={"center"} spacing={1.5}>
        <Grid item lg={2} md={2} sm={2} xs={2}>
          <Typography
            fontWeight={600}
            fontSize={16}
            lineHeight={"24px"}
            align="right"
          >
            Asset
          </Typography>
        </Grid>
        <Grid item lg={5} md={5} sm={5} xs={5}></Grid>
        <Grid item lg={5} md={5} sm={5} xs={5}></Grid>

        {/* deposit */}
        <Grid item lg={2} md={2} sm={2} xs={2}>
          <Typography
            fontWeight={600}
            fontSize={16}
            lineHeight={"24px"}
            align="right"
          >
            Deposit
          </Typography>
        </Grid>
        <Grid item lg={5} md={5} sm={5} xs={5}>
          <TextField
            name="deposit"
            value={formData?.deposit}
            onChange={handleChangeFormData}
            size="small"
            InputProps={{
              endAdornment: (
                <Typography
                  sx={{ opacity: 0.5 }}
                  fontWeight={500}
                  fontSize={12}
                  lineHeight={"18px"}
                >
                  =${formData?.deposit * 3548}
                </Typography>
              ),
            }}
          />
        </Grid>
        <Grid item lg={5} md={5} sm={5} xs={5} sx={{ opacity: 0.5 }}>
          <Typography fontWeight={500} fontSize={12} lineHeight={"18px"}>
            <Wallet /> 12.89 PT wstETH 12/02/24
          </Typography>
        </Grid>

        {/* mint */}
        <Grid item lg={2} md={2} sm={2} xs={2}>
          <Typography
            fontWeight={600}
            fontSize={16}
            lineHeight={"24px"}
            align="right"
          >
            Mint
          </Typography>
        </Grid>
        <Grid item lg={5} md={5} sm={5} xs={5}>
          <TextField
            name="mint"
            value={formData?.mint}
            onChange={handleChangeFormData}
            size="small"
            InputProps={{
              endAdornment: (
                <Typography
                  sx={{ opacity: 0.5 }}
                  fontWeight={500}
                  fontSize={12}
                  lineHeight={"18px"}
                >
                  fixUSD
                </Typography>
              ),
            }}
          />
        </Grid>
        <Grid item lg={5} md={5} sm={5} xs={5} sx={{ opacity: 0.5 }}>
          <Typography fontWeight={500} fontSize={12} lineHeight={"18px"}>
            Collateral Ratio ........................150%
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MintCard;
