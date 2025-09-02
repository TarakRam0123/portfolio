import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { Email, Phone, LinkedIn, GitHub } from "@mui/icons-material";

const Contact = () => {
    return (
        <Box sx={{ py: 8, backgroundColor: "#1976d2", color: "white" }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    component="h2"
                    gutterBottom
                    sx={{ textAlign: "center", mb: 4, fontWeight: "bold" }}
                >
                    Let's Connect
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ textAlign: "center", mb: 4, opacity: 0.9 }}
                >
                    I'm always interested in new opportunities and exciting projects.
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 3,
                        flexWrap: "wrap",
                    }}
                >
                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<Email />}
                        sx={{
                            backgroundColor: "rgba(255,255,255,0.1)",
                            "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
                            backdropFilter: "blur(10px)",
                        }}
                        href="mailto:taraka.ram0123@gmail.com"
                    >
                        Send Email
                    </Button>
                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<Phone />}
                        sx={{
                            backgroundColor: "rgba(255,255,255,0.1)",
                            "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
                            backdropFilter: "blur(10px)",
                        }}
                        href="tel:+919206536107"
                    >
                        Call Now
                    </Button>
                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<LinkedIn />}
                        sx={{
                            backgroundColor: "rgba(255,255,255,0.1)",
                            "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
                            backdropFilter: "blur(10px)",
                        }}
                        href="https://www.linkedin.com/in/taraka-ramudu"
                        target="_blank"
                    >
                        LinkedIn
                    </Button>
                    <Button
                        variant="contained"
                        size="large"
                        startIcon={<GitHub />}
                        sx={{
                            backgroundColor: "rgba(255,255,255,0.1)",
                            "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
                            backdropFilter: "blur(10px)",
                        }}
                        href="https://github.com/TarakRam0123"
                        target="_blank"
                    >
                        GitHub
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Contact;
