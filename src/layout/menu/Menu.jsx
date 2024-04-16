import React from "react";
import { MenuButton } from "./MenuButton";
import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";

const Menu = () => {
  const { pathname } = useLocation();

  return (
    <Grid container alignItems={"center"}>
      {[
        { label: "Markets", path: "/markets" },
        { label: "earn", path: "/earn" },
        { label: "Dashboard", path: "/" },
        { label: "Redeem", path: "/redeem" },
      ].map((item, itemIndex) => {
        const isActive = pathname === item?.path;
        return (
          <Grid item key={itemIndex}>
            <MenuButton
              isActive={isActive}
              label={item?.label ?? ""}
              path={item?.path ?? ""}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Menu;
