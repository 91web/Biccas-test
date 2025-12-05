import { Box, Grid, Typography } from "@mui/material";
//import Image from "next/image";
import StarRating from "./starRating";

export const PartnerSupport = () => {
  return (
    <Box>
      {/* Heading */}
      <Box sx={{ width: "100%" }}>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: { xs: "20px", sm: "40px", md: "50px" },
            color: "#191A15",
            my: 4,
            lineHeight: "60px",
          }}
        >
          How we support our pratner all over the world
        </Typography>
      </Box>

      {/* Subheading */}

      <Box
        sx={{
          width: "100%",

          justifyContent: "left",
          my: 2,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: { xs: "12px", sm: "14px", md: "16px" },
            lineHeight: "30px",
            color: "#A6A6A6",
            mb: 6,
          }}
        >
          SaaS become a common delivery model for many business application,
          including office software, messaging software, payroll processing
          software, DBMS software, management software
        </Typography>
      </Box>
      <StarRating />
    </Box>
  );
};
