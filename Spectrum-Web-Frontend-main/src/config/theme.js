import COLORS from "@/utils/constants/COLORS";
import TYPOGRAPHY from "@/utils/constants/TYPOGRAPHY";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontWeights: TYPOGRAPHY.fontWeights,
    sizes: TYPOGRAPHY.sizes,
    responsiveSizes: TYPOGRAPHY.responsiveSizes,
  },
  palette: {
    primary: {
      main: COLORS.primary.main,
      dark: COLORS.primary.dark,
    },
    neutral: {
      main: COLORS.neutral.grey3,
      dark: COLORS.neutral.grey2,
      contrastText: COLORS.neutral.main,
    },
    basic: {
      main: COLORS.neutral.main,
      dark: COLORS.primary.dark,
      contrastText: COLORS.neutral.main,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  // other theme settings
});

export default theme;
