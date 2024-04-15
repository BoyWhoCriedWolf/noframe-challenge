import { ThemeProvider } from "@mui/material";
import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./roots/router";
import THEMES from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={THEMES.LIGHT}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
