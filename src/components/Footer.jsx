import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ py: 4, backgroundColor: "#333", color: "white", textAlign: "center" }}>
            <Container maxWidth="lg">
                <Typography variant="body1">
                    © {new Date().getFullYear()} Taraka Ramudu. Built with React & Material-UI.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
