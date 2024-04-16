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
import DotsConnected from "../../components/typography/dots-connected";

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

      <Box
        sx={{
          mt: 4,
          py: 2.5,
          width: "90%",
          mx: "auto",
          borderTop: "dashed 1px",
        }}
      >
        <Grid container>
          {[
            { label: "Collateral Price", value: "#4,074.43" },
            { label: "Expected Collateral Received", value: "0.01438 PT" },
            { label: "Redemption Fee", value: "1,67%" },
            { label: "Value of Collateral Received", value: "3%" },
            { label: "Redemption Fee Amount", value: "0.01438 PT" },
            { label: "Actual Redemption Amount", value: "3%" },
          ].map((item, itemIndex) => {
            return (
              <Grid item lg={6} md={6} sm={6} xs={12} sx={{ p: 1 }}>
                <DotsConnected words={[item?.label, item?.value]} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </GreenShadowContainer>
  );
};

export default RedeemCard;
