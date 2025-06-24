
import React, { useState } from "react";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid } from "@mui/material";
import Result from "./components/Result";
import Checker from "./components/Checker";
import Card from "./components/CustomCard";
import DefaultCard01 from "./components/CustomCard01";
import DefaultCard02 from "./components/CustomCard02";
import DefaultCard03 from "./components/CustomCard03";
import Footer from "./components/Footer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1a1a1a",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: "#87CEFA",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
  border: "2px dashed #87CEFA",
  borderRadius: "12px",
}));

export default function HomePage() {
  const [apiResponse, setApiResponse] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

  return (
    <>
      <Box sx={{ flexGrow: 1, padding: 2, backgroundColor: "#000000", minHeight: "100vh" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Item component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <Checker setApiResponse={setApiResponse} setUploadedImageUrl={setUploadedImageUrl} />
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <Result apiResponse={apiResponse} uploadedImageUrl={uploadedImageUrl} />
            </Item>
          </Grid>

          <Grid container spacing={2} justifyContent="center" mt={2}>
            <Grid item xs={12} sm={6} md={3}><Item><Card /></Item></Grid>
            <Grid item xs={12} sm={6} md={3}><Item><DefaultCard01 /></Item></Grid>
            <Grid item xs={12} sm={6} md={3}><Item><DefaultCard02 /></Item></Grid>
            <Grid item xs={12} sm={6} md={3}><Item><DefaultCard03 /></Item></Grid>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}
