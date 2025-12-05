import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import LineD from "../../../assets/svg/line.svg";
import PlayIcon from "../../../assets/svg/play.svg";
import Link from "next/link";
const HeroSet = () => {
  return (
    <Box
      sx={{
        textAlign: "left",
        // padding: { xs: "20px", sm: "40px 20px" },
        // backgroundColor: "#f5f5f5",
        // borderRadius: "8px",
        maxWidth: "800px",
        //  margin: "0 auto",
      }}
    >
      {/* Heading */}
      <Box sx={{ width: "100%", maxWidth: "555px" }}>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 700,
            fontSize: { xs: "20px", sm: "50px", md: "80px" },
            color: "#191A15",
            my: 2,
            lineHeight: "80px",
          }}
        >
          We're here to Increase your Productivity
        </Typography>
      </Box>

      {/* Divider */}
      <Box sx={{ display: "flex", justifyContent: "left", mt: 3, mb: 6 }}>
        <Image
          src={LineD.src}
          alt="Biccas-Divider"
          priority
          width={499}
          height={36}
        />
      </Box>

      {/* Subheading */}

      <Box
        sx={{ width: "100%", maxWidth: "481px", justifyContent: "left", my: 2 }}
      >
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            lineHeight: "30px",
            color: "#000000",
            mb: 6,
          }}
        >
          Let's make your work more organize and easily using the Taskio
          Dashboard with many of the latest features in managing work every day.
        </Typography>
      </Box>

      {/* Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          gap: 4,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center", // Ensure vertical alignment
        }}
      >
        {/* Try Free Trial Button */}
        <Link href={"/login"}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#54BD95",
              color: "#fff",
              fontSize: "16px",
              fontWeight: 600,
              textTransform: "none",
              borderRadius: "40px",
              width: { xs: "100%", sm: "165px" },
              height: "62px", // Set height explicitly
              "&:hover": { backgroundColor: "#42a57c" },
            }}
          >
            Try free trial
          </Button>
        </Link>

        {/* View Demo Button */}
        <Button
          sx={{
            color: "#191A15",
            fontSize: "16px",
            fontWeight: 600,
            padding: "10px 20px",
            width: { xs: "100%", sm: "220px" },
            height: "62px", // Match the height of the first button
            textTransform: "none",
            "&:hover": { borderColor: "#42a57c", color: "#42a57c" },
            gap: 2,
            display: "flex",
            alignItems: "center", // Center the icon and text vertically
            justifyContent: "center", // Center the content horizontally
          }}
        >
          <Image src={PlayIcon} alt="Biccas" priority className="h-20 w-auto" />{" "}
          View Demo
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSet;
