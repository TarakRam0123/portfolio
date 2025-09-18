import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { Visibility as VisibilityIcon } from "@mui/icons-material";

const Projects = ({ projects }) => {
  return (
    <Card sx={{ p: 2, mb: 2 }}>
      <Typography variant="h4" gutterBottom color="primary">
        Projects
      </Typography>

      <Grid container spacing={2}>
        {projects.map((project, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "rgba(0,0,0,0.5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    "&:hover": { opacity: 1 },
                  }}
                >
                  <IconButton color="primary">
                    <VisibilityIcon />
                  </IconButton>
                </Box>
              </Box>
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.category}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default Projects;
