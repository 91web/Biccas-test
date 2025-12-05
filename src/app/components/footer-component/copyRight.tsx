import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import { footerLinkStyle } from "./footerLinks";
import { Typography } from "@mui/material";

export const CopyRight = () => {
  return (
    <Box pt={5} pb={3}>
      <Grid container spacing={2} justifyContent="center">
        {/* Feature 1 */}
        <Grid size={{ xs: 12, md: 6 }} order={{ xs: 2, md: 1 }}>
          <Box>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                lineHeight: "30px",
                color: "#fff",
                textAlign: "left",
              }}
            >
              © 2022 Biccas Inc. Copyright and rights reserved
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} order={{ xs: 1, md: 2 }}>
          {/* ===== Terms & Privacy ===== */}
          <Box
            display="flex"
            justifyContent={{ xs: "center", md: "flex-end" }}
            alignItems="center"
            gap={1}
          >
            <Link href="#" style={{ textDecoration: "none" }}>
              <Box sx={footerLinkStyle}>Terms & Conditions</Box>
            </Link>

            {/* Dot separator */}
            <Box
              sx={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                bgcolor: "#A6A6A6",
                opacity: 0.8,
              }}
            />

            <Link href="#" style={{ textDecoration: "none" }}>
              <Box sx={footerLinkStyle}>Privacy Policy</Box>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
