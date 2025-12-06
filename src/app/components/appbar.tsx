"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import LogoB from "../../assets/svg/logo.svg";
import NavBg from "../../assets/img/navbg.png";
import Link from "next/link";
import UserProfile from "./user";
import { useEffect, useState } from "react";
import React from "react";
export interface navItemType {
  name: string;
  link: string;
  active?: boolean;
}

export const navItem: navItemType[] = [
  { name: "Home", link: "/", active: true },
  { name: "Product", link: "#", active: false },
  { name: "FAQ", link: "#", active: false },
  { name: "Blog", link: "#", active: false },
  { name: "About Us", link: "#", active: false },
];

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [profile, setProfile] = useState<any>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  useEffect(() => {
    // Check if user is logged in by reading the token from localStorage
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      // Normally fetch profile from API
      const storedProfile = JSON.parse(localStorage.getItem("profile") || "{}");
      setProfile(storedProfile);
    }
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundImage: `url(${NavBg.src})`, // Apply background image only for desktop
        //  backgroundSize: "auto 150px", // Set height to 150px and width to auto
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Prevent the image from repeating
        height: { md: "75px" }, // Set height for desktop
        bgcolor: { xs: "#FFFFFF", md: "transparent" }, // Set solid color for mobile and transparent for desktop
        boxShadow: "none", // Remove box shadow
      }}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo on the left */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: { xs: 1, md: 0 },
            }}
          >
            <Image src={LogoB} alt="Biccas" priority className="h-10 w-auto" />
          </Box>

          {/* Desktop Navigation and Auth Buttons */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              justifyContent: "flex-end",
              gap: 20,
              alignItems: "center",
              marginRight: 2,
            }}
          >
            {/* Navigation links */}
            <Box sx={{ display: "flex", gap: 1 }}>
              {navItem.map((item) => (
                <Button
                  key={item.name}
                  onClick={handleCloseNavMenu}
                  sx={{
                    // color: "white",
                    //color: "#A6A6A6",
                    color: item.active ? "#000" : "#A6A6A6",
                    // fontWeight: item.active ? "bold" : "normal",
                    fontWeight: item.active ? 600 : 500,
                    textTransform: "none",
                    px: 1.5,
                    fontSize: item.active ? "18px" : "16px",
                  }}
                  href={item.link}
                >
                  {item.name}
                </Button>
              ))}
            </Box>

            {/* Auth Buttons */}
            {profile ? (
              <UserProfile />
            ) : (
              <Box sx={{ display: "flex", gap: 0.5 }}>
                <Link href={"/login"}>
                  <Button
                    sx={{
                      textTransform: "none",
                      px: 1,
                      fontSize: "16px",
                      color: "#A6A6A6",
                    }}
                  >
                    Login
                  </Button>
                </Link>

                <Link href={"/sign-up"}>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      px: 1,
                      fontSize: "16px",
                      color: "#F8F8FA",
                      bgcolor: "#54BD95",
                      "&:hover": { bgcolor: "#42a57c" },
                      borderRadius: "10px",
                      height: "40px",
                      width: "80px",
                    }}
                  >
                    Sign Up
                  </Button>
                </Link>
              </Box>
            )}
          </Box>

          {/* Mobile Menu Button (right-aligned) */}

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
              flexGrow: 1,
            
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ p: 1 }}
            >
              <MenuIcon sx={{ color: "#000" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
                mt: 2, // Add top margin to the dropdown menu
                '& .MuiPaper-root': {
                  height: "100vh",
                  width: "20%",
                
                }
              }}
            >
              {navItem.map((item) => (
                <MenuItem key={item.name} onClick={handleCloseNavMenu}>
                  <Box
                    sx={{
                      fontWeight: item.active ? 600 : 500,
                      color: item.active ? "#000" : "#A6A6A6",
                      width: "100%",
                      fontSize: item.active ? "18px" : "16px",
                      my :2,
                    }}
                  >
                    {item.name}
                  </Box>
                </MenuItem>
              ))}
              {/* Auth Buttons */}
              {profile ? (
                <Box mx={"auto"} mt={45} px={"40px"}>
                  <UserProfile />
                </Box>
              ) : (
                <Box>
                  <MenuItem>
                    <Link href={"/login"}>
                      <Button
                        fullWidth
                        sx={{
                          justifyContent: "flex-start",
                          textTransform: "none",
                          fontSize: "16px",
                          color: "#A6A6A6",
                          fontWeight: 500,
                          height: "40px",
                          width: "80px",
                        }}
                      >
                        Login
                      </Button>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={"/sign-up"}>
                      <Button
                        variant="contained"
                        sx={{
                          textTransform: "none",
                          px: 1,
                          // fontSize: "0.875rem",
                          color: "#F8F8FA",
                          bgcolor: "#54BD95",
                          "&:hover": { bgcolor: "#42a57c" },
                          borderRadius: "10px",
                          fontSize: "16px",
                        }}
                      >
                        Sign Up
                      </Button>
                    </Link>
                  </MenuItem>
                </Box>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
