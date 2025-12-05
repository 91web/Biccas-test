import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import MarkIcon from "../../../assets/svg/m-icon.svg";
import MarkIconHero from "../../../assets/img/benefit-hero.png";

const BenefitSection = () => {
  return (
    <Box>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* LEFT */}
        <Grid size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">
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
                fontSize: { xs: "28px", sm: "50px", md: "80px" },
                color: "#191A15",
                my: 4,
                lineHeight: { xs: "60px", md: "80px" },
              }}
            >
              What Benifit Will You Get
            </Typography>

            {[
              "Free Consulting With Experet Saving Money",
              "Online Banking",
              "Investment Report Every Month",
              "Saving Money For The Future",
              "Online Transection",
            ].map((text, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 2,
                  mb: 3,
                }}
              >
                <Image
                  src={MarkIcon.src}
                  alt="Mark-Divider"
                  width={32}
                  height={32}
                />

                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 500,
                    fontSize: { xs: "14px", sm: "16px", md: "18px" },
                    lineHeight: "30px",
                    color: "#000000",
                  }}
                >
                  {text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* RIGHT */}
        <Grid size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">
          <Box sx={{ width: "100%", maxWidth: "650px" }}>
            <Image
              src={MarkIconHero.src}
              alt="Mark Hero Benefit-Divider"
              priority
              width={640}
              height={480}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BenefitSection;
