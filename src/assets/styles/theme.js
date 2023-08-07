import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
      background: {
        default: "#000000", // Set the default background color to black (#000000)
      },
      text: {
        primary: "#ffffff", // Set the default font color to white (#ffffff)
        info: "#9A9A9A",
        secondary: "#E675E9",
      },
    },
    typography: {
      fontFamily: "monospace", // Set monospace as the default font family
      h1: {
        fontSize: "40vw",
        fontStyle: "italic",
        color: "#ffffff",
        "@media (min-width:600px)": {
          // Override font size for screens sm or larger
          fontSize: "128px",
        },
      },
      h2: {
        fontSize: "40px",
        fontWeight: "800", // Set the font weight to extrabold
        fontStyle: "italic",
        color: "#E675E9",
      },
      h3: {
        fontSize: "32px",
        fontWeight: "bold",
        fontStyle: "italic",
        color: "#ffffff",
      },
      h4: {
        fontSize: "24px",
        fontWeight: "600", // Set the font weight to semibold
        fontStyle: "italic",
        color: "#ffffff",
      },
      body1: {
        fontSize: "20px",
        color: "#9A9A9A",
      },
      body2: {
        fontSize: "20px",
        color: "#ffffff",
      },
      subtitle1: {
        fontSize: "16px",
        fontWeight: "bold",
        color: "#ffffff",
      },
    },
    components: {
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: "white", // Set the IconButton color to white
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            color: "white", // Set the IconButton color to white
          },
        },
      },
    },
  });