import { createTheme } from "@mui/material";
import {
  COLOR_PRIMARY_BACKGROUND,
  COLOR_PRIMARY_BLACK,
  COLOR_PRIMARY_GREEN,
  COLOR_PRIMARY_PURPLE,
} from "../constants/colors";

export const DARK_THEME = createTheme({
  palette: {
    mode: "dark",
    primary: { main: COLOR_PRIMARY_GREEN },
    secondary: { main: COLOR_PRIMARY_PURPLE },
    common: { black: COLOR_PRIMARY_BLACK, white: COLOR_PRIMARY_BACKGROUND },
  },
  shape: { borderRadius: 0 },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: 14,
    body1: { fontSize: "14px", lineHeight: "20px" },
    button: { textTransform: "none" },
  },
});
