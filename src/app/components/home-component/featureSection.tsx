import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import FeatureHero1 from "../../../assets/img/feature-1.png";
import FeatureHero2 from "../../../assets/img/feature-2.png";
import FeatureHero3 from "../../../assets/img/feature-3.png";

export const FeatureSection = () => {
  return (
    <Box>
      <Grid container spacing={4} justifyContent="center">
        {/* Feature 1 */}
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Box display="flex" flexDirection="column">
            {/* Top */}
            <Box minHeight={80} mb={2}>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: { xs: "22px", sm: "28px", md: "36px" },
                  color: "#191A15",
                }}
              >
                Our Features you can get
              </Typography>
            </Box>

            {/* Image */}
            <Box
              width="100%"
              sx={{ aspectRatio: "364 / 430" }}
              position="relative"
              mb={3}
            >
              <Image
                src={FeatureHero1}
                alt="Feature Hero 1"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>

            {/* Text */}
            <Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "16px", md: "22px" },
                  mb: 1,
                  color: "#191A15",
                }}
              >
                Collaboration Teams
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "13px", md: "16px" },
                  lineHeight: "26px",
                  color: "#A6A6A6",
                }}
              >
                Handle projects together with your team virtually.
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Feature 2 */}
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Box display="flex" flexDirection="column">
            {/* Top */}
            <Box minHeight={80} mb={2}>
              <Typography
                sx={{
                  fontSize: { xs: "13px", md: "16px" },
                  lineHeight: "26px",
                  color: "#A6A6A6",
                }}
              >
                We offer interesting features that increase productivity and
                make project management easier.
              </Typography>
            </Box>

            {/* Image */}
            <Box
              width="100%"
              sx={{ aspectRatio: "364 / 430" }}
              position="relative"
              mb={3}
            >
              <Image
                src={FeatureHero2}
                alt="Feature Hero 2"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>

            {/* Text */}
            <Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "16px", md: "22px" },
                  mb: 1,
                  color: "#191A15",
                }}
              >
                Cloud Storage
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "13px", md: "16px" },
                  lineHeight: "26px",
                  color: "#A6A6A6",
                }}
              >
                Enjoy secure cloud storage with up to 2TB available.
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Feature 3 */}
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Box display="flex" flexDirection="column">
            {/* Top */}
            <Box minHeight={80} mb={2} display="flex" justifyContent="flex-end">
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  bgcolor: "#54BD95",
                  "&:hover": { bgcolor: "#42a57c" },
                  borderRadius: "70px",
                  fontSize: "14px",
                  height: "52px",
                  px: 4,
                  display: { xs: "none", md: "block" },
                }}
              >
                Get Started
              </Button>
            </Box>

            {/* Image */}
            <Box
              width="100%"
              sx={{ aspectRatio: "364 / 430" }}
              position="relative"
              mb={3}
            >
              <Image
                src={FeatureHero3}
                alt="Feature Hero 3"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>

            {/* Text */}
            <Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "16px", md: "22px" },
                  mb: 1,
                  color: "#191A15",
                }}
              >
                Daily Analytics
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "13px", md: "16px" },
                  lineHeight: "26px",
                  color: "#A6A6A6",
                }}
              >
                Get useful insights every day to improve performance.
              </Typography>
            </Box>
          </Box>
        </Grid>
        {/* Top */}
        <Box minHeight={80}  display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              bgcolor: "#54BD95",
              "&:hover": { bgcolor: "#42a57c" },
              borderRadius: "70px",
              fontSize: "14px",
              height: "52px",
              px: 4,
              display: { xs: "block", md: "none" },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};
