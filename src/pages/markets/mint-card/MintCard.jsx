import { ArrowDropDown, CalendarMonth, Wallet } from "@mui/icons-material";
import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import THEMES from "../../../theme";

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
      }}
    >
      <Grid container alignItems={"center"} spacing={1.5} sx={{ py: 4, px: 4 }}>
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
        <Grid item lg={5} md={5} sm={5} xs={5}>
          <ThemeProvider theme={THEMES.DARK}>
            <Paper elevation={0}>
              <FormControl fullWidth size="small">
                <Select>
                  <MenuItem value={"pt-wst-eth"}>PT wstETH</MenuItem>
                </Select>
              </FormControl>
            </Paper>
          </ThemeProvider>
        </Grid>
        <Grid item lg={5} md={5} sm={5} xs={5}>
          <ThemeProvider theme={THEMES.DARK}>
            <Paper elevation={0}>
              <TextField
                size="small"
                type="date"
                InputProps={{
                  startAdornment: <CalendarMonth />,
                  endAdornment: <ArrowDropDown />,
                }}
                fullWidth
              />
            </Paper>
          </ThemeProvider>
        </Grid>

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
            fullWidth
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
            fullWidth
          />
        </Grid>
        <Grid item lg={5} md={5} sm={5} xs={5} sx={{ opacity: 0.5 }}>
          <Typography fontWeight={500} fontSize={12} lineHeight={"18px"}>
            Collateral Ratio ....................150%
          </Typography>
        </Grid>
      </Grid>

      <Grid container justifyContent={"center"} sx={{ mb: 5.5 }}>
        <Grid item lg={6} md={6} sm={6} xs={12}>
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
            Mint fixUSD
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MintCard;
