import React from "react";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#121212",
        color: "#fff",
        padding: "20px 0",
        borderTop: "1px solid #444",
        textAlign: "center",
      }}
    >
      <Grid container spacing={3} sx={{ width: "80%", margin: "0 auto" }}>
        {/* Column 1: Company Info */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" color="#44CBCB" fontWeight="bold">
            Kidney Stone Detection
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Our AI-powered Kidney Stone Detection system helps in early diagnosis and prevention, ensuring better healthcare outcomes.
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, display: "flex", alignItems: "center", gap: "5px" }}>
            📞 +923063198722
          </Typography>
        </Grid>

        {/* Column 2: Quick Links */}
        <Grid item xs={12} sm={4} textAlign={{ xs: "center", sm: "left" }}>
          <Typography variant="h6" color="#44CBCB" fontWeight="bold">
            Quick Links
          </Typography>
          <Box component="ul" sx={{ listStyle: "none", padding: 0, fontSize: "0.9rem" }}>
            {["F.A.Q", "Cookies Policy", "Terms of Service", "Support", "Careers"].map((text) => (
              <li key={text}>
                <a href={`/${text.toLowerCase().replace(/ /g, "-")}`} style={{ color: "#fff", textDecoration: "none" }}>{text}</a>
              </li>
            ))}
          </Box>
        </Grid>

        {/* Column 3: Subscribe Section */}
        <Grid item xs={12} sm={4} textAlign={{ xs: "center", sm: "right" }}>
          <Typography variant="h6" color="#44CBCB" fontWeight="bold">
            Subscribe to Newsletters
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              type="email"
              placeholder="Your email here"
              fullWidth
              size="small"
              sx={{ backgroundColor: "#fff", borderRadius: "5px", mb: 1 }}
            />
            <Button variant="contained" sx={{ backgroundColor: "#44CBCB", color: "#fff", width: "100%" }}>
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Section */}
      <Typography variant="body2" sx={{ mt: 3, borderTop: "1px solid #444", pt: 2 }}>
        &copy; 2025 Your Company | All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
