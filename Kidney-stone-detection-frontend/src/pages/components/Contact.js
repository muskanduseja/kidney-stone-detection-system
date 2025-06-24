import React from "react";
import { Box, Typography, TextField, Button, Grid, Paper } from "@mui/material";
import { LocationOn, Phone, Email } from "@mui/icons-material";
import Footer from "./Footer";
import ContactImage from "../../assets/con_image.jpg";

const Contact = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          background: "#fff", // Changed from #000 to #fff
          padding: "40px 20px",
        }}
      >
        <Typography variant="h4" align="center" sx={{ color: "#000", fontWeight: "bold", mb: 3 }}> {/* Changed text color to #000 */}
          Contact Us
        </Typography>

        <Grid container spacing={4} maxWidth="lg" alignItems="center">
          {/* Left Side - Image */}
          <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={ContactImage}
              alt="Support Agent"
              style={{ 
                width: "100%",
                height: "450px",
                maxWidth: "500px",
                borderRadius: "15px",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                objectFit: "cover",
              }}
            />
          </Grid>

          {/* Right Side - Form */}
          <Grid item xs={12} md={7}>
            <Paper elevation={5} sx={{ padding: "30px", borderRadius: "15px", background: "#fff" }}> {/* Changed background to #fff */}
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#fff",
                        color: "#000", // Changed text color to #000
                        "& fieldset": { borderColor: "#44CBCB" }, // Changed border color to match button
                        "&:hover fieldset": { borderColor: "#44CBCB" },
                      },
                      "& .MuiInputLabel-root": { color: "#000" }, // Changed label color to #000
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#fff",
                        color: "#000",
                        "& fieldset": { borderColor: "#44CBCB" },
                        "&:hover fieldset": { borderColor: "#44CBCB" },
                      },
                      "& .MuiInputLabel-root": { color: "#000" },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone number"
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#fff",
                        color: "#000",
                        "& fieldset": { borderColor: "#44CBCB" },
                        "&:hover fieldset": { borderColor: "#44CBCB" },
                      },
                      "& .MuiInputLabel-root": { color: "#000" },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: "#fff",
                        color: "#000",
                        "& fieldset": { borderColor: "#44CBCB" },
                        "&:hover fieldset": { borderColor: "#44CBCB" },
                      },
                      "& .MuiInputLabel-root": { color: "#000" },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      background: "#44CBCB",
                      color: "#fff",
                      fontSize: "16px",
                      fontWeight: "bold",
                      '&:hover': { background: "#44CBCB" },
                    }}
                  >
                    Contact us now
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </>
  );
};

export default Contact;