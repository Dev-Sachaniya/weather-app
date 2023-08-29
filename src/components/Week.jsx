import React, { useEffect, useState } from "react";
import axios from "axios";
import Weekdata from "./Weekdata";

const Week = () => {
  const [location, setLocation] = useState({});
  const [daysHistory, setDaysHistory] = useState([]);
  const date = new Date();
  const startDate = date.getDate() - 6;
  const endDate = date.getDate();
  const api_key = process.env.REACT_APP_API_KEY;
  const api_url = process.env.REACT_APP_API_URL;
  const getWeatherHistory = async () => {
    try {
      const response = await axios.get(
        `${api_url}/history.json?key=${api_key}&q=bhavnagar&dt=2023-08-${startDate}&end_dt=2023-08-${endDate}`
      );
      const { location, forecast } = response.data;
      const { forecastday } = { ...forecast };
      setDaysHistory(forecastday);
      setLocation(location);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherHistory();
  }, []);
  return (
    <div className="week">
      <div className="week-item">
        {daysHistory.map((day) => {
          return <Weekdata forecastday={day} />;
        })}
      </div>
    </div>
  );
};

export default Week;
