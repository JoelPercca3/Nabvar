// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      ml: 1440,
      xl: 1536,
    },
  },
});
export default theme;
