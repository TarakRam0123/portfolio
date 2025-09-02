import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DownloadIcon from "@mui/icons-material/Download";

const Navbar = ({ isMobile, handleDrawerToggle, navigationItems, scrollToSection }) => {
    // Path to your resume file (keep the PDF in the public folder)
    // const resumeLink = "/Taraka_Ramudu_Resume.pdf";

    // const handleDownload = () => {
    //     const link = document.createElement("a");
    //     link.href = resumeLink;
    //     link.setAttribute("download", "Taraka_Ramudu_Resume.pdf");
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // };

    return (
        <AppBar position="fixed" sx={{ backgroundColor: "#1976d2" }}>
            <Toolbar>
                {/* Mobile menu button */}
                {isMobile && (
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                )}

                {/* Logo / Name */}
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, fontWeight: "bold", cursor: "pointer" }}
                >
                    Taraka Ramudu
                </Typography>

                {/* Desktop navigation buttons */}
                {!isMobile && (
                    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                        {navigationItems.map((item) => (
                            <Button
                                key={item.text}
                                color="inherit"
                                onClick={() => scrollToSection(item.id)}
                                sx={{ "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" } }}
                            >
                                {item.text}
                            </Button>
                        ))}

                        {/* Download Resume Button */}
                        <Button
                            color="inherit"
                            component="a"
                            href="/resume.pdf"
                            download="Taraka_Ramudu_Resume.pdf"
                            startIcon={<DownloadIcon />}
                            sx={{
                                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                            }}
                        >
                            Download Resume
                        </Button>
                    </Box>
                )}

                {/* Download Resume Button for Mobile */}
                {isMobile && (
                    <IconButton
                        color="inherit"
                        title="Download Resume"
                        component="a"
                        href="/resume.pdf"
                        download="Taraka_Ramudu_Resume.pdf"
                        sx={{ ml: 1 }}
                    >
                        <DownloadIcon />
                    </IconButton>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
