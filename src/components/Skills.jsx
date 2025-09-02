import React from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Chip,
} from "@mui/material";
import { skills } from "../data/skills";

const Skills = () => {
    return (
        <Box sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    component="h2"
                    gutterBottom
                    sx={{ textAlign: "center", mb: 6, fontWeight: "bold" }}
                >
                    Technical Skills
                </Typography>
                <Grid container spacing={4}>
                    {Object.entries(skills).map(([category, skillList]) => (
                        <Grid item xs={12} md={6} key={category}>
                            <Card sx={{ height: "100%", boxShadow: 3, "&:hover": { boxShadow: 6 } }}>
                                <CardContent sx={{ p: 3 }}>
                                    <Typography
                                        variant="h5"
                                        component="h3"
                                        gutterBottom
                                        sx={{ fontWeight: "bold", color: "primary.main" }}
                                    >
                                        {category}
                                    </Typography>
                                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                                        {skillList.map((skill) => (
                                            <Chip
                                                key={skill}
                                                label={skill}
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

export default Skills;
