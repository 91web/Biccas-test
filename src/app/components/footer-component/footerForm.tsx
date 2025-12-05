import React from "react";
import {
  Box,
  Typography,
  Grid,
  Stack,
  Avatar,
  TextField,
  Button,
} from "@mui/material";
import Image from "next/image";
import MarkIconHero from "../../../assets/svg/c-mark.svg";
import LoginIcon from "../../../assets/svg/login-icon.svg";
import AvatarHero1 from "../../../assets/svg/avatar-1.svg";
import AvatarHero2 from "../../../assets/svg/avatar-2.svg";
import AvatarHero3 from "../../../assets/svg/avatar-3.svg";
import AvatarHero4 from "../../../assets/svg/avatar-4.svg";
import AvatarHero5 from "../../../assets/svg/avatar-5.svg";

const FooterForm = () => {
  return (
    <Box>
      <Grid container spacing={8} justifyContent="center" alignItems="center">
        {/* LEFT */}
        <Grid size={{ xs: 12, md: 5 }} display="flex" justifyContent="center">
          <Box
            sx={{
              width: "100%",
              maxWidth: "600px",
              textAlign: "left",
            }}
          >
            {/* Heading */}
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 700,
                fontSize: { xs: "28px", sm: "50px", md: "50px" },
                color: "#fff",
                my: 4,
                lineHeight: { xs: "60px", md: "80px" },
              }}
            >
              People are Saying About DoWhith
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 2,
                mb: 3,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: { xs: "14px", sm: "16px", md: "18px" },
                  lineHeight: "30px",
                  color: "#A6A6A6",
                }}
              >
                Everything you need to accept to payment and grow your money of
                manage anywhere on planet
              </Typography>
            </Box>
            <Box>
              <Image
                src={MarkIconHero.src}
                alt="Mark-Divider"
                width={32}
                height={32}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 2,
                my: 3,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: { xs: "14px", sm: "16px", md: "18px" },
                  lineHeight: "30px",
                  color: "#A6A6A6",
                }}
              >
                I am very helped by this E-wallet application , my days are very
                easy to use this application and its very helpful in my life ,
                even I can pay a short time 😍
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 2,
                my: 3,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: { xs: "14px", sm: "16px", md: "18px" },
                  lineHeight: "30px",
                  color: "#A6A6A6",
                }}
              >
                _ Aria Zinanrio
              </Typography>
            </Box>

            <Box>
              <Stack direction="row" spacing={2}>
                <Avatar alt="Remy Sharp" src={AvatarHero1.src} />
                <Avatar alt="Travis Howard" src={AvatarHero2.src} />
                <Avatar alt="Cindy Baker" src={AvatarHero3.src} />
                <Avatar alt="Travis Howard" src={AvatarHero4.src} />
                <Avatar alt="Cindy Baker" src={AvatarHero5.src} />
              </Stack>
            </Box>
          </Box>
        </Grid>

        {/* RIGHT */}
        <Grid size={{ xs: 12, md: 7 }} display="flex" justifyContent="center">
          <Box sx={{ width: "100%", maxWidth: "650px" }}>
            <Box
              bgcolor={"#222938"}
              border={"10px"}
              borderRadius={"10px"}
              p={4}
              height={"588px"}
            >
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
                  alt="Mark Hero Benefit-Divider"
                  priority
                  width={72}
                  height={80}
                />

                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 700,
                    fontSize: { xs: "28px", sm: "40px", md: "30px" },
                    color: "#fff",
                    mt: 1,
                    lineHeight: { xs: "36px", md: "80px" },
                  }}
                >
                  Get Started
                </Typography>
              </Box>
              <Box
                component="form"
                sx={{
                  width: "100%",
                  maxWidth: 500,
                  mx: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: 2, md: 1 },
                }}
              >
                {/* Email */}
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: { xs: "13px", sm: "14px", md: "16px" },
                    color: "#fff",
                  }}
                >
                  Email
                </Typography>

                <TextField
                  fullWidth
                  type="email"
                  label="Enter your email"
                  variant="outlined"
                  size="small"
                  slotProps={{
                    input: {
                      sx: { color: "#000" },
                    },
                  }}
                  sx={{
                    bgcolor: "#fff",
                    height: "50px",
                    borderRadius: "10px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      "& fieldset": {
                        borderColor: "#222938",
                      },
                      "&:hover fieldset": {
                        borderColor: "#fff",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#fff",
                      },
                      height: "50px",
                    },
                  }}
                />

                {/* Message */}
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: { xs: "13px", sm: "14px", md: "16px" },
                    color: "#A6A6A6",
                    mt: { xs: 1, sm: 2 },
                  }}
                >
                  Message
                </Typography>

                <TextField
                  fullWidth
                  label="What are you saying?"
                  variant="outlined"
                  multiline
                  rows={4}
                  slotProps={{
                    input: {
                      sx: { color: "#000" },
                    },
                  }}
                  sx={{
                    bgcolor: "#fff",
                    height: "80px",
                    borderRadius: "10px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      "& fieldset": {
                        borderColor: "#fff",
                      },
                      "&:hover fieldset": {
                        borderColor: "#222938",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#A6A6A6",
                      },
                      height: "80px",
                    },
                  }}
                />

                {/* Button */}
                <Button
                  fullWidth
                  sx={{
                    mt: { xs: 2, sm: 3 },
                    height: { xs: "48px", sm: "56px" },
                    fontSize: { xs: "14px", sm: "16px" },
                    fontWeight: 600,
                    color: "#fff",
                    textTransform: "none",
                    bgcolor: "#54BD95",
                    borderRadius: "10px",
                    "&:hover": {
                      bgcolor: "#42a57c",
                    },
                  }}
                >
                  Request Demo
                </Button>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: { xs: "10px", sm: "12px", md: "14px" },
                      lineHeight: "30px",
                      color: "#A6A6A6",
                      textAlign: "right",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{ fontWeight: 400, fontSize: "12px" }}
                    >
                      or
                    </Box>{" "}
                    Start Free Trial
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FooterForm;
