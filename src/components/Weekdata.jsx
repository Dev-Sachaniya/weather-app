import React from "react";
import { Stack, Box, Typography } from "@mui/material";
const Weekdata = ({ forecastday }) => {
  return (
    <Box>
      <Stack
        direction={"column"}
        sx={{
          backgroundColor: "#fff",
          padding: "10px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontFamily: "Poppins", color: "#9897a9" }}>
          {forecastday.date}
        </Typography>
        <img
          src={forecastday.day.condition.icon}
          alt="weather_icon"
          className="weather-img"
          style={{ width: "40px", height: "40px", margin: "auto" }}
        />
        <Typography sx={{ fontFamily: "Poppins", color: "#9897a9" }}>
          {forecastday.day.maxtemp_c}° {forecastday.day.mintemp_c}°
        </Typography>
      </Stack>
    </Box>
  );
};

export default Weekdata;
