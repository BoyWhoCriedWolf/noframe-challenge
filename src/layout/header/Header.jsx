import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Logo from "../../components/logo";
import Menu from "../menu/Menu";
import SwitchWallet from "../../components/logo/switch-wallet";

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
          <Grid item></Grid>
        </Grid>
      </Box>
    </Container>
  );
};
