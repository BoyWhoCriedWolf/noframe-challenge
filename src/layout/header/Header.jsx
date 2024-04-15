import { Box, Container, Grid } from "@mui/material";
import React from "react";
import ConnectWallet from "../../components/connect-wallet";
import Logo from "../../components/logo";
import SwitchWallet from "../../components/logo/switch-wallet";
import Menu from "../menu/Menu";

export const Header = () => {
  return (
    <Container>
      <Box
        sx={{
          border: "solid black 1px",
          width: "100%",
          px: 1.5,
          py: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid container alignItems={"center"}>
          <Grid item>
            <Logo />
          </Grid>
          <Grid item>
            <Menu />
          </Grid>
        </Grid>
        <Grid container justifyContent={"flex-end"} alignItems={"center"}>
          <Grid item>
            <SwitchWallet />
          </Grid>
          <Grid item>
            <ConnectWallet />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
