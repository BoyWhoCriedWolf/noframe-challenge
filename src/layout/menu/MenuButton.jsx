import { Box } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { COLOR_PRIMARY_GREEN, COLOR_SHADOW } from "../../constants/colors";

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
          border: `1px solid ${COLOR_SHADOW}`,
          boxShadow: `3px 3px 0px ${COLOR_SHADOW}`,
        },

        ...(isActive
          ? {
              background: COLOR_PRIMARY_GREEN,
              boxShadow: "inset 3px 3px 0px #000000",
            }
          : {}),
      }}
    >
      {label}
    </Box>
  );
};
