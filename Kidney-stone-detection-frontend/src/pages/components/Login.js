import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Card,
  Snackbar,
  Alert,
  CircularProgress
} from "@mui/material";
import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import KidneyStoneImage from "../../assets/kidney-stone-image.jpg";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Secure storage function for JWT token
  const setSecureItem = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('LocalStorage error:', e);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    
    // Validate inputs
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      console.log("Submitting:", { email: email.trim(), password });
      const response = await fetch("http://localhost:5003/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password: password,
        }),
      });

      console.log("Response status:", response.status);
      const data = await response.json();
      console.log("Response data:", data);

      if (!response.ok) {
        throw new Error(data.message || "Login failed. Please try again.");
      }

      setSecureItem("token", data.access_token);  // Save the JWT token
      setSecureItem("user", JSON.stringify({
        username: data.username,
        email: data.email
      }));
      
      setIsAuthenticated(true);
      setSuccess("Login successful!");
      
      setTimeout(() => {
        const from = location.state?.from?.pathname || "/home";  // Redirect to previous page or home
        navigate(from, { replace: true });
      }, 1500);

    } catch (error) {
      console.error("Login error:", error);
      setError(error.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setError(null);
    setSuccess(null);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: "20px",
      }}
    >
      <Card
        sx={{
          width: "90%",
          maxWidth: "1200px",
          minHeight: "80vh",
          display: "flex",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
        }}
      >
        {/* Left Side - Welcome Section */}
        <Box
          sx={{
            flex: 1,
            background: "linear-gradient(135deg, #2193b0, #6dd5ed)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
            color: "#fff",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
            Welcome to Kidney
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center", mb: 3 }}>
            Your trusted platform for kidney stone detection and health insights.
          </Typography>
          <Box
            component="img"
            src={KidneyStoneImage}
            alt="Kidney Stone"
            sx={{
              width: "100%",
              maxWidth: "300px",
              borderRadius: "10px",
            }}
          />
        </Box>

        {/* Right Side - Login Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(135deg, #2193b0, #6dd5ed)",
            padding: "40px",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#fff", mb: 3 }}
          >
            User Login
          </Typography>

          {/* Login Form */}
          <Box
            component="form"
            onSubmit={handleLogin}
            sx={{
              width: "100%",
              maxWidth: "350px",
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {/* Email Field */}
            <TextField
              fullWidth
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              error={email && !/^\S+@\S+\.\S+$/.test(email)}
              helperText={email && !/^\S+@\S+\.\S+$/.test(email) ? "Invalid email format" : ""}
              sx={{
                backgroundColor: "#fff",
                borderRadius: "5px",
                "& .MuiInputBase-input": {
                  color: "#000",
                  fontSize: "16px",
                  fontWeight: "bold",
                  padding: "14px",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{ mr: 1 }}>
                    <Email sx={{ color: "#2193b0" }} />
                  </InputAdornment>
                ),
              }}
            />

            {/* Password Field */}
            <TextField
              fullWidth
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              variant="outlined"
              error={password.length > 0 && password.length < 6}
              helperText={password.length > 0 && password.length < 6 ? "Password must be at least 6 characters" : ""}
              sx={{
                backgroundColor: "#fff",
                borderRadius: "5px",
                "& .MuiInputBase-input": {
                  color: "#000",
                  fontSize: "16px",
                  fontWeight: "bold",
                  padding: "14px",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{ mr: 1 }}>
                    <Lock sx={{ color: "#2193b0" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      sx={{ p: "8px" }}
                    >
                      {showPassword ? (
                        <Visibility sx={{ color: "#2193b0" }} />
                      ) : (
                        <VisibilityOff sx={{ color: "#2193b0" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Login Button */}
            <Button
              fullWidth
              variant="contained"
              type="submit"
              disabled={loading}
              sx={{
                background: "linear-gradient(135deg, #1e3c72, #2a5298)",
                color: "#fff",
                fontWeight: "bold",
                py: 2,
                fontSize: "16px",
                mt: 2,
                "&:hover": {
                  background: "linear-gradient(135deg, #2a5298, #1e3c72)",
                },
              }}
              startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>

            {/* Sign Up Link */}
            <Typography
              variant="body2"
              align="center"
              sx={{ mt: 2, color: "#fff" }}
            >
              Don't have an account?{" "}
              <a
                href="/signup"
                style={{ color: "#fff", textDecoration: "underline" }}
              >
                Sign Up
              </a>
            </Typography>
          </Box>
        </Box>
      </Card>

      {/* Error/Success Snackbars */}
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>

      <Snackbar
        open={!!success}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: "100%" }}>
          {success}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Login;
