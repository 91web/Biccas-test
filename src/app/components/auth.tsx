"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function UserMenu() {
  const router = useRouter();
  const [profile, setProfile] = useState<any>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const openMenu = Boolean(anchorEl);

  useEffect(() => {
    // Check if user is logged in by reading the token from localStorage
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      // Normally fetch profile from API
      const storedProfile = JSON.parse(localStorage.getItem("profile") || "{}");
      setProfile(storedProfile);
    }
  }, []);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    setOpenDialog(true);
    handleCloseMenu();
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("profile");
    setProfile(null);
    setOpenDialog(false);
    router.push("/login");
  };

  const handleCancelLogout = () => {
    setOpenDialog(false);
  };

  return (
    <Box>
      {profile ? (
        <>
          {/* Avatar for logged-in user */}
          <Avatar
            src={profile.avatar || ""}
            sx={{ width: 40, height: 40, cursor: "pointer" }}
            onClick={handleAvatarClick}
            imgProps={{ referrerPolicy: "no-referrer" }} // avoids blocked requests
          />
          <Menu
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleCloseMenu}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem>
              <Typography>{profile.name}</Typography>
            </MenuItem>
            <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
          </Menu>

          {/* Logout confirmation */}
          <Dialog open={openDialog} onClose={handleCancelLogout}>
            <DialogTitle>Confirm Logout</DialogTitle>
            <DialogContent>
              <Typography>Are you sure you want to logout?</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCancelLogout}>Cancel</Button>
              <Button color="error" onClick={handleConfirmLogout}>
                Logout
              </Button>
            </DialogActions>
          </Dialog>
        </>
      ) : (
        <>
          {/* Login / Sign Up buttons */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <Link href="/login">
              <Button
                sx={{
                  justifyContent: "flex-start",
                  textTransform: "none",
                  fontSize: "16px",
                  color: "#A6A6A6",
                  fontWeight: 500,
                  height: "40px",
                }}
              >
                Login
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  px: 1,
                  color: "#F8F8FA",
                  bgcolor: "#54BD95",
                  "&:hover": { bgcolor: "#42a57c" },
                  borderRadius: "10px",
                  fontSize: "16px",
                  height: "40px",
                }}
              >
                Sign Up
              </Button>
            </Link>
          </Box>
        </>
      )}
    </Box>
  );
}
