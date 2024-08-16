"use client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/config/theme";
import StoreProvider from "@/store/StoreProvider";

export default function Providers({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider>
        <CssBaseline />
        {children}
      </StoreProvider>
    </ThemeProvider>
  );
}
