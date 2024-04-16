import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const MenuButton = ({
  color = "primary" | "secondary",
  label = "",
  path = "",
  fullWidth = false,
  isActive = false,
  children = null,
  outlined = false,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };
  return (
    <Box
      onClick={handleClick}
      sx={{
        px: 1.5,
        py: 0.75,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        cursor: "pointer",
        border: outlined ? `solid 1px` : "solid transparent 1px",

        ":hover": {
          /* black */
          border: (th) => `1px solid ${th.palette.common.black}`,
          boxShadow: (th) => `3px 3px 0px ${th.palette.common.black}`,
        },

        ...(isActive
          ? {
              background: (th) =>
                color === "secondary"
                  ? th.palette.secondary.main
                  : th.palette.primary.main,
              boxShadow: "inset 3px 3px 0px #000000",
            }
          : {}),

        ...(fullWidth ? { flexGrow: 1, width: "100%" } : {}),
      }}
    >
      {children ?? label}
    </Box>
  );
};
