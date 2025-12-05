import { Box, Typography, Grid } from "@mui/material";
import LogoB from "../../../assets/svg/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { SubFormSection } from "./subForm";
import { CopyRight } from "./copyRight";

const linkStyle = {
  fontSize: "16px",
  fontWeight: 500,
  color: "#A6A6A6",
  my: "5px",
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
    <Box pt={15}>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="flex-start"
      >
        {/* Left Section */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Box
            mb={10}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            textAlign="left"
          >
            <Image src={LogoB.src} alt="Logo Footer" width={160} height={30} />
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                lineHeight: "30px",
                color: "#A6A6A6",
                my: 3,
              }}
            >
              Get started now, try our product
            </Typography>
            <SubFormSection />
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Grid
            container
            spacing={2}
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            {/* Support */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#fff",
                  }}
                >
                  Support
                </Typography>
                {[
                  "Help centre",
                  "Account information",
                  "About",
                  "Contact us",
                ].map((text, i) => (
                  <Link key={i} href="#" style={{ textDecoration: "none" }}>
                    <Box sx={linkStyle}>{text}</Box>
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* Help & Solutions */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#fff",
                  }}
                >
                  Help & Solutions
                </Typography>
                {[
                  "Talk to support",
                  "Support docs",
                  "System status",
                  "Covid response",
                ].map((text, i) => (
                  <Link key={i} href="#" style={{ textDecoration: "none" }}>
                    <Box sx={linkStyle}>{text}</Box>
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* Product */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography
                  sx={{
                    fontFamily: "Inter",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#fff",
                  }}
                >
                  Product
                </Typography>
                {["Update", "Security", "Beta test", "Pricing Product"].map(
                  (text, i) => (
                    <Link key={i} href="#" style={{ textDecoration: "none" }}>
                      <Box sx={linkStyle}>{text}</Box>
                    </Link>
                  )
                )}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <CopyRight />
    </Box>
  );
};
