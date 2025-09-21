import React from "react";
import { Card, Typography, Box, Tooltip } from "@mui/material";

import { skills } from "../data/skills";

const Skills = () => {
  return (
    <Card
      sx={{
        p: 3,
        mb: 3,
        boxShadow: 6,
        borderRadius: 3,
        bgcolor: "background.paper",
      }}
    >
      <Typography variant="h4" gutterBottom color="primary">
        Skills
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
          gap: 3,
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        {skills.map((skill, i) => (
          <Tooltip title={skill.name} key={i} arrow>
            <Box
              sx={{
                p: 1.5,
                borderRadius: 2,
                boxShadow: 3,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.2)",
                  boxShadow: 6,
                },
              }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="skill-icon"
                style={{ width: 50, height: 50 }}
                loading="lazy"
              />
            </Box>
          </Tooltip>
        ))}
      </Box>
    </Card>
  );
};

export default Skills;
