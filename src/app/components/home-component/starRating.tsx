import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid"; // Added for responsive layout

const ratings = [
  { stars: 5, value: "4.9", label: "databricks" },
  { stars: 4, value: "4.8", label: "Chainalysis" },
];

export default function StarRating() {
  return (
    <Grid container spacing={2} justifyContent="left">
      {ratings.map((rating, index) => (
        <Grid size={{ xs: 12, md: 3 }} key={index}>
          {/* Each rating column */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              gap: 0.5,
              p: 2,
              //  border: "1px solid #eee",
              //   borderRadius: 2,
            }}
          >
            {/* Row 1: Stars */}
            <Rating
              value={rating.stars}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />

            {/* Row 2: Rating value */}
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "18px",
                          color: "#191A15",
                my: 1,
              }}
            >
              {rating.value}
              <span
                style={{ color: "#191A15", fontWeight: 400, fontSize: "16px" }}
              >
                {" "}
                / 5 rating
              </span>
            </Typography>

            {/* Row 3: Label */}
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: 500,
                fontSize: "16px",
        
                color: "#A6A6A6",
                mb: 6,
              }}
            >
              {rating.label}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
