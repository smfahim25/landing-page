"use client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/config/theme";
import ErrorBoundary from "@/components/ErrorBoundary";
import { AlertProvider } from "@/contexts/AlertProvider";
import StoreProvider from "@/store/StoreProvider";

export default function Providers({ children }) {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <StoreProvider>
          <AlertProvider>
            <CssBaseline />
            {children}
          </AlertProvider>
        </StoreProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
