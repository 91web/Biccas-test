import { Box, Button, Typography } from "@mui/material";
import PlanSub from "./planSub";

export const PlanSection = () => {
  return (
    <Box
      pb={15}
      display="flex"
      flexDirection="column"
      alignItems="center" // Center horizontally
      textAlign="center" // Center text
    >
      {/* Heading */}
      <Box mb={4}>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 700,
            fontSize: { xs: "28px", sm: "40px", md: "50px" },
            color: "#191A15",
            lineHeight: { xs: "66px", md: "73px" },
          }}
        >
          Choose Plan <br />
          That’s Right For You
        </Typography>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: { xs: "12px", sm: "14px", md: "16px" },
            lineHeight: "30px",
            color: "#A6A6A6",
            my: 2,
          }}
        >
          Choose plan that works best for you, feel free to contact us
        </Typography>
      </Box>

      {/* Buttons */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: { xs: 1, sm: 2, md: 3 },
          alignItems: "center",
          justifyContent: "center",
          width: { md: "350px" },
          p: 1,
          bgcolor: "#fff",
          borderRadius: "8px",
          border: "2px solid #fff",
        }}
      >
        {/* Bill Monthly */}
        <Button
          sx={{
            color: "#191A15",
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: 500,
            width: { md: "150px" },
            height: "56px",
            textTransform: "none",
            "&:hover": {
              color: "#42a57c",
            },
          }}
        >
          Bill Monthly
        </Button>

        {/* Bill Yearly */}
        <Button
          variant="contained"
          sx={{
            bgcolor: "#54BD95",
            color: "#fff",
            fontSize: { xs: "14px", md: "16px" },
            fontWeight: 500,
            textTransform: "none",
            borderRadius: "8px",
            width: { md: "160px" },
            height: "56px",
            "&:hover": {
              bgcolor: "#42a57c",
            },
          }}
        >
          Bill Yearly
        </Button>
      </Box>

      <Box mt={4}>
        <PlanSub />
      </Box>
    </Box>
  );
};
