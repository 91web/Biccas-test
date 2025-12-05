"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import axiosInstance from "@/lib/axiosInstance";
import { setTokens } from "@/lib/auth";
import Image from "next/image";
import LoginIcon from "../../assets/svg/login-icon.svg";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const { data } = await axiosInstance.post("signup/", {
        name,
        email,
        password,
      });
      setTokens(data.access, data.refresh);
      router.push("/profile");
    } catch {
      setError("Signup failed. Try again.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10, py: 10 }}>
      <Box p={4} sx={{ border: "1px solid #000", borderRadius: "10px" }}>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          <Image
            src={LoginIcon.src}
            alt="Login Icon"
            priority
            width={72}
            height={80}
          />
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: 700,
              fontSize: { xs: "28px", sm: "40px", md: "30px" },
              color: "#161C28",
              mt: 1,
              lineHeight: { xs: "36px", md: "80px" },
            }}
          >
            Get Started
          </Typography>
        </Box>

        <Typography
          variant="h4"
          sx={{ mb: 4, color: "#fff", textAlign: "center" }}
        >
          Sign Up
        </Typography>

        {/* Form */}
        <Box
          component="form"
          onSubmit={handleSignup}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "center", // Center all form elements horizontally
          }}
        >
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            fullWidth
            sx={{ bgcolor: "#fff", input: { color: "#161C28" } }}
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            sx={{ bgcolor: "#fff", input: { color: "#161C28" } }}
          />
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
            sx={{ bgcolor: "#fff", input: { color: "#161C28" } }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Button */}
          <Button
            type="submit"
            sx={{
              color: "#191A15",
              fontSize: "16px",
              fontWeight: 600,
              padding: "10px 20px",
              width: { xs: "100%", sm: "220px" },
              height: "62px",
              textTransform: "none",
              "&:hover": { borderColor: "#42a57c", color: "#42a57c" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Sign Up
          </Button>

          {error && (
            <Typography color="error" sx={{ mt: 1, textAlign: "center" }}>
              {error}
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
}
  