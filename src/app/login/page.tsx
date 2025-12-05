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
  CircularProgress,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Image from "next/image";
import axios from "axios";
import LoginIcon from "../../assets/svg/login-icon.svg";
import { setTokens } from "@/lib/auth";
import Password from "../components/password";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { data } = await axios.post("/api/login", { email, password });
      setTokens(data.access_token, data.refresh_token);
      router.push("/profile");
    } catch {
      setError("Invalid credentials. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10, py: 10 }}>
      <Box p={4} sx={{ border: "1px solid #000", borderRadius: "10px" }}>
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
            Welcome Back
          </Typography>
        </Box>

        <Typography
          variant="h4"
          sx={{ mb: 4, color: "#000", textAlign: "center" }}
        >
          Login
        </Typography>

        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "center",
          }}
        >
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

          <Button
            type="submit"
            disabled={loading}
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
              gap: 2,
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
          </Button>

          {error && (
            <Typography color="error" sx={{ mt: 1, textAlign: "center" }}>
              {error}
            </Typography>
          )}
        </Box>
      </Box>
      <Password />
    </Container>
  );
}
