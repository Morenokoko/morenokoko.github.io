import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import girloutline from "../../assets/images/girl-outline.gif";

const HomeIntro = () => {
  const handleScrollToSkillset = () => {
    const skillsetSection = document.getElementById("home-skillset");
    if (skillsetSection) {
      skillsetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        pt: 4,
        height: { xs: "auto", sm: "75vh" },
        display: { xs: "block", sm: "flex" },
        alignItems: { xs: "normal", sm: "center" },
      }}
      disableGutters
    >
      <Grid container spacing={2} alignItems="flex-start">
        <Grid xs={12} sm={8} sx={{ display: { xs: "block", sm: "none" } }}>
          {/* Text displayed first on mobile and second on larger screens */}
          <Typography variant="h4">Hello, I'm</Typography>
          <Typography variant="h1" sx={{ mb: 2 }}>
            Koko
          </Typography>
        </Grid>
        <Grid xs={12} sm={4} sx={{ display: { xs: "block", sm: "none" } }}>
          {/* Image displayed second on mobile and first on larger screens */}
          <img src={girloutline} alt="girl outline" style={{ width: "100%" }} />
        </Grid>
        <Grid xs={12} sm={8} sx={{ display: { xs: "block", sm: "none" } }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            An aspiring full stack developer and Computer Science undergraduate.
            I have a passion for learning and a keen interest in exploring
            cutting-edge technologies. Embracing every opportunity to grow and
            contribute to innovative projects.
          </Typography>
          <Button
            onClick={handleScrollToSkillset}
            sx={{
              color: "white",
              padding: 0,
              minWidth: "unset",
              minHeight: "unset",
              background: "none",
              boxShadow: "none",
            }}
          >
            <Box
              sx={{
                borderBottom: "2px solid #E675E9",
                paddingBottom: "2px",
                display: "inline-block",
              }}
            >
              <Typography variant="h6">Scroll down to learn more</Typography>
            </Box>
          </Button>
        </Grid>

        <Grid sm sx={{ display: { xs: "none", sm: "block" } }}>
          {/* Text displayed first on mobile and second on larger screens */}
          <Typography variant="h4">Hello, I'm</Typography>
          <Typography variant="h1" sx={{ mb: 2 }}>
            Koko
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            An aspiring full stack developer and Computer Science undergraduate.
            I have a passion for learning and a keen interest in exploring
            cutting-edge technologies. Embracing every opportunity to grow and
            contribute to innovative projects.
          </Typography>
          <Button
            onClick={handleScrollToSkillset}
            sx={{
              color: "white",
              padding: 0,
              minWidth: "unset",
              minHeight: "unset",
              background: "none",
              boxShadow: "none",
              "&:hover": {
                color: "#E675E9",
              },
            }}
          >
            <Box
              sx={{
                borderBottom: "2px solid #E675E9",
                paddingBottom: "2px",
                display: "inline-block",
              }}
            >
              <Typography variant="h6">Scroll down to learn more</Typography>
            </Box>
          </Button>
        </Grid>
        <Grid sm="auto" sx={{ display: { xs: "none", sm: "block" } }}>
          {/* Image displayed second on mobile and first on larger screens */}
          <img src={girloutline} alt="girl outline" style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeIntro;
