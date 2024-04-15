import { Close } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  Dialog,
  FormControlLabel,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import {
  default as imgBinance,
  default as imgBitgetWallet,
} from "../../../assets/img/icons/Bitget.png";
import imgOKW from "../../../assets/img/icons/OKX Wallet.png";
import imgWalletConnect from "../../../assets/img/icons/WalletConnect.png";
import imgCoin98 from "../../../assets/img/icons/coin98.png";
import imgMetaMask from "../../../assets/img/icons/metamask.png";
import ConnectWalletButton from "../connect-wallet-button";
import ConnectWalletModalLeftSide from "./ConnectWalletModalLeftSide";

const ConnectWalletModal = ({ isOpen = false, onClose = () => {} }) => {
  return (
    <Dialog open={isOpen} fullWidth={true} maxWidth="md" onClose={onClose}>
      <Grid container alignItems={"stretch"}>
        <Grid item lg={4} md={4} sm={4} xs={12}>
          <ConnectWalletModalLeftSide />
        </Grid>
        <Grid item lg={8} md={8} sm={8} xs={12} sx={{ border: "solid 1px" }}>
          <Box
            sx={{
              py: 1,
              px: 2.5,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "solid 1px",
            }}
          >
            <Typography fontWeight={600}>Available Wallets (6)</Typography>
            <IconButton onClick={onClose} size="small">
              <Close />
            </IconButton>
          </Box>

          <Box sx={{ px: 3, pt: 1, pb: 7.5 }}>
            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                label={
                  <>
                    I agree to the <Link>Terms & Conditions</Link> and{" "}
                    <Link>Privacy Policy</Link>
                  </>
                }
                control={<Checkbox />}
              />
            </Box>

            <Grid container spacing={2.5}>
              {[
                { label: "MetaMask", icon: imgMetaMask, variant: "gradient" },
                { label: "OKW Wallet", icon: imgOKW },
                { label: "Coin98 Wallet", icon: imgCoin98 },
                { label: "WalletConnect", icon: imgWalletConnect },
                { label: "Bitget Wallet", icon: imgBitgetWallet },
                { label: "Binance", icon: imgBinance },
              ].map((item, itemIndex) => (
                <Grid item key={itemIndex} xs={12} sm={6} md={6} mg={6}>
                  <ConnectWalletButton
                    label={item?.label ?? ""}
                    icon={item?.icon ?? imgMetaMask}
                    variant={item?.variant ?? "default"}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default ConnectWalletModal;
