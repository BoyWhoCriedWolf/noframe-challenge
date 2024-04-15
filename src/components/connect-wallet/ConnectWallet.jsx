import { ArrowDropDown } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const ConnectWallet = () => {
  return (
    <div>
      <Button color="inherit" endIcon={<ArrowDropDown />}>
        Connected wallet
      </Button>
    </div>
  );
};

export default ConnectWallet;
