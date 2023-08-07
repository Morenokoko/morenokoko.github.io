import React from "react";
import { Container, Typography, Stack, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer style={{ marginTop: "auto" }}>
      <Container maxWidth="md" sx={{ pt: 4, pb: 4 }}>
        <Stack
          spacing={3}
          direction="row"
          justifyContent="space-between"
          color="primary"
          alignItems="center"
        >
          <Typography variant="subtitle1">
            Designed and developed by ©Moreno.K 2023
          </Typography>
          <IconButton
            aria-label="linkedin"
            sx={{
              "& .MuiIconButton-root": {
                color: "white", // Change the color of the IconButton to white
              },
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Container>
    </footer>
  );
};

export default Footer;
