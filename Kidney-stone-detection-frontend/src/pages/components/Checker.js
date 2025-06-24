
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FileUploader from "./Uploader";

export default function Checker({ setApiResponse, setUploadedImageUrl }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        padding: "16px",
        background: "linear-gradient(135deg, #e6f7ff 0%, #b3e0ff 100%)",
        border: "2px solid #1a1a1a",
      }}
    >
      <CardContent
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          letterSpacing: "3px",
          color: "#1a1a1a",
          marginTop: "-12px",
        }}
      >
        <Typography variant="h4" sx={{ color: "#1a1a1a" }}>
          Check Your Kidneys
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#1a1a1a",
            marginBottom: "12px", // Reduced from 16px to 12px
            marginTop: "4px",
            letterSpacing: "1px",
          }}
        >
          Upload only png, jpg, or jpeg files
        </Typography>
      </CardContent>

      <Box sx={{ 
        width: "100%", 
        display: "flex", 
        justifyContent: "center",
        marginTop: "-8px" // Added this to move button up slightly
      }}>
        <FileUploader
          setApiResponse={setApiResponse}
          setUploadedImageUrl={setUploadedImageUrl}
        />
      </Box>
    </Card>
  );
}