import React from "react";
import { Box, Typography, Divider, List, ListItem, ListItemText } from "@mui/material";

const DrawerMenu = ({ navigationItems, scrollToSection }) => {
    return (
        <Box sx={{ width: 250 }}>
            <Typography variant="h6" sx={{ p: 2, fontWeight: "bold" }}>
                Navigation
            </Typography>
            <Divider />
            <List>
                {navigationItems.map((item) => (
                    <ListItem
                        button
                        key={item.text}
                        onClick={() => scrollToSection(item.id)}
                        sx={{
                            "&:hover": { backgroundColor: "primary.light", color: "white" },
                        }}
                    >
                        <Box sx={{ mr: 2 }}>{item.icon}</Box>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default DrawerMenu;
