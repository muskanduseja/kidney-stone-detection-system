
import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const FileUploader = ({ setApiResponse, setUploadedImageUrl }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const imageURL = URL.createObjectURL(file);
      setUploadedImage(imageURL);
      setUploadedImageUrl(imageURL);
    }
  };

  const handlePredict = async () => {
    if (!selectedFile) return;

    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://localhost:5003/predict", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data?.result) {
        if (setApiResponse) setApiResponse(data.result);
      } else {
        throw new Error(data.error || "Prediction failed");
      }
    } catch (err) {
      console.error("Prediction error:", err);
      alert("Prediction failed. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ 
      p: 1, 
      display: "flex", 
      flexDirection: "column", 
      gap: 1,
      alignItems: "center",
      justifyContent: "flex-start",
      height: "100%"
    }}>
      {/* Upload Section - Only height adjusted */}
      <Box sx={{ mt: -2 }}>
        <input
          onChange={handleFileChange}
          type="file"
          accept=".png, .jpg, .jpeg"
          style={{ display: "none" }}
          id="fileInput"
        />
        <label htmlFor="fileInput">
          <Button
            component="span"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            sx={{ 
              backgroundColor: "#1a1a1a", 
              color: "#44CBCB",
              "&:hover": { backgroundColor: "#333" },
              width: "300px",
              height: "42px" // Matched to Predict button height
            }}
          >
            UPLOAD IMAGE
          </Button>
        </label>
      </Box>

      {/* Image Preview - Unchanged */}
      <Box sx={{ 
        height: "200px", 
        width: "320px",
        display: "flex", 
        justifyContent: "center",
        mt: 1,
        backgroundColor: "#1a1a1a",
        borderRadius: "10px",
        padding: "10px",
        border: "1px solid #87CEFA"
      }}>
        {uploadedImage ? (
          <img 
            src={uploadedImage} 
            alt="Uploaded" 
            style={{ 
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              borderRadius: "6px",
            }} 
          />
        ) : (
          <Box sx={{
            border: "2px dashed #87CEFA",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#87CEFA",
            width: "100%",
            height: "100%",
            borderRadius: "6px",
          }}>
            Image Preview
          </Box>
        )}
      </Box>

      {/* Predict Button - Unchanged from previous adjustment */}
      <Button
        variant="contained"
        onClick={handlePredict}
        disabled={!uploadedImage || isLoading}
        sx={{
          backgroundColor: "#1a1a1a",
          color: "#44CBCB",
          "&:hover": { backgroundColor: "#333" },
          "&:disabled": { backgroundColor: "#cccccc" },
          width: "300px",
          height: "42px",
          mt: "auto"
        }}
      >
        {isLoading ? "Processing..." : "PREDICT"}
      </Button>
    </Box>
  );
};

export default FileUploader;