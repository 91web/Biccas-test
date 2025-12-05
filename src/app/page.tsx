import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import HeroSet from "./components/home-component/hero";
import Hero from "../assets/img/hero.png";
import BgSection from "../assets/img/bg-image.png";
import { TeamCollabs } from "./components/home-component/teamCo";
import { PartnerSupport } from "./components/home-component/partnerSupport";
import { AimSupport } from "./components/home-component/aimSuppport";
import { FeatureSection } from "./components/home-component/featureSection";
import BenefitSection from "./components/home-component/benefitSection";
import { PlanSection } from "./components/home-component/planSection";
import AvatarSection from "./components/footer-component/footerForm";
import { FooterLinks } from "./components/footer-component/footerLinks";

export default function Home() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${BgSection.src})`, // Set background image
        backgroundSize: "cover", // Ensure the image covers the entire section
        backgroundPosition: "center", // Center the background image
        backgroundRepeat: "no-repeat", // Prevent the image from repeating
        height: "120vh", // Set height to 100vh
        width: "100%", // Set width to 100%
        // display: "flex",
        alignItems: "center", // Center content vertically
        bgcolor: "#F9F8FE", // Fallback background color",
      }}
    >
      <Box pt={{ xs: 15, md: 22 }} width={"100%"}>
        <Container maxWidth={"xl"}>
          <Grid container spacing={4} alignItems="center">
            {/* Hero Section */}
            <Grid size={{ xs: 12, md: 6 }} order={{ xs: 2, md: 1 }}>
              <HeroSet />
            </Grid>

            {/* Hero Image */}
            <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  //  pt: { xs: 40, md: 0 },
                }}
              >
                <Image
                  src={Hero}
                  alt="Biccas-Hero"
                  priority
                  height={500}
                  width={770}
                  style={{ maxWidth: "100%", height: "auto" }} // Ensure responsiveness
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Heading */}
      <Box pt={{ xs: 15, md: 8 }} width={"100%"}>
        <Container maxWidth="xl">
          <Box
            sx={{
              width: "100%",
              // maxWidth: "555px",
              // mt: 6,
              // mb: 4,
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 700,

                fontSize: { xs: "20px", sm: "30px", md: "40px" },
                color: "#191A15",
                my: 2,
                lineHeight: "80px",
              }}
            >
              More than 25,000 teams use Collabs
            </Typography>
          </Box>
          <TeamCollabs />
        </Container>
      </Box>

      {/* Partner Support and Aim Support Sections */}
      <Box bgcolor={"#F9F8FE"}>
        <Container maxWidth="xl" sx={{ py: 10 }}>
          <Grid container spacing={3} sx={{ width: "100%" }}>
            {/* PartnerSupport Component */}
            <Grid size={{ xs: 12, md: 6 }}>
              <PartnerSupport />
            </Grid>

            {/* AimSupport Component */}
            <Grid size={{ xs: 12, md: 6 }}>
              <AimSupport />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          background:
            "linear-gradient(40deg, transparent 0%, rgba(255,214,214,0.22) 3%, #FFFFFF 65%)",
        }}
      >
        <Container maxWidth="xl" sx={{ pt: 10 ,pb:3}}>
          <FeatureSection />
        </Container>
      </Box>
      <Box
        sx={{
          background: `
      linear-gradient(
        135deg,
        rgba(255, 214, 214, 0.2) 0%,
        rgba(255, 214, 214, 0.2) 25%,
        rgba(84, 190, 150, 0.2) 70%,
        rgba(84, 190, 150, 0.2) 2%
      )
    `,
        }}
      >
        <Container maxWidth="xl" sx={{ py: 10 }}>
          <BenefitSection />
        </Container>
        <Container maxWidth="xl" sx={{ py: 8 }}>
          <PlanSection />
        </Container>
      </Box>
      <Box bgcolor={"#161C28"}>
        <Container maxWidth="xl" sx={{ pt: 10 }}>
          <AvatarSection />
          <FooterLinks />
        </Container>
      </Box>
    </Box>
  );
}
