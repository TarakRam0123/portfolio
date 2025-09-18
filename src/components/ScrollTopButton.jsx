import React from "react";
import { Zoom, Box, Fab, useScrollTrigger } from "@mui/material";
import { ArrowUpward as ArrowUpwardIcon } from "@mui/icons-material";

const ScrollTopButton = () => {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 });
  const handleClick = () => {
    const anchor = document.querySelector("#back-to-top-anchor");
    if (anchor) anchor.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 1000 }}
      >
        <Fab color="primary" size="small">
          <ArrowUpwardIcon />
        </Fab>
      </Box>
    </Zoom>
  );
};

export default ScrollTopButton;
