import { ArrowDropDown, CalendarMonth } from "@mui/icons-material";
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
import React from "react";
import GreenShadowContainer from "../../components/containers/green-shadow-container";
import DepositInput from "../../components/deposit-input";
import SecondaryButton from "../../components/secondary-button";
import THEMES from "../../theme";

const RedeemCard = () => {
  return (
    <GreenShadowContainer>
      <Box sx={{ pt: 4, width: "60%", mx: "auto" }}>
        <Box sx={{ mb: 0.5 }}>
          <Typography fontWeight={400} fontSize={12} lineHeight={"18px"}>
            Select a collateral to redeem for:
          </Typography>
        </Box>
        <Grid container alignItems={"center"} spacing={1.5}>
          <Grid item lg={6} md={6} sm={6} xs={6}>
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
          <Grid item lg={6} md={6} sm={6} xs={6}>
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
        </Grid>

        {/* deposit */}
        <Box>
          <DepositInput />
        </Box>

        <Grid container justifyContent={"center"} sx={{ my: 1 }}>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <SecondaryButton>Redeem</SecondaryButton>
          </Grid>
        </Grid>
      </Box>
    </GreenShadowContainer>
  );
};

export default RedeemCard;
