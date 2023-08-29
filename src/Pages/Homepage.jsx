import React, { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { TravelExploreOutlined } from "@mui/icons-material";
import axios from "axios";
import Today from "../components/Today";
import Week from "../components/Week";
import GetWeather from "../components/GetWeather";

const Homepage = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({});
  const [activeTab, setActiveTab] = useState("today");
  const [display, setDisplay] = useState(false);

  const api_key = process.env.REACT_APP_API_KEY;
  const api_url = process.env.REACT_APP_API_URL;

  const handleClick = async () => {
    try {
      const response = await axios.get(
        `${api_url}/current.json?key=${api_key}&q=${city}`
      );
      const { current, location } = response.data;
      setWeather({ ...current });
      setLocation({ ...location });
      setDisplay(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box sx={{ width: "100%", height: "100vh", backgroundColor: "#C6C6C6" }}>
        <Grid
          container
          sx={{
            width: "100%",
            height: "100%",
            padding: "30px",
          }}
        >
          <Grid
            item
            className="grid-item-left"
            xs={2.5}
            sx={{
              backgroundColor: "#E2E2E2",
              borderBottomLeftRadius: "30px",
              borderTopLeftRadius: "30px",
            }}
          >
            <div className="search-box">
              <TravelExploreOutlined
                className="search-icon"
                onClick={handleClick}
              />
              <input
                type="text"
                className="text-field-city"
                placeholder="enter the city..."
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
            </div>
            {display ? (
              <GetWeather weather={weather} location={location} />
            ) : (
              <Typography
                sx={{
                  fontFamily: "poppins",
                  marginTop: "100%",
                  width: "80%",
                  marginLeft: "30px",
                }}
              >
                Type your desired city name in the search box to get a realtime
                weather report.
              </Typography>
            )}
          </Grid>
          <Grid
            item
            xs={9.5}
            sx={{
              backgroundColor: "#D2D2D2",
              borderTopRightRadius: "30px",
              borderBottomRightRadius: "30px",
            }}
          >
            <div className="tabs">
              <button
                className="today-button"
                onClick={() => setActiveTab("today")}
              >
                Today
              </button>
              <button
                className="week-button"
                onClick={() => setActiveTab("week")}
              >
                Week
              </button>
            </div>
            <div>
              {activeTab === "today" && <Today />}
              {activeTab === "week" && <Week />}
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Homepage;
