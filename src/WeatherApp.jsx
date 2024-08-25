import SeacrhBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState, useEffect } from "react";
import { getCity } from "./initialData.js";
export default function WeatherApp() {
  let [weatherInfo, setWeather] = useState("");
  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getCity();
      setWeather({ ...data });
    };
    fetchWeatherData();
  }, []);
  function updateWeather(newData) {
    setWeather(newData);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App By Tayyab</h1>
      <SeacrhBox updateWeather={updateWeather} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
