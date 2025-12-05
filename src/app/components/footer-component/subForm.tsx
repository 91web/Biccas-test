import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import ArrowIcon from "../../../assets/svg/sub-icon.svg";
import Image from "next/image";
import Box from "@mui/material/Box";

export const SubFormSection = () => {
  return (
    /* Form */

    <Box component="form" sx={{ width: "100%", maxWidth: 450 }}>
      <TextField
        fullWidth
        type="email"
        label="Enter your email"
        variant="outlined"
        size="small"
        slotProps={{
          inputLabel: {
            sx: {
              color: "#fff",
              fontSize: "18px",
              transition: "all 0.25s ease",
              my: "10px",
            },
          },
          input: {
            sx: { color: "#fff", bgcolor: "#161C28" },
            endAdornment: (
              <InputAdornment
                position="end"
                key="email-adornment"
                sx={{ pr: "0px", cursor: "pointer" }}
              >
                {" "}
                <Box>
                  <Image
                    src={ArrowIcon.src}
                    alt="Arrow icon"
                    width={63}
                    height={63}
                  />
                </Box>
              </InputAdornment>
            ),
          },
        }}
        sx={{
          height: "60px",
          "& .MuiOutlinedInput-root": {
            height: "60px",
            // width:"300px",
            borderRadius: "70px",
            /* 👇 REMOVE default right padding */
            paddingRight: "2px",
            /* 👇 Control adornment spacing */
            "& .MuiInputAdornment-positionEnd": {
              marginRight: "5px",
            },
            "& fieldset": {
              borderColor: "#fff",
            },
            "&:hover fieldset": {
              borderColor: "#fff",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#fff",
            },
          },
        }}
      />
    </Box>
  );
};
