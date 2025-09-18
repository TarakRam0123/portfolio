// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FFD700", // Golden
      default: "#ffd900a3",
    },
    secondary: {
      main: "#00bfff62", // Optional secondary color
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    text: {
      primary: "#ffffffe0",
      secondary: "#cccccc6e",
      default: "#ffffffb1",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

export default theme;
