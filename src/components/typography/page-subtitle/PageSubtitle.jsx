import { Typography } from "@mui/material";
import React from "react";

const PageSubtitle = ({ children = null }) => {
  return (
    <Typography fontWeight={400} fontSize={12} lineHeight={"18px"}>
      {children}
    </Typography>
  );
};

export default PageSubtitle;
