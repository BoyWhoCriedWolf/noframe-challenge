import { Box, Typography } from "@mui/material";
import React from "react";

const DotsConnected = ({ words = [] }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        fontWeight={500}
        fontSize={14}
        lineHeight={"21px"}
        sx={{ pr: 1 }}
      >
        {words[0]}
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          height: 1,
          backgroundImage: `repeating-linear-gradient(to right, white, white 4px, transparent 4px, transparent)`,
        }}
      ></Box>
      <Typography
        fontWeight={500}
        fontSize={14}
        lineHeight={"21px"}
        sx={{ pl: 1 }}
      >
        {words[1]}
      </Typography>
    </Box>
  );
};

export default DotsConnected;
