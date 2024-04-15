import React from "react";
import { MenuButton } from "./MenuButton";
import { Grid } from "@mui/material";

const Menu = () => {
  return (
    <Grid container alignItems={"center"}>
      {[
        { label: "Markets", path: "/markets" },
        { label: "earn", path: "/earn" },
        { label: "Dashboard", path: "/" },
        { label: "Redeem", path: "/redeem" },
      ].map((item, itemIndex) => {
        return (
          <Grid item key={itemIndex}>
            <MenuButton label={item?.label ?? ""} path={item?.path ?? ""} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Menu;
