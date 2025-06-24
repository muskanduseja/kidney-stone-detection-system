import React from "react";
import { Card, Typography, Box } from "@mui/material";
import Footer from "./Footer"; // ✅ Keep Footer

const Services = () => {
  return (
    <>
      {/* ❌ Removed Navbar to avoid duplication */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          background: "#000", // ✅ Background remains
          padding: "40px 20px",
        }}
      >
        <Card
          sx={{
            padding: "50px",
            borderRadius: "20px", // ✅ More rounded corners for a modern look
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)", // ✅ Stronger shadow for depth
            maxWidth: "800px", // ✅ Wider card
            width: "100%",
            textAlign: "center",
            background: "rgba(255, 255, 255, 0.95)", // ✅ Slightly more solid background
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#333", mb: 2 }}
          >
            Our Services
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#444",
              lineHeight: 1.7,
              fontSize: "1.1rem",
            }}
          >
            At <strong>Kidney Stones Detector</strong>, we provide expert services to help
            individuals detect and manage kidney stones efficiently. Our
            solutions ensure accurate diagnosis, effective management, and
            professional guidance.
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "#333",
              mt: 4,
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Our Key Services
          </Typography>

          <Box sx={{ textAlign: "left", mt: 3 }}>
            <Typography
              variant="body1"
              sx={{ color: "#333", fontSize: "1.1rem", mb: 2 }}
            >
              <strong>✔ Kidney Stone Detection:</strong> Advanced AI-based tools
              to detect kidney stones early for better treatment options.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "#333", fontSize: "1.1rem", mb: 2 }}
            >
              <strong>✔ Expert Health Insights:</strong> Personalized tips and
              recommendations for kidney stone prevention and treatment.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "#333", fontSize: "1.1rem" }}
            >
              <strong>✔ 24/7 Online Consultation:</strong> Our medical experts
              are available anytime for your health-related queries.
            </Typography>
          </Box>
        </Card>
      </Box>

      {/* ✅ Footer remains */}
      <Footer />
    </>
  );
};

export default Services;
