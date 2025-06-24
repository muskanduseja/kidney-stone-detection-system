import React from "react";
import { Card, Typography, Box } from "@mui/material";
import Footer from "./Footer"; // ✅ Keep Footer

const AboutUs = () => {
  return (
    <>
      {/* ❌ Removed Navbar to avoid duplication */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          background: "#000", // ✅ Background color remains
          padding: "40px 20px",
        }}
      >
        <Card
          sx={{
            padding: "40px",
            borderRadius: "15px",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
            maxWidth: "600px",
            width: "100%",
            background: "rgba(255, 255, 255, 0.9)", // ✅ Semi-transparent white background
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#333" }}
          >
            About Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#333",
              lineHeight: 1.7,
              fontSize: "1.1rem",
            }}
          >
            <strong>Kidney Stones Detector</strong> is a trusted platform designed to provide health
            insights related to kidney stones. Our mission is to help individuals
            detect and manage kidney stones through advanced diagnostic tools and
            expert advice. We are committed to improving the quality of life for
            our users by offering reliable and accurate health resources.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#333",
              lineHeight: 1.7,
              fontSize: "1.1rem",
              marginTop: "20px",
            }}
          >
            Our team of healthcare professionals and technologists work
            together to create the best possible experience for individuals
            seeking support and information related to kidney health.
          </Typography>
        </Card>
      </Box>
      
      <Footer /> {/* ✅ Footer remains */}
    </>
  );
};

export default AboutUs;
