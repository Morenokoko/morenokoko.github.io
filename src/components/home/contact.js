import React, { useState, useRef } from "react";
import {
  Typography,
  Stack,
  TextField,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import emailjs from "@emailjs/browser";

const HomeContact = () => {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
    reason: "",
  });
  const form = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSuccessClose = () => {
    setIsSuccessOpen(false);
  };

  const isValidEmail = (email) => {
    // You can use a regular expression or other validation methods
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    const errors = {};

    if (!formData.name) {
      errors.name = "This field is required.";
    }
    if (!formData.email) {
      errors.email = "This field is required.";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Please enter a valid email.";
    }
    if (!formData.reason) {
      errors.reason = "This field is required.";
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    // Clear validation errors if form is valid
    setValidationErrors({});

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          setIsSuccessOpen(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    // The Box has mx: "auto" which centers the content horizontally
    <Box id="home-contact" sx={{ mx: "auto", maxWidth: "100%" }}>
      <form ref={form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid xs={12} sm>
            <Stack spacing={3}>
              <Typography variant="h2">Get in Touch</Typography>
              <TextField
                id="outlined-basic"
                label="Preferred Name"
                variant="outlined"
                color="secondary"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#9A9A9A",
                      borderRadius: 0,
                    },
                    "&:hover fieldset": {
                      borderColor: "#E675E9",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#E675E9",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    // color: "#E675E9",
                    "&.Mui-focused": {
                      color: "#E675E9",
                    },
                  },
                  [`@media (min-width:600px)`]: {
                    width: "40%",
                  },
                }}
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!validationErrors.name}
                helperText={validationErrors.name}
              />
              <TextField
                id="outlined-basic"
                label="Your Email"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#9A9A9A",
                      borderRadius: 0,
                    },
                    "&:hover fieldset": {
                      borderColor: "#E675E9",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#E675E9",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    "&.Mui-focused": {
                      color: "#E675E9",
                    },
                  },
                }}
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!validationErrors.email}
                helperText={validationErrors.email}
              />
              <TextField
                id="outlined-basic"
                label="Reason(s)"
                variant="outlined"
                multiline
                rows={4}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#9A9A9A",
                      borderRadius: 0,
                    },
                    "&:hover fieldset": {
                      borderColor: "#E675E9",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#E675E9",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    "&.Mui-focused": {
                      color: "#E675E9",
                    },
                  },
                }}
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                error={!!validationErrors.reason}
                helperText={validationErrors.reason}
              />
            </Stack>
          </Grid>
          <Grid xs={12} sm="auto" style={{ alignSelf: "flex-end" }}>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                color: "white", // Set the background color on hover
                backgroundColor: "#E675E9", // Set the background color on hover
                "&:hover": {
                  color: "#E675E9", // Set the background color on hover
                  backgroundColor: "white", // Set the background color on hover
                },
              }}
              type="submit"
              // onClick={handleSubmit}
            >
              Let's go!
            </Button>
          </Grid>
        </Grid>
      </form>

      {/* Success Dialog */}
      <Dialog
        open={isSuccessOpen}
        onClose={handleSuccessClose}
        sx={{
          "& .MuiDialogTitle-root": {
            backgroundColor: "#E675E9",
            color: "white",
            paddingTop: "16px",
          },
          "& .MuiDialogContent-root": {
            backgroundColor: "#E675E9",
            color: "white",
          },
          "& .MuiDialogActions-root": {
            backgroundColor: "#E675E9",
          },
        }}
      >
        <DialogTitle>Success!</DialogTitle>
        <DialogContent>
          Thank you for contacting me, I will get back to you soon!
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSuccessClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default HomeContact;
