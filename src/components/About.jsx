import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { responsibilities } from "../data/experience";

const About = () => (
  <Card sx={{ p: 2, mb: 2 }}>
    <Typography variant="h4" gutterBottom color="primary">
      About me
    </Typography>
    <Typography paragraph color="text.default">
      Software Developer with 3+ years of experience in crafting scalable,
      high-performance web applications. Skilled in React.js, Redux, React
      Router, Material UI, JavaScript, HTML, CSS, and Bootstrap, with knowledge
      of backend technologies like Java, Spring Boot, and Express.js, delivering
      seamless and responsive user experiences.
    </Typography>
    <Typography variant="h4" gutterBottom color="primary">
      Responsibilites
    </Typography>
    <Box component="ul" sx={{ pl: 3, mt: 2 }}>
      {responsibilities.map((item, index) => (
        <Box
          component="li"
          key={index}
          sx={{ mb: 1, listStyleType: "disc", color: "text.primary" }}
        >
          <Typography variant="body2" color="text.default">
            {item}
          </Typography>
        </Box>
      ))}
    </Box>
  </Card>
);

export default About;
