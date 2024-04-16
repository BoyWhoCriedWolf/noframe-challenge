import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Stack sx={{ minHeight: "100vh" }} justifyContent={"space-between"}>
      <Header />
      <Box
        flexGrow={1}
        sx={{ pt: 1, display: "flex", flexDirection: "column" }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Stack>
  );
};

export default Layout;
