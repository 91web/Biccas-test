import { Box, Typography } from "@mui/material";
import LogoB from "../../../assets/svg/logo.svg";

import Image from "next/image";
import { Grid } from "@mui/material";
import Link from "next/link";
import { SubFormSection } from "./subForm";
import { CopyRight } from "./copyRight";

const linkStyle = {
  fontSize: "18px",
  fontWeight: 500,
  color: "#A6A6A6",
  my:"5px",
  textDecoration: "none",
  "&:hover": {
    color: "#fff",
    textDecoration: "underline",
  },
};

export const footerLinkStyle = {
  fontSize: "18px",
  fontWeight: 500,
  color: "#fff",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
};

export const FooterLinks = () => {
  return (
    <Box py={15}>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
           mb={10}
            display="flex"
            flexDirection="column"
            alignItems="left" // Center horizontally
            textAlign="left" // Center text
          >
            <Image src={LogoB.src} alt="Logo Footer" width={160} height={30} />
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                lineHeight: "30px",
                color: "#A6A6A6",
                textAlign: "left",
                my: 3,
              }}
            >
              Get started noew try our product
            </Typography>
            <SubFormSection />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="flex-start"
            sx={{ color: "#fff" }}
          >
            {/* ===== Support ===== */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography
                  sx={{
                    fontFamily: "inter",
                    fontSize: "18px",
                    fontWeight: 500,
                  }}
                >
                  Support
                </Typography>

                <Link href="#" style={{ textDecoration: "none" }}>
                  <Box sx={linkStyle}>Help centre</Box>
                </Link>

                <Link href="#" style={{ textDecoration: "none" }}>
                  <Box sx={linkStyle}>Account information</Box>
                </Link>

                <Link href="#" style={{ textDecoration: "none" }}>
                  <Box sx={linkStyle}>About</Box>
                </Link>

                <Link href="#" style={{ textDecoration: "none" }}>
                  <Box sx={linkStyle}>Contact us</Box>
                </Link>
              </Box>
            </Grid>

            {/* ===== Help & Solutions ===== */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography
                  sx={{
                    fontFamily: "inter",
                    fontSize: "18px",
                    fontWeight: 500,
                  }}
                >
                  Help & Solutions
                </Typography>

                <Link href="#" style={{ textDecoration: "none" }}>
                  <Box sx={linkStyle}>Talk to support</Box>
                </Link>

                <Link href="#" style={{ textDecoration: "none" }}>
                  <Box sx={linkStyle}>Support docs</Box>
                </Link>

                <Link href="#" style={{ textDecoration: "none" }}>
                  <Box sx={linkStyle}>System status</Box>
                </Link>

                <Link href="#" style={{ textDecoration: "none" }}>
                  <Box sx={linkStyle}>Covid response</Box>
                </Link>
              </Box>
            </Grid>

            {/* ===== Product ===== */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography
                  sx={{
                    fontFamily: "inter",
                    fontSize: "18px",
                    fontWeight: 500,
                  }}
                >
                  Product
                </Typography>

                <Link href="#" style={{ textDecoration: "none" }}>
                  <Box sx={linkStyle}>Update</Box>
                </Link>

                <Link href="#" style={{ textDecoration: "none" }}>
                  <Box sx={linkStyle}>Security</Box>
                </Link>

                <Link href="#" style={{ textDecoration: "none" }}>
                  <Box sx={linkStyle}>Beta test</Box>
                </Link>

                <Link href="#" style={{ textDecoration: "none" }}>
                  <Box sx={linkStyle}>Pricing Product</Box>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CopyRight />
    </Box>
  );
};
