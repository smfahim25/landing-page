"use client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/config/theme";
import StoreProvider from "@/store/StoreProvider";
import { GeneralProvider } from "@/contexts/GeneralContext";

export default function Providers({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider>
        <GeneralProvider>
          <CssBaseline />
          {children}
        </GeneralProvider>
      </StoreProvider>
    </ThemeProvider>
  );
}
