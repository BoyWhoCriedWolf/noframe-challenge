import { Box, Button, Dialog, Grid, Typography } from "@mui/material";
import React from "react";
import { COLOR_PRIMARY_BLACK } from "../../../constants/colors";
import Logo from "../../logo";
import { WarningOutlined } from "@mui/icons-material";
import StepSlider from "../../step-slider/StepSlider";

const ConnectWalletModal = ({ isOpen = false, onClose = () => {} }) => {
  return (
    <Dialog open={isOpen} fullWidth={true} maxWidth="md" onClose={onClose}>
      <Grid container>
        <Grid item lg={4} md={4} sm={4} xs={12}>
          <Box
            sx={{
              background: COLOR_PRIMARY_BLACK,
              color: "white",
              px: 3.75,
              py: 2.25,
            }}
          >
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

            <Box sx={{ mt: 5.25 }}>
              <StepSlider value={1} max={3} step={1} />
            </Box>
          </Box>
        </Grid>
        <Grid item lg={8} md={8} sm={8} xs={12}></Grid>
      </Grid>
    </Dialog>
  );
};

export default ConnectWalletModal;
