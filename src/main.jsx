import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Mor & Pembe Tema
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#9c27b0", // mor
    },
    secondary: {
      main: "#e91e63", // pembe
    },
    background: {
      default: "#1a001f", // koyu mor arka plan
      paper: "#2a0034",   // kartların rengi
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
