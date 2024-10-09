import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import "./Searchbox.css";
import { useEffect, useState } from "react";
export default function SeacrhBox({ updateWeather }) {
  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY = "7d417b61cac5e546acc769cc14302218";
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  let updateCity = (event) => {
    setCity(event.target.value);
  };
  async function getWeatherData() {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let responceJson = await response.json();
      let cityWeather = {
        city: responceJson.name,
        temp: responceJson.main.temp,
        weather: responceJson.weather[0].main,
        humidity: responceJson.main.humidity,
        feelsLike: responceJson.main.feels_like,
        tempMin: responceJson.main.temp_min,
        tempMax: responceJson.main.temp_max
      };
      return cityWeather;
    } catch (err) {
      throw err;
    }
  }
  let updateSubmit = async (event) => {
    try {
      event.preventDefault();
      setCity("");
      let info = await getWeatherData();
      updateWeather(info);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="searchBox">
      <form onSubmit={updateSubmit}>
        <TextField
          onChange={updateCity}
          value={city}
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          required
        />
        <br />
        <br />
        <Button variant="contained" type="submit" color="success">
          Search
        </Button>
        <br />
        {error && (
          <Stack sx={{ width: "100" }} spacing={2}>
            <Alert severity="warning">No Such Place Found</Alert>
          </Stack>
        )}
      </form>
    </div>
  );
}
