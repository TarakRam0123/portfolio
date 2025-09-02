import React, { useState } from "react";
import { Box, Drawer, useTheme, useMediaQuery } from "@mui/material";
import Navbar from "./components/Navbar";
import DrawerMenu from "./components/DrawerMenu";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { navigationItems } from "./data/navigation";

const Portfolio = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
        setMobileOpen(false);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Navbar
                isMobile={isMobile}
                handleDrawerToggle={handleDrawerToggle}
                navigationItems={navigationItems}
                scrollToSection={scrollToSection}
            />

            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
            >
                <DrawerMenu
                    navigationItems={navigationItems}
                    scrollToSection={scrollToSection}
                />
            </Drawer>

            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
            <Footer />
        </Box>
    );
};

export default Portfolio;
