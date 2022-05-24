import { createTheme } from '@mui/material/styles';

export const mainTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-input": {
            color: "#000000"
          }
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "* > input": {
            border: '1px solid black'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          border: "none"
        }
      }
    },
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
      main: "#004987",
    },
    secondary: {
      main: "#E53935",
    },
    background: {
      default: "white",
      paper: "white",
    },
    text: {
      primary: "#000000",
      secondary: "#004987",
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
      "Mulish",
      "Menlo",
      "Monaco",
      "Consolas",
      'Courier New',
    ].join(","),
    h1: {
      fontSize: "35px",
      fontWeight: 700,
      fontFamily: "Mulish",
    },
    h2: {
      fontSize: "30px",
      fontWeight: 400,
      fontFamily: "Mulish"
    },
    h3: {
      fontSize: "20px",
      fontWeight: 400,
      fontFamily: "Mulish"
    },
    h4: {
      fontSize: "18px",
      fontWeight: 400,
      fontFamily: "Mulish"
    },
    h5: {
      fontSize: "16px",
      fontWeight: 400,
      fontFamily: "Mulish"
    },
    h6: {},
    caption: {},
    body1: {
      fontSize: "14px",
      fontWeight: 400,
      fontFamily: "Mulish"
    },
    body2: {
      fontSize: "14px",
      fontWeight: 700,
      fontFamily: "Mulish"
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
