// src/App.js
import React, { Suspense, useState } from "react";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Paper,
  LinearProgress,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

import theme from "./theme";
import useResponsive from "./hooks/useResponsive";
import Sidebar from "./components/Sidebar";
import HeaderTabs from "./components/HeaderTabs";
import ScrollTopButton from "./components/ScrollTopButton";

import { skills } from "./data/skills";
import { education } from "./data/education";
import { experience } from "./data/experience";
import { projects } from "./data/projects";

const About = React.lazy(() => import("./components/About"));
const Resume = React.lazy(() => import("./components/Resume"));
const Portfolio = React.lazy(() => import("./components/Projects"));
const Skills = React.lazy(() => import("./components/Skills"));
const Contact = React.lazy(() => import("./components/Contact"));
// import About from "./components/About";
// import Resume from "./components/Resume";
// import Portfolio from "./components/Projects";
// import Skills from "./components/Skills";
// import Contact from "./components/Contact";

const App = () => {
  const [tab, setTab] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { isMobile } = useResponsive();

  const handleTabChange = (e, newVal) => setTab(newVal);
  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        minHeight: "100vh",
        p: { xs: 2, sm: 3 },
      }}
    >
      <Box id="back-to-top-anchor" />

      {isMobile && (
        <AppBar position="static" sx={{ mb: 2 }}>
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }}>Taraka Ramudu</Box>
          </Toolbar>
        </AppBar>
      )}

      {isMobile ? (
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{ "& .MuiDrawer-paper": { width: 280 } }}
        >
          <Sidebar />
        </Drawer>
      ) : (
        <Box sx={{ width: "25%", mb: 2, position: "sticky", top: 2 }}>
          <Sidebar />
        </Box>
      )}

      <Paper
        sx={{
          width: { xs: "100%", lg: "73%" },
          ml: { lg: 2 },
          border: `solid 1px ${theme.palette.text.secondary}`,
          borderRadius: "30px",
          minHeight: "90vh",
        }}
      >
        <HeaderTabs value={tab} handleChange={handleTabChange} />
        <Suspense
          fallback={
            <Box sx={{ width: "100%", pt: 5 }}>
              <LinearProgress color="primary" />
            </Box>
          }
        >
          {tab === 0 && <About />}
          {tab === 1 && (
            <Resume education={education} experience={experience} />
          )}
          {tab === 2 && <Portfolio projects={projects} />}
          {tab === 3 && <Skills skills={skills} />}
          {tab === 4 && <Contact />}
        </Suspense>
      </Paper>

      <ScrollTopButton />
    </Container>
  );
};

export default App;
