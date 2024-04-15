import { Grid } from "@mui/material";
import React from "react";
import iconDown from "../../../assets/img/icons/arrow-down.svg";
import iconEth from "../../../assets/img/icons/eth.svg";

const SwitchWallet = () => {
  return (
    <Grid container sx={{ cursor: "pointer" }}>
      <Grid item>
        <img src={iconEth} alt="Wallet" />
      </Grid>
      <Grid item>
        <img src={iconDown} alt="view more" />
      </Grid>
    </Grid>
  );
};

export default SwitchWallet;
