import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Homepage from "./pages/homepage";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { theme } from "./assets/styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <Homepage />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
