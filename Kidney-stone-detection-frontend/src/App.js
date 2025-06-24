import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import Navbar from "./pages/components/Navbar";
import HomePage from "./pages/homepage";
import Contact from "./pages/components/Contact";
import Services from "./pages/components/Services";
import AboutUs from "./pages/components/AboutUs";
import Login from "./pages/components/Login";
import SignUp from "./pages/components/SignUp";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import FileUploader from "./pages/components/Uploader"; 
import Result from "./pages/components/Result"; 

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const ProtectedRoute = ({ children, isAuthenticated }) => {
  const location = useLocation();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

const AppContent = () => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await fetch('http://127.0.0.1:5000/user', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          
          if (response.ok) {
            setIsAuthenticated(true);
          } else {
            localStorage.removeItem('token');
            setIsAuthenticated(false);
          }
        }
      } catch (error) {
        console.error("Auth verification failed:", error);
      } finally {
        setIsLoading(false);
      }
    };

    verifyAuth();
  }, [location]);

  const hideNavbar = location.pathname === "/login" || location.pathname === "/signup";

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {!hideNavbar && <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/home" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <HomePage />
          </ProtectedRoute>
        } />

        <Route path="/contact" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Contact />
          </ProtectedRoute>
        } />

        <Route path="/services" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Services />
          </ProtectedRoute>
        } />

        <Route path="/about" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <AboutUs />
          </ProtectedRoute>
        } />

        <Route path="/upload" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <FileUploader />
          </ProtectedRoute>
        } />

        <Route path="/Result" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Result />
          </ProtectedRoute>
        } />

        <Route path="*" element={<Navigate to={isAuthenticated ? "/home" : "/login"} />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
