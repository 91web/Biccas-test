"use client";

import { Box, Typography, Tooltip } from "@mui/material";

export default function Password() {
  const loginDetails = {
    email: "john@mail.com",
    password: "changeme",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "center",
        alignItems: "center",
        gap: 4, // spacing between email & password
        mt: 5,
      }}
    >
      {/* Email */}
      <Tooltip title={loginDetails.email} arrow>
        <Box
          sx={{
            p: 2,
            border: "1px solid #ccc",
            borderRadius: "8px",
            cursor: "pointer",
            minWidth: 150,
            textAlign: "center",
            "&:hover": { bgcolor: "#f5f5f5" },
          }}
        >
          <Typography variant="subtitle2" sx={{ color: "#555" }}>
            Email
          </Typography>
          <Typography variant="h6" sx={{ color: "#000", fontWeight: 600 }}>
            {loginDetails.email.replace(/(.{2})(.*)(@.*)/, "$1***$3")}
            {/* partially hide for professional look */}
          </Typography>
        </Box>
      </Tooltip>

      {/* Password */}
      <Tooltip title={loginDetails.password} arrow>
        <Box
          sx={{
            p: 2,
            border: "1px solid #ccc",
            borderRadius: "8px",
            cursor: "pointer",
            minWidth: 150,
            textAlign: "center",
            "&:hover": { bgcolor: "#f5f5f5" },
          }}
        >
          <Typography variant="subtitle2" sx={{ color: "#555" }}>
            Password
          </Typography>
          <Typography variant="h6" sx={{ color: "#000", fontWeight: 600 }}>
            {"*****"} {/* hide password */}
          </Typography>
        </Box>
      </Tooltip>
    </Box>
  );
}
