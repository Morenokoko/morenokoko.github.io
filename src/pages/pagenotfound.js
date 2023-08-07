import React from "react";
import { Container, Typography } from "@mui/material";

const Pagenotfound = () => {
  return (
    <Container maxWidth="md" sx={{ pt: 4, pb: 4 }}>
      <Typography>Oops, sorry!</Typography>
      <Typography>The page you are looking for is not found or is in development!</Typography>
    </Container>
  );
};

export default Pagenotfound;