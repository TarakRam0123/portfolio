import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Chip,
    Box,
    Grid,
    Container
} from "@mui/material";
import { projects } from "../data/projects";

const Projects = () => {
    return (
        <Box id="project" sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
            <Container maxWidth="lg">
                {/* Section Heading */}
                <Typography
                    variant="h3"
                    component="h2"
                    gutterBottom
                    sx={{
                        textAlign: "center",
                        mb: 6,
                        fontWeight: "bold",
                        color: "#333",
                    }}
                >
                    Projects
                </Typography>

                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    borderRadius: "16px",
                                    boxShadow: 3,
                                    "&:hover": {
                                        boxShadow: 6,
                                        transform: "translateY(-5px)",
                                        transition: "all 0.3s ease",
                                    },
                                }}
                            >
                                <CardContent sx={{ p: 3 }}>
                                    {/* Project Title */}
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: "bold",
                                            color: "primary.main",
                                            mb: 1,
                                        }}
                                    >
                                        {project.title}
                                    </Typography>

                                    {/* Project Description */}
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 2 }}
                                    >
                                        {project.description}
                                    </Typography>

                                    {/* Tech Stack */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: 1,
                                        }}
                                    >
                                        {project.tech.map((techItem, idx) => (
                                            <Chip
                                                key={idx}
                                                label={techItem}
                                                variant="outlined"
                                                sx={{
                                                    "&:hover": {
                                                        backgroundColor: "primary.light",
                                                        color: "white",
                                                    },
                                                    transition: "all 0.3s ease",
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Projects;
