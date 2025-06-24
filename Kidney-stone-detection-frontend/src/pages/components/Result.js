
// import React from "react";
// import { Box, Typography, Button } from "@mui/material";
// import { styled } from "@mui/material/styles";

// const PlaceholderImage = styled("div")({
//   border: "3px dashed #87CEFA",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   color: "#87CEFA",
//   borderRadius: "10px",
//   width: "300px",
//   height: "200px",
//   backgroundColor: "#1a1a1a",
//   margin: "0 auto 20px"
// });

// const Result = ({ apiResponse, uploadedImageUrl }) => {
//   const renderPrediction = () => {
//     if (apiResponse) {
//       const { binary_prediction, multiclass_prediction } = apiResponse;
//       if (binary_prediction === "Normal") return "Normal";
//       if (multiclass_prediction) return `Abnormal: ${multiclass_prediction}`;
//       return "Abnormal: Unknown";
//     }
//     return "Prediction not yet made";
//   };

//   const handleNewPage = () => {
//     // Navigation logic here
//   };

//   return (
//     <Box sx={{ 
//       textAlign: "center", 
//       backgroundColor: "#b6e6f6",  // Exact match to FileUploader background
//       padding: "20px", 
//       borderRadius: "12px",
//       display: "flex",
//       flexDirection: "column",
//       gap: "16px"
//     }}>
//       <Typography variant="h4" sx={{ color: "#1a1a1a" }}>
//         The Result
//       </Typography>
//       <Typography variant="subtitle1" sx={{ color: "#1a1a1a" }}>
//         {apiResponse ? "Prediction Result:" : "Check your results"}
//       </Typography>

//       <Box sx={{ display: "flex", justifyContent: "center" }}>
//         {uploadedImageUrl ? (
//           <img 
//             src={uploadedImageUrl} 
//             alt="Prediction" 
//             style={{ 
//               width: "300px",
//               height: "200px",
//               objectFit: "contain",
//               border: "1px solid #87CEFA",
//               borderRadius: "10px",
//               backgroundColor: "#1a1a1a"
//             }} 
//           />
//         ) : (
//           <PlaceholderImage>
//             The result will be displayed here...
//           </PlaceholderImage>
//         )}
//       </Box>

//       <Typography variant="h5" sx={{ color: "#1a1a1a" }}>
//         {renderPrediction()}
//       </Typography>

//       <Button
//         variant="contained"
//         onClick={handleNewPage}
//         sx={{
//           backgroundColor: "#1a1a1a",
//           color: "#44CBCB",
//           "&:hover": { backgroundColor: "#333" },
//           width: "300px",
//           padding: "10px",
//           margin: "0 auto"
//         }}
//       >
//         GO TO NEW PAGE
//       </Button>
//     </Box>
//   );
// };

// export default Result;
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const PlaceholderImage = styled("div")({
  border: "3px dashed #87CEFA",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#87CEFA",
  borderRadius: "10px",
  width: "300px",
  height: "200px",
  backgroundColor: "#1a1a1a",
  margin: "0 auto 10px" // Reduced from 20px to 10px
});

const Result = ({ apiResponse, uploadedImageUrl }) => {
  const renderPrediction = () => {
    if (apiResponse) {
      const { binary_prediction, multiclass_prediction } = apiResponse;
      if (binary_prediction === "Normal") return "Normal";
      if (multiclass_prediction) return `Abnormal: ${multiclass_prediction}`;
      return "Abnormal: Unknown";
    }
    return "Prediction not yet made";
  };

  const handleNewPage = () => {
    // Navigation logic here
  };

  return (
    <Box sx={{ 
      textAlign: "center", 
      backgroundColor: "#b6e6f6",
      padding: "16px", 
      borderRadius: "12px",
      display: "flex",
      flexDirection: "column",
      gap: "8px" // Reduced from 16px to 8px
    }}>
      <Typography variant="h4" sx={{ color: "#1a1a1a" }}>
        The Result
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "#1a1a1a", mb: 0.5 }}> {/* Reduced margin */}
        {apiResponse ? "Prediction Result:" : "Check your results"}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {uploadedImageUrl ? (
          <img 
            src={uploadedImageUrl} 
            alt="Prediction" 
            style={{ 
              width: "300px",
              height: "200px",
              objectFit: "contain",
              border: "1px solid #87CEFA",
              borderRadius: "10px",
              backgroundColor: "#1a1a1a",
              marginBottom: "8px" // Added small margin
            }} 
          />
        ) : (
          <PlaceholderImage>
            The result will be displayed here...
          </PlaceholderImage>
        )}
      </Box>

      <Typography variant="h5" sx={{ 
        color: "#1a1a1a",
        margin: "4px 0" // Tightened margins
      }}>
        {renderPrediction()}
      </Typography>

      <Button
        variant="contained"
        onClick={handleNewPage}
        sx={{
          backgroundColor: "#1a1a1a",
          color: "#44CBCB",
          "&:hover": { backgroundColor: "#333" },
          width: "300px",
          padding: "8px",
          margin: "4px auto 0" // Reduced top margin
        }}
      >
        GO TO NEW PAGE
      </Button>
    </Box>
  );
};

export default Result;