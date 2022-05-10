import { createTheme } from '@mui/material/styles';

export const mainTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: 20,
          padding: "6px 36px"
        },
      },
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
        disableElevation: true,
        disableFocusRipple: true,
      }
    }
  },
  palette: {
    primary: {
      main: "#425D50",
    },
    secondary: {
      main: "#1B4D82",
    },
    background: {
      default: "white",
      paper: "white",
    },
    text: {
      primary: "#7B7B7C",
      secondary: "#FAFAFA",
    },
  },
  typography: {
    fontFamily: [
      "Poppins",
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontSize: "64px",
      fontWeight: 600,
      fontFamily: "Poppins"
    },
    h2: {
      fontSize: "24px",
      fontWeight: 600,
      fontFamily: "Poppins"
    },
    h3: {
      fontSize: "19px",
      fontWeight: 400,
      fontFamily: "Poppins"
    },
    h4: {
      fontSize: "18px",
      fontWeight: 400,
      fontFamily: "Poppins"
    },
    h5: {
      fontSize: "16px",
      fontWeight: 400,
      fontFamily: "Poppins"
    },
    h6: {},
    caption: {},
    body1: {
      fontSize: "16px",
      fontFamily: "Poppins"
    },
    body2: {
      fontSize: "12px",
      fontFamily: "Poppins"
    },
    button: {
      fontSize: "16px",
      textTransform: "none",
      fontWeight: "normal",
      boxShadow: "none"
    },
  },
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1128,
      xl: 1920,
    },
  },
});
