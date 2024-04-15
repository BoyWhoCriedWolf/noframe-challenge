import { ArrowDropDown } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import ConnectWalletModal from "./modal";

const ConnectWallet = ({ onClick = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} color="inherit" endIcon={<ArrowDropDown />}>
        Connected wallet
      </Button>

      <ConnectWalletModal isOpen={isOpen} onClose={handleClose} />
    </div>
  );
};

export default ConnectWallet;
