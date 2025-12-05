"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Container,
  Typography,
  Avatar,
  Box,
  Button,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  Paper,
  Grid,
} from "@mui/material";
import axios from "@/lib/axiosInstance";
import BenefitSection from "../components/home-component/benefitSection";
import { CopyRight } from "../components/footer-component/copyRight";

export default function ProfilePage() {
  const router = useRouter();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Dropdown state
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const openMenu = Boolean(anchorEl);

  // Fetch profile
  useEffect(() => {
    const fetchProfile = async () => {
      const accessToken = localStorage.getItem("access_token");

      if (!accessToken) {
        router.push("/login");
        return;
      }

      try {
        const { data } = await axios.get("/auth/profile", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setProfile(data);
        localStorage.setItem("profile", JSON.stringify(data));
      } catch (err) {
        console.error("Failed to fetch profile", err);
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("profile");
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

 


  if (loading) return <Typography>Loading...</Typography>;

  if (!profile) return <Typography>No profile found</Typography>;

  return (
    <>
      <Container sx={{ mt: 8, mb: 8 }}>
        {/* Profile Card */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: "12px",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 4,
          }}
        >
          {/* Left: Avatar */}
          <Box sx={{ textAlign: "center" }}>
            <Avatar
              src={profile.avatar}
              sx={{
                width: { xs: 120, md: 150 },
                height: { xs: 120, md: 150 },
              
              }}
             
            />

          
          </Box>

          {/* Right: User Details */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" sx={{ mb: 0.5, color: "#555" }}>
              {profile.email}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: "#555" }}>
              Role: <span style={{ fontWeight: 600 }}>{profile.role}</span>
            </Typography>
          </Box>
        </Paper>
        <Box>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 1, color: "#161C28" }}
          >
            <span style={{ fontWeight: 500 }}>Welcome </span> {profile.name}
          </Typography>
        </Box>
        {/* Benefits / Dashboard Section */}
        <Box sx={{ mt: 6 }}>
          <BenefitSection />
        </Box>
      </Container>
      <Box bgcolor={"#000"}>
        <CopyRight />
      </Box>
    </>
  );
}
