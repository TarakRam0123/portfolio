import React from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Chip,
    Link,
} from "@mui/material";
import experienceData from "../data/experienceData.json"; // Adjust path as needed

const Experience = () => {
    return (
        <Box id="experience" sx={{ py: 8 }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    component="h2"
                    gutterBottom
                    sx={{ textAlign: "center", mb: 6, fontWeight: "bold" }}
                >
                    Work Experience
                </Typography>
                <Grid container spacing={4}>
                    {experienceData.map((exp, index) => (
                        <Grid item xs={12} key={index}>
                            <Card sx={{ boxShadow: 4, "&:hover": { boxShadow: 8 } }}>
                                <CardContent sx={{ p: 4 }}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "start",
                                            mb: 2,
                                        }}
                                    >
                                        <Box>
                                            <Typography
                                                variant="h5"
                                                gutterBottom
                                                sx={{ fontWeight: "bold" }}
                                            >
                                                {exp.title}
                                            </Typography>
                                            <Link
                                                href={exp.companyUrl}
                                                target="_blank"
                                                rel="noopener"
                                                underline="hover"
                                            >
                                                <Typography
                                                    variant="h6"
                                                    color="primary"
                                                    gutterBottom
                                                >
                                                    {exp.company}
                                                </Typography>
                                            </Link>
                                        </Box>
                                        <Chip label={exp.duration} color={exp.chipColor} />
                                    </Box>
                                    <Box component="ul" sx={{ pl: 2 }}>
                                        {exp.responsibilities.map((item, idx) => (
                                            <Typography key={idx} component="li" sx={{ mb: 1 }}>
                                                {item}
                                            </Typography>
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

export default Experience;
