import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Homepage from "./pages/homepage";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Pagenotfound from "./pages/pagenotfound";
import { theme } from "./assets/styles/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/work" element={<Pagenotfound />} />
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
