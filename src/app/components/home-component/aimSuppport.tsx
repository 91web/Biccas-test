import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Icon1 from "../../../assets/svg/a-icon-1.svg";
import Icon2 from "../../../assets/svg/a-icon-2.svg"; // Second image
import Icon3 from "../../../assets/svg/a-icon-3.svg"; // Third image

const aimData = [
  {
    title: "Publishing",
    description:
      "Plan, collaborate, and publish your content that drives meaningful engagement and growth for your brand.",
    icon: Icon1, // First image
  },
  {
    title: "Analytics",
    description:
      "Track performance, analyze trends, and optimize strategies with real-time data insights.",
    icon: Icon2, // Second image
  },
  {
    title: "Collaboration",
    description:
      "Streamline teamwork, share ideas, and achieve goals efficiently with seamless collaboration tools.",
    icon: Icon3, // Third image
  },
];

export const AimSupport = () => {
  return (
    <Box sx={{ width: "100%" }}>
      {aimData.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: 2,
            mb: 6, // Adds spacing between instances
          }}
        >
          {/* Image */}
          <Image
            src={item.icon.src} // Dynamically use the icon from the array
            alt={`Biccas aim ${index + 1}`}
            priority
            height={70}
            width={70}
            style={{
              flexShrink: 0,
            }}
          />

          {/* Typography Column */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {/* First Typography */}
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: { xs: "16px", sm: "20px", md: "28px" },
                color: "#191A15",
              }}
            >
              {item.title}
            </Typography>

            {/* Second Typography */}
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                lineHeight: "30px",
                color: "#A6A6A6",
              }}
            >
              {item.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
