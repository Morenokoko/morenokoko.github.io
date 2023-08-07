import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/images/mk-logo.png";
import {
  Stack,
  Box,
  IconButton,
  Typography,
  Container,
  Button,
} from "@mui/material";
import useScrollDirection from "../hooks/listen_to_scroll";

const pages = [
  { page: "Work", link: "/work" },
  { page: "Contact", link: "/" },
];

function ResponsiveAppBar() {
  const { scrollDirection, isAtTop } = useScrollDirection();

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavMenuClicked = () => {
    // setAnchorElNav(event.currentTarget);
    setIsNavOpen(!isNavOpen);
  };

  const handleButtonClicked = async (page) => {
    setIsNavOpen(false);
    if (page.page === "Contact") {
      await new Promise((resolve) => setTimeout(resolve, 300));
      // link to contact section in homepage
      const contactSection = document.getElementById("home-contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        pt: 2,
        pb: 0,
        position: "sticky",
        top: 0,
        zIndex: 9999, // Set a high z-index value to make the navbar float over other elements
        display:
          scrollDirection === "down"
            ? "none"
            : isAtTop && window.innerWidth <= 600
            ? "block"
            : "block",
        backgroundColor:
          scrollDirection === "down"
            ? "transparent"
            : isAtTop && window.innerWidth <= 600
            ? "black"
            : "black",
        height:
          scrollDirection === "down"
            ? "0px"
            : isAtTop && window.innerWidth <= 600
            ? "60px"
            : "60px",
        transition: "background-color 0.5s ease, height 0.5s ease",
      }}
    >
      <Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ backgroundColor: "black" }}
        >
          <IconButton
            sx={{ display: { xs: "none", sm: "initial" }, padding: 0 }}
            onClick={() => {
              setIsNavOpen(false);
            }}
          >
            <img
              src={logo}
              alt="girl outline"
              style={{ maxWidth: "40px", objectFit: "contain" }}
            />
          </IconButton>
          <IconButton
            sx={{ display: { xs: "initial", sm: "none" }, padding: 0 }}
            onClick={() => {
              setIsNavOpen(false);
            }}
          >
            <img
              src={logo}
              alt="girl outline"
              style={{ maxWidth: "40px", objectFit: "contain" }}
            />
          </IconButton>

          <Box sx={{ display: { xs: "initial", sm: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleNavMenuClicked}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Stack
            direction="row"
            sx={{ display: { xs: "none", sm: "initial" } }}
          >
            {pages.map((page) => (
              <Button
                key={page.page}
                sx={{
                  color: "white",
                  "&:hover": {
                    color: "#E675E9",
                  },
                }}
                onClick={() => {
                  handleButtonClicked(page);
                }}
              >
                {page.page}
              </Button>
            ))}
          </Stack>
        </Stack>

        <Stack
          sx={{
            display:
              window.innerWidth <= 600
                ? isNavOpen
                  ? "initial"
                  : "none"
                : "none",
            transition: "display 0.5s",
          }}
        >
          {pages.map((page) => (
            <Box
              key={page.page}
              sx={{ backgroundColor: "black", p: 1 }}
              onClick={() => {
                handleButtonClicked(page);
              }}
            >
              <Typography textAlign="center" variant="subtitle1">
                {page.page}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
export default ResponsiveAppBar;
