import { WarningOutlined } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import imgBlockNative from "../../../assets/img/icons/blocknative.png";
import { COLOR_PRIMARY_BLACK } from "../../../constants/colors";
import Logo from "../../logo";
import StepSlider from "../../step-slider/StepSlider";

const ConnectWalletModalLeftSide = () => {
  return (
    <Box
      sx={{
        height: "100%",
        background: COLOR_PRIMARY_BLACK,
        color: "white",
        px: 3.75,

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ pt: 2.25 }}>
        <Box sx={{ py: 2 }}>
          <Logo variant={"gradient"} />
        </Box>
        <Typography fontWeight={600} sx={{ mb: 1 }}>
          Connect your wallet
        </Typography>
        <Typography fontSize={13} lineHeight={"19.5px"} sx={{ mb: 1.25 }}>
          Connecting your wallet is like “logging in” to Web3. Select your
          wallet from the options to get started.
        </Typography>

        <Button color={"primary"} endIcon={<WarningOutlined />} fullWidth>
          I don't have a wallet
        </Button>
      </Box>

      <Box sx={{ pb: 2.25 }}>
        <Box sx={{ mx: 1.25 }}>
          <StepSlider value={1} max={3} step={1} />
        </Box>

        <Grid
          container
          spacing={1}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item>
            <Typography fontWeight={600} fontSize={12} lineHeight={"18px"}>
              powered by <b>blocknative</b>
            </Typography>
          </Grid>
          <Grid item>
            <img src={imgBlockNative} alt="Block Native" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ConnectWalletModalLeftSide;
