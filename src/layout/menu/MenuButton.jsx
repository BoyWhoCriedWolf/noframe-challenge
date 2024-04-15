import { Box } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const MenuButton = ({ label = "", path = "" }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isActive = pathname === path;

  const handleClick = () => {
    navigate(path);
  };
  return (
    <Box
      onClick={handleClick}
      sx={{
        px: 1.5,
        py: 0.75,
        cursor: "pointer",
        border: "solid transparent 1px",
        ":hover": {
          /* black */
          border: (th) => `1px solid ${th.palette.common.black}`,
          boxShadow: (th) => `3px 3px 0px ${th.palette.common.black}`,
        },

        ...(isActive
          ? {
              background: (th) => th.palette.primary.main,
              boxShadow: "inset 3px 3px 0px #000000",
            }
          : {}),
      }}
    >
      {label}
    </Box>
  );
};
