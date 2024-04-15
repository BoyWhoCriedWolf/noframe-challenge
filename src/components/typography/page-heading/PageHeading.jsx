import { Typography } from "@mui/material";
import React from "react";

const PageHeading = ({ children = null }) => {
  return (
    <Typography fontWeight={600} fontSize={20} lineHeight={"30px"}>
      {children}
    </Typography>
  );
};

export default PageHeading;
