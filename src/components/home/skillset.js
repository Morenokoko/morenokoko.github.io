import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        // duration: 1.5, // Adjust this value to control the animation duration (in seconds)
        ease: "easeInOut", // You can also adjust the easing function for a smoother effect
      },
    },
  };

const AnimatedItem = ({ children }) => {
  const [ref, inView] = useInView({
    // triggerOnce: true,
    threshold: 0.4, // Adjust this value based on how much of the element should be visible to trigger the animation
  });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

const HomeSkillset = () => {
  return (
    <Stack id="home-skillset" spacing={3} alignItems="stretch" sx={{pt:10}}>
      <Stack>
        <Typography variant="h2">Skillset</Typography>
        <Typography variant="body1">
          I have experience in building web and mobile applications during my
          time in school and in my previous employments.
        </Typography>
      </Stack>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 3 }}
        justifyContent="space-between"
      >
        <AnimatedItem>
          <Box
            sx={{
              borderBottom: "2px solid #E675E9",
              paddingBottom: "2px",
              display: "inline-block",
            }}
          >
            <Typography variant="h3">Languages</Typography>
          </Box>
          <Typography variant="body2">Javascript</Typography>
          <Typography variant="body2">HTML</Typography>
          <Typography variant="body2">CSS</Typography>
          <Typography variant="body2">Python</Typography>
          <Typography variant="body2">Dart</Typography>
          <Typography variant="body2">C#</Typography>
          <Typography variant="body2">PHP</Typography>
        </AnimatedItem>

        <AnimatedItem>
          <Box
            sx={{
              borderBottom: "2px solid #E675E9",
              paddingBottom: "2px",
              display: "inline-block",
            }}
          >
            <Typography variant="h3">Frameworks</Typography>
          </Box>
          <Typography variant="body2">React</Typography>
          <Typography variant="body2">Django</Typography>
          <Typography variant="body2">Next.js</Typography>
          <Typography variant="body2">Flutter</Typography>
          <Typography variant="body2">CodeIgniter</Typography>
        </AnimatedItem>

        <AnimatedItem>
          <Box
            sx={{
              borderBottom: "2px solid #E675E9",
              paddingBottom: "2px",
              display: "inline-block",
            }}
          >
            <Typography variant="h3">Tools</Typography>
          </Box>
          <Typography variant="body2">Git</Typography>
          <Typography variant="body2">Figma</Typography>
        </AnimatedItem>
      </Stack>
    </Stack>
  );
};

export default HomeSkillset;
