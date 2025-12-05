import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import Image from "next/image";
import MarkIcon from "../../../assets/svg/m-icon.svg";
import MarkIconHero from "../../../assets/img/benefit-hero.png";
import PlanBgColor from "../../../assets/svg/planbg.svg"

const PlanSub = () => {
  return (
    <Box>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* LEFT */}
        <Grid
          size={{
            xs: 12,
            md: 4,
          }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              width: "100%",
              //  maxWidth: 475,
              textAlign: "center",
              p: { xs: 2, sm: 3 },
              bgcolor: "#fff",
              borderRadius: "20px",
            }}
          >
            {/* Heading */}
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: { xs: "20px", sm: "25px", md: "30px" },
                color: "#191A15",
                lineHeight: { xs: "1.2", md: "1.1" },
                pt: 4,
                pb: 1,
              }}
            >
              Free
            </Typography>

            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                lineHeight: 1.6,
                color: "#A6A6A6",
                mb: 3,
              }}
            >
              Have a go and test your superpowers
            </Typography>

            <Box>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: { xs: "24px", sm: "36px", md: "60px" },
                  lineHeight: 1,
                  color: "#000000",
                  display: "inline-flex",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: { xs: "12px", sm: "14px", md: "16px" },
                    color: "#A6A6A6",
                    position: "relative",
                    top: { xs: "-0.45em", sm: "-0.55em", md: "-0.65em" },
                    mr: "6px",
                    lineHeight: 1,
                    display: "inline-block",
                  }}
                >
                  $
                </Typography>
                0
              </Typography>
            </Box>

            <Box
              mt={2}
              mb={1}
              p={2}
              sx={{ bgcolor: "#F9FAFB", width: "100%", borderRadius: "10px" }}
            >
              {[
                "2 Users",
                "2 Files",
                "Public Share & Comments",
                "Chat Support ",
                "New income apps",
              ].map((text, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    p: 1.5,
                    fontSize: "14px",
                  }}
                >
                  <Image
                    src={MarkIcon.src}
                    alt="Mark-Divider"
                    width={24}
                    height={24}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: { xs: "13px", sm: "15px", md: "16px" },
                      lineHeight: "22px",
                      color: "#000000",
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
              <Button
                sx={{
                  color: "#54BD95",
                  fontSize: "16px",
                  fontWeight: 600,
                  px: 3,
                  width: { xs: "100%", md: "85%" },
                  height: "56px",
                  textTransform: "none",
                  bgcolor: "#FFFFFF",
                  border: "2px solid #f2fafa",
                  borderRadius: "20px",
                  "&:hover": { borderColor: "#42a57c", color: "#42a57c" },
                  my: 2,
                }}
              >
                Signup for free
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* MIDDLE */}
        <Grid
          size={{
            xs: 12,
            md: 4,
          }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              width: "100%",
             // height: { xs: "765px", md: "730px" },
              textAlign: "center",
              p: { xs: 2, md: 1.5 },
              borderRadius: "20px",

              // ✅ Desktop only
              backgroundImage:  `url(${PlanBgColor.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",

              // ✅ Other screens background
              bgcolor: "#6BC2A1",
            }}
          >
            {/* Heading */}
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: { xs: "20px", sm: "25px", md: "30px" },
                color: "#fff",
                lineHeight: { xs: "1.2", md: "1.1" },
                pt: 4,
                pb: 1,
              }}
            >
              Pro
            </Typography>

            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                lineHeight: 1.6,
                color: "#fff",
                mb: 3,
              }}
            >
              Experiment the power <br /> of infinite possibilities
            </Typography>

            <Box>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: { xs: "24px", sm: "36px", md: "60px" },
                  lineHeight: 1,
                  color: "#fff",
                  display: "inline-flex",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: { xs: "12px", sm: "14px", md: "16px" },
                    color: "#fff",
                    position: "relative",
                    top: { xs: "-0.45em", sm: "-0.55em", md: "-0.65em" },
                    mr: "6px",
                    lineHeight: 1,
                    display: "inline-block",
                  }}
                >
                  $
                </Typography>
                8
              </Typography>
            </Box>

            <Box my={3}>
              <Button
                sx={{
                  color: "#ffff",
                  fontSize: "14px",
                  fontWeight: 500,
                  //px: 3,
                  width: { xs: "50%", md: "42%" },
                  height: "40px",
                  textTransform: "none",
                  bgcolor: "#85DAB9",
                  border: "2px solid transparent",
                  borderRadius: "10px",
                  "&:hover": { bgcolor: "#42a57c" },
                }}
              >
                Save $50 a year
              </Button>
            </Box>

            <Box
              mt={2}
              mb={1}
              p={2}
              sx={{
                bgcolor: "#F9FAFB",
                width: "100%",
                borderRadius: "10px",
              }}
            >
              {[
                "4 Users",
                "All apps",
                "Unlimited editable exports",
                "Folders and collaboration ",
                "All incoming apps",
              ].map((text, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    p: 1.5,
                    fontSize: "14px",
                  }}
                >
                  <Image
                    src={MarkIcon.src}
                    alt="Mark-Divider"
                    width={24}
                    height={24}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: { xs: "13px", sm: "15px", md: "16px" },
                      lineHeight: "22px",
                      color: "#000000",
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
              <Button
                sx={{
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: 600,
                  px: 3,
                  width: { xs: "100%", sm: "85%" },
                  height: "56px",
                  textTransform: "none",
                  bgcolor: "#54BD95",
                  border: "2px solid transparent",
                  borderRadius: "20px",
                  "&:hover": { bgcolor: "#42a57c" },
                  my: 2,
                }}
              >
                Go to pro
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* RIGHT */}
        <Grid
          size={{
            xs: 12,
            md: 4,
          }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              width: "100%",
              // maxWidth: 375,
              textAlign: "center",
              p: { xs: 2, sm: 3 },
              bgcolor: "#fff",
              borderRadius: "20px",
            }}
          >
            {/* Heading */}
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: { xs: "20px", sm: "25px", md: "30px" },
                color: "#191A15",
                lineHeight: { xs: "1.2", md: "1.1" },
                pt: 4,
                pb: 1,
              }}
            >
              Business
            </Typography>

            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                lineHeight: 1.6,
                color: "#A6A6A6",
                mb: 3,
              }}
            >
              Unveil new superpowers and join the Design Leaque
            </Typography>

            <Box>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 500,
                  fontSize: { xs: "24px", sm: "36px", md: "60px" },
                  lineHeight: 1,
                  color: "#000000",
                  display: "inline-flex",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: { xs: "12px", sm: "14px", md: "16px" },
                    color: "#A6A6A6",
                    position: "relative",
                    top: { xs: "-0.45em", sm: "-0.55em", md: "-0.65em" },
                    mr: "6px",
                    lineHeight: 1,
                    display: "inline-block",
                  }}
                >
                  $
                </Typography>
                16
              </Typography>
            </Box>

            <Box
              mt={2}
              mb={1}
              p={2}
              sx={{
                bgcolor: "#F9FAFB",

                width: "100%",
                borderRadius: "10px",
              }}
            >
              {[
                "All the features of pro plan",
                "Account success Manager",
                "Single Sign-On (SSO)",
                "Co-conception pogram ",
                "Collaboration-Soon",
              ].map((text, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    p: 1.5,
                  }}
                >
                  <Image
                    src={MarkIcon.src}
                    alt="Mark-Divider"
                    width={24}
                    height={24}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: { xs: "13px", sm: "15px", md: "16px" },
                      lineHeight: "22px",
                      color: "#000000",
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
              <Button
                sx={{
                  color: "#54BD95",
                  fontSize: "16px",
                  fontWeight: 600,
                  px: 3,
                  width: { xs: "100%", sm: "85%" },
                  height: "56px",
                  textTransform: "none",
                  bgcolor: "#FFFFFF",
                  border: "2px solid #f2fafa",
                  borderRadius: "20px",
                  "&:hover": { borderColor: "#42a57c", color: "#42a57c" },
                  my: 2,
                }}
              >
                Goto Business
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PlanSub;
