import { Box, Grid } from "@mui/material";
import Image from "next/image";
import Icon1 from "../../../assets/svg/icon-1.svg";
import Icon2 from "../../../assets/svg/icon-2.svg";
import Icon3 from "../../../assets/svg/icon-3.svg";
import Icon4 from "../../../assets/svg/icon-4.svg";
import Icon5 from "../../../assets/svg/icon-5.svg";

export const TeamCollabs = () => {
  const teamItems = [
    { name: "Unsplash", icon: Icon1 },
    { name: "Notion", icon: Icon2 },
    { name: "INTERCOM", icon: Icon3 },
    { name: "Descript", icon: Icon4 },
    { name: "Grammarly", icon: Icon5 },
  ];

  return (
    <Box pb={15}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {teamItems.map((item, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}>
            <Box
              sx={{
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "30px",
                lineHeight: "36px",
                textAlign: "center",
                color: "#A6A6A6",
                display: "flex",
                gap: 2,
                alignItems: "center",
                justifyContent: "left",
              }}
            >
              <Image
                src={item.icon}
                alt={`Biccas team ${index + 1}`}
                priority
                height={34}
                width={32}
              />
              {item.name}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
