import React from "react";
import { Box, Stack, Typography } from "@mui/material";
const GetWeather = ({ weather, location }) => {
  const d = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <Stack direction={"column"}>
      <Box
        sx={{
          width: "90%",
          height: "250px",
          margin: "auto",
          marginTop: "100px",
        }}
      >
        {weather && weather.condition && weather.condition.icon && (
          <img
            src={weather.condition.icon}
            alt="weather - icon"
            loading="lazy"
            style={{ width: "65%", height: "65%", margin: "auto" }}
          />
        )}
        <Typography
          sx={{
            fontSize: "4em",
            textAlign: "left",
            fontFamily: "poppins",
            marginLeft: "10px",
          }}
        >
          {weather.temp_c}
          <span
            style={{
              fontSize: "40px",
              fontFamily: "poppins",
              position: "relative",
              bottom: "15px",
              marginLeft: "10px",
            }}
          >
            °C
          </span>
        </Typography>

        <Typography
          sx={{
            fontSize: "20px",
            textAlign: "left",
            fontFamily: "poppins",
            marginLeft: "10px",
          }}
        >
          {weekday[d.getDay()] +
            ", " +
            new Date(Date.now()).getHours() +
            ":" +
            new Date(Date.now()).getMinutes()}
        </Typography>
        <br />
        <hr />
        <br />
        <div style={{ display: "flex", alignItems: "center" }}>
          {weather && weather.condition && weather.condition.icon && (
            <img
              src={weather.condition.icon}
              alt="weather - icon"
              loading="lazy"
              style={{ height: "40px", width: "40px" }}
            />
          )}
          {weather && weather.condition && weather.condition.text && (
            <Typography sx={{ fontFamily: "poppins" }}>
              {weather.condition.text}
            </Typography>
          )}
        </div>
        {weather && weather.condition && weather.condition.text && (
          <Typography sx={{ fontFamily: "poppins", marginLeft: "10px" }}>
            UV Index : {weather.uv}
          </Typography>
        )}
        {weather && weather.condition && weather.condition.text && (
          <Typography sx={{ fontFamily: "poppins", marginLeft: "10px" }}>
            Feels Like : {weather.feelslike_c}
          </Typography>
        )}
        {weather && weather.condition && weather.condition.text && (
          <Typography
            sx={{
              fontFamily: "Barlow",
              marginLeft: "10px",
              marginTop: "30px",
              fontSize: "35px",
              fontWeight: "bold",
            }}
          >
            {location.name} , {location.country}
          </Typography>
        )}
      </Box>
    </Stack>
  );
};
export default GetWeather;
