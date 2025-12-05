"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
} from "@mui/material";
import axios from "@/lib/axiosInstance";

export default function UserProfile() {
  const router = useRouter();
  const pathname = usePathname();

  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Dropdown state
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const openMenu = Boolean(anchorEl);

  /* ================= FETCH PROFILE ================= */
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");

    // Not logged in → stop loading but don't redirect
    if (!accessToken) {
      setLoading(false);
      return;
    }

    const loadProfile = async () => {
      try {
        const cached = localStorage.getItem("profile");
        if (cached) {
          setProfile(JSON.parse(cached));
        } else {
          const { data } = await axios.get("/auth/profile", {
            headers: { Authorization: `Bearer ${accessToken}` },
          });
          setProfile(data);
          localStorage.setItem("profile", JSON.stringify(data));
        }
      } catch (err) {
        console.error("Auth error", err);
        localStorage.clear();
        setProfile(null);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  /* ================= LOGOUT ================= */
  const handleConfirmLogout = () => {
    localStorage.clear();
    setProfile(null);
    setOpenDialog(false);
    router.push("/login");
  };

  /* ================= RENDER STATES ================= */
  if (loading) return null;

  /* ---------- NOT LOGGED IN ---------- */
  if (!profile) {
    const isLoginPage = pathname === "/login";

    return (
      <Button
        onClick={() => router.push(isLoginPage ? "/sign-up" : "/login")}
        variant="contained"
        sx={{
          textTransform: "none",
          fontSize: "16px",
          fontWeight: 500,
          color: "#F8F8FA",
          bgcolor: "#54BD95",
          "&:hover": { bgcolor: "#42a57c" },
          borderRadius: "10px",
          height: "40px",
          px: 2,
        }}
      >
        {isLoginPage ? "Sign Up" : "Login"}
      </Button>
    );
  }

  /* ---------- LOGGED IN ---------- */
  return (
    <>
      <Avatar
        src={profile.avatar}
        alt={profile.name}
        sx={{
          width: 40,
          height: 40,
          cursor: "pointer",
        }}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      />

      <Menu
        anchorEl={anchorEl}
        open={openMenu}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Box sx={{ px: 2, py: 1 }}>
          <Typography fontWeight={600}>{profile.name}</Typography>
          <Typography fontSize={14}>{profile.email}</Typography>
          <Typography fontSize={12} color="text.secondary">
            {profile.role}
          </Typography>
        </Box>

        <MenuItem onClick={() => setOpenDialog(true)}>Logout</MenuItem>
      </Menu>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to logout?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button color="error" onClick={handleConfirmLogout}>
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
