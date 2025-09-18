import React from "react";
import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Paper,
  Button,
} from "@mui/material";
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  Cake as CakeIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";
import theme from "../theme";
import avatar from "../assets/avatar.png";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import useResponsive from "../hooks/useResponsive";
import DownloadIcon from "@mui/icons-material/Download";

// reusable icon style
const iconStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 40,
  height: 40,
  borderRadius: "10px",
  boxShadow: "0px 4px 10px rgba(220, 213, 213, 0.25)",
  backgroundColor: "background.paper",
};

const contactItems = [
  {
    icon: <DownloadIcon color="primary" />,
    text: "Download Resume",
    link: "/resume.pdf",
    isDownload: true, // flag to know it's a download button
  },
  {
    icon: <EmailIcon color="primary" />,
    text: "taraka.ram0123@gmail.com",
    link: "mailto:taraka.ram0123@gmail.com",
  },
  {
    icon: <PhoneIcon color="primary" />,
    text: "+91 9206536107",
    link: "tel:+919206536107",
  },
  {
    icon: <CakeIcon color="primary" />,
    text: "16 September, 1996",
  },
  {
    icon: <LocationIcon color="primary" />,
    text: "Hyderabad, India",
  },
];

const socialItems = [
  { icon: <LinkedInIcon />, link: "https://www.linkedin.com/in/tarak-ram/" },
  { icon: <GitHubIcon />, link: "https://github.com/TarakRam0123" },
];

const Sidebar = () => {
  const { isMobile } = useResponsive();
  return (
    <Paper
      sx={{
        borderRadius: "30px",
        padding: "30px",
        minHeight: isMobile ? "70vh" : "90vh",
        border: `solid 1px ${theme.palette.text.secondary}`,
        display: "flex",
        flexDirection: "column",
        justifyContent: isMobile ? "space-evenly" : "space-between",
      }}
    >
      {/* Avatar and Name */}
      <Box display="flex" alignItems="center" mb={4}>
        <Avatar src={avatar} sx={{ width: 80, height: 80, borderRadius: 2 }} />
        <Box ml={2}>
          <Typography variant="h6">Taraka Ramudu</Typography>
          <Typography variant="body2" color="primary">
            Full Stack Developer
          </Typography>
        </Box>
      </Box>

      {/* Contact Items */}
      <Box mb={4}>
        {contactItems.map((item, index) => (
          <Box display="flex" alignItems="center" mb={2} gap={2} key={index}>
            <Paper sx={iconStyle}>{item.icon}</Paper>
            {item.isDownload ? (
              <Button
                color="inherit"
                component="a"
                href={item.link}
                download="Taraka_Ramudu_Resume.pdf"
                sx={{ textTransform: "none", p: 1 }}
              >
                {item.text}
              </Button>
            ) : item.link ? (
              <Typography variant="body2">
                <a
                  href={item.link}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {item.text}
                </a>
              </Typography>
            ) : (
              <Typography variant="body2">{item.text}</Typography>
            )}
          </Box>
        ))}
      </Box>

      {/* Social Icons */}
      <Box display="flex" justifyContent="center" gap={1}>
        {socialItems.map((social, index) => (
          <IconButton
            color="primary"
            key={index}
            component="a"
            href={social.link}
            target="_blank"
          >
            {social.icon}
          </IconButton>
        ))}
      </Box>
    </Paper>
  );
};

export default Sidebar;
