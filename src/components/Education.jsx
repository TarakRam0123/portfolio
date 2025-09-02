import React from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Divider,
    Chip,
    Link,
} from "@mui/material";

const Education = () => {
    return (
        <Box id="education" sx={{ py: 8 }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    component="h2"
                    gutterBottom
                    sx={{ textAlign: "center", mb: 6, fontWeight: "bold" }}
                >
                    Education & Certifications
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={8}>
                        <Card sx={{ boxShadow: 4, "&:hover": { boxShadow: 8 } }}>
                            <CardContent sx={{ p: 4 }}>
                                <Typography
                                    variant="h5"
                                    component="h3"
                                    gutterBottom
                                    sx={{ fontWeight: "bold" }}
                                >
                                    B.Tech in Electronics and Communications Engineering
                                </Typography>
                                {/* Clickable Institute Link */}
                                <Typography variant="h6" gutterBottom>
                                    <Link
                                        href="https://www.citm.org.in/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        color="primary"
                                        underline="hover"
                                        sx={{ fontWeight: "bold" }}
                                    >
                                        Camellia Institute of Technology &amp; Management
                                    </Link>
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        mb: 2,
                                    }}
                                >
                                    <Typography variant="body1">2019 - 2022</Typography>
                                    <Chip label="CGPA: 8.97" color="success" />
                                </Box>
                                <Divider sx={{ my: 2 }} />
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    sx={{ fontWeight: "bold" }}
                                >
                                    Certifications
                                </Typography>
                                <Chip
                                    label="Java Full Stack Development - J-Spiders"
                                    color="primary"
                                    variant="outlined"
                                    sx={{ mt: 1 }}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Education;
