import React from "react";
import { Box, Container, Typography, Avatar, Button } from "@mui/material";
import { Email, Phone, LinkedIn } from "@mui/icons-material";
import profilePic from "../assets/img.jpg"; // Ensure you have a profile picture in the specified path

const Hero = () => {
    return (
        <Box
            id="about"
            sx={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                pt: 12,
                pb: 8,
                textAlign: "center",
            }}
        >
            <Container maxWidth="lg">
                <Avatar
                    sx={{
                        width: 150,
                        height: 150,
                        mx: "auto",
                        mb: 3,
                        border: "4px solid white",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                    }}
                    src={profilePic}
                />
                <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                    sx={{ fontWeight: "bold", mb: 2 }}
                >
                    Taraka Ramudu
                </Typography>
                <Typography variant="h4" sx={{ mb: 3, opacity: 0.9 }}>
                    Software Developer
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ mb: 4, maxWidth: 800, mx: "auto", opacity: 0.8 }}
                >
                    Software Developer with 3+ years of experience in crafting scalable, high-performance web applications. Skilled in React.js, Redux, React Router, Material UI, JavaScript, HTML, CSS, and Bootstrap, with knowledge of backend technologies like Java, Spring Boot, and Express.js, delivering seamless and responsive user experiences.
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 2,
                        flexWrap: "wrap",
                        mb: 4,
                    }}
                >
                    <Button
                        variant="contained"
                        startIcon={<Phone />}
                        sx={{
                            backgroundColor: "rgba(255,255,255,0.2)",
                            "&:hover": { backgroundColor: "rgba(255,255,255,0.3)" },
                        }}
                        href="tel:+919206536107"
                    >
                        +91 9206536107
                    </Button>
                    <Button
                        variant="contained"
                        startIcon={<Email />}
                        sx={{
                            backgroundColor: "rgba(255,255,255,0.2)",
                            "&:hover": { backgroundColor: "rgba(255,255,255,0.3)" },
                        }}
                        href="mailto:taraka.ram0123@gmail.com"
                    >
                        Email
                    </Button>
                    <Button
                        variant="contained"
                        startIcon={<LinkedIn />}
                        sx={{
                            backgroundColor: "rgba(255,255,255,0.2)",
                            "&:hover": { backgroundColor: "rgba(255,255,255,0.3)" },
                        }}
                        href="https://www.linkedin.com/in/taraka-ramudu"
                        target="_blank"
                    >
                        LinkedIn
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
