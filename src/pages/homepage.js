import React from "react";
import { Container, Stack } from "@mui/material";
import HomeIntro from "../components/home/intro";
import HomeSkillset from "../components/home/skillset";
import HomeRecentWorks from "../components/home/recentworks";
import HomeContact from "../components/home/contact";

const Homepage = () => {
  return (
    <Container maxWidth="md" sx={{ pt: 4, pb: 4 }}>
      <Stack spacing={{ xs: 10, sm: 20 }}>
        <HomeIntro />
        <HomeSkillset />
        <HomeRecentWorks />
        <HomeContact/>
      </Stack>
    </Container>
  );
};

export default Homepage;