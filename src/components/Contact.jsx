import React, { useState } from "react";
import {
  Box,
  Card,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [snack, setSnack] = useState({
    open: false,
    type: "success",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_i7bfbpk", // your EmailJS service ID
        "template_4ubvgrm", // your EmailJS template ID
        formData, // form data
        "7_nXR6n58gDxgMT9E" // your EmailJS public key
      )
      .then(
        (result) => {
          setSnack({
            open: true,
            type: "success",
            message: "Message sent successfully!",
          });
          setFormData({ user_name: "", user_email: "", message: "" });
        },
        (error) => {
          setSnack({
            open: true,
            type: "error",
            message: "Failed to send message. Please try again.",
          });
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <Card sx={{ p: 3, borderRadius: 3, minHeight: "60vh" }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Contact Me
      </Typography>

      <Box mb={3}>
        <Box display="flex" alignItems="center" mb={1}>
          <Email color="primary" sx={{ mr: 1 }} />
          <Typography>taraka.ram0123@gmail.com</Typography>
        </Box>
        <Box display="flex" alignItems="center" mb={1}>
          <Phone color="primary" sx={{ mr: 1 }} />
          <Typography>+91 9206536107</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <LocationOn color="primary" sx={{ mr: 1 }} />
          <Typography>Hyderabad, India</Typography>
        </Box>
      </Box>

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Your Name"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Your Email"
          name="user_email"
          type="email"
          value={formData.user_email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mt: 2 }}
          disabled={sending}
        >
          {sending ? "Sending..." : "Send Message"}
        </Button>
      </Box>

      <Snackbar
        open={snack.open}
        autoHideDuration={4000}
        onClose={() => setSnack({ ...snack, open: false })}
      >
        <Alert severity={snack.type} sx={{ width: "100%" }}>
          {snack.message}
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default Contact;
