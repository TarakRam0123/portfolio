import React from "react";
import { Tabs, Tab, Box, Paper } from "@mui/material";
import theme from "../theme";
import useResponsive from "../hooks/useResponsive";

const HeaderTabs = ({ value, handleChange }) => {
  const isMobile = useResponsive();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "end",
      }}
    >
      <Paper
        sx={{
          mb: 2,
          padding: 1,
          width: isMobile ? "100%" : "auto", // full width on mobile
          maxWidth: 500,
          //   width: isMobile ? "100%" : "",
          border: `solid 1px ${theme.palette.text.secondary}`,
          borderTopRightRadius: "30px", // right-top
          borderBottomLeftRadius: "30px", // left-bottom
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="navigation tabs"
          sx={{
            "& .MuiTab-root": { color: "#ccc" },
            "& .Mui-selected": { color: "#FFD700" },
          }}
        >
          <Tab label="About" />
          <Tab label="Resume" />
          <Tab label="Projects" />
          <Tab label="Skills" />
          <Tab label="Contact" />
        </Tabs>
      </Paper>
    </Box>
  );
};

export default HeaderTabs;
