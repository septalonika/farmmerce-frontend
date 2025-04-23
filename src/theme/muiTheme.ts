"use client";
import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#404040",
    },
    secondary: {
      main: "#c0c0c0",
    },
    common: {
      white: "#ffffff",
      black: "#000000",
    },
    background: {
      default: "#ffffff", // White
      paper: "#808080", // Dark Gray
    },
    text: {
      primary: "#000000", // Black
      secondary: "#808080", // Gray
    },
  },
});

export default muiTheme;
