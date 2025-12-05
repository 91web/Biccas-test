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
    <Box pt={5}>
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
                Everything you need to accept to payment and grow<br/> your money of
                manage anywhere on planet
              </Typography>
            </Box>
            <Box my={4}>
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
                I am very helped by this E-wallet application , my <br/>days are very
                easy to use this application and its very <br/>helpful in my life ,
                even I can pay a short time 😍
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 2,
                my: 4,
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
        <Grid size={{ xs: 12, md: 7 }} display="flex" justifyContent="right">
          <Box
            sx={{
              width: "100%",
              maxWidth: 712,

            }}
          >
            <Box
              sx={{
                bgcolor: "#222938",
                borderRadius: "20px",
                p: { xs: 3, md: 8 },
                width: "100%",
              }}
            >
              {/* Header */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  mb: 3,
                }}
              >
                <Image
                  src={LoginIcon.src}
                  alt="Get Started"
                  width={72}
                  height={86}
                  priority
                />

                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 700,
                    fontSize: { xs: "26px", sm: "30px" },
                    color: "#fff",
                    mt: 1,
                  }}
                >
                  Get Started
                </Typography>
              </Box>

              {/* Form */}
              <Box
                component="form"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  width: "100%",
                }}
              >
                {/* Email */}
                <Typography
                  sx={{ color: "#fff", fontSize: 14, fontWeight: 500 }}
                >
                  Email
                </Typography>

                <TextField
                  fullWidth
                  label="Enter your email"
                  size="small"
                  sx={{
                    bgcolor: "#fff",
                    borderRadius: "10px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      height: 50,
                    },
                  }}
                />

                {/* Message */}
                <Typography
                  sx={{ color: "#A6A6A6", fontSize: 14, fontWeight: 500 }}
                >
                  Message
                </Typography>

                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="What are you saying?"
                  sx={{
                    bgcolor: "#fff",
                    borderRadius: "10px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },
                  }}
                />

                {/* Button */}
                <Button
                  sx={{
                    mt: 2,
                    height: 52,
                    fontWeight: 600,
                    color: "#fff",
                    bgcolor: "#54BD95",
                    borderRadius: "10px",
                    textTransform: "none",
                    "&:hover": { bgcolor: "#42a57c" },
                  }}
                >
                  Request Demo
                </Button>

                {/* Footer Text */}
                <Box display="flex" justifyContent="flex-end">
                  <Typography
                    sx={{
                      color: "#A6A6A6",
                      fontSize: 13,
                    }}
                  >
                    <Box component="span" sx={{ fontWeight: 400 }}>
                      or{" "}
                    </Box>
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
