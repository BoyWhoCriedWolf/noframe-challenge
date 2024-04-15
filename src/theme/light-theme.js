import { createTheme } from "@mui/material";
import { COLOR_PRIMARY_GREEN } from "../constants/colors";

export const LIGHT_THEME = createTheme({
  palette: { primary: { main: COLOR_PRIMARY_GREEN } },
  shape: { borderRadius: 0 },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    button: { textTransform: "none" },
  },
});
