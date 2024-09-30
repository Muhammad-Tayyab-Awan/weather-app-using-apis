export let getCity = async () => {
  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  // missing are the keys of apis
  const jsonResponse = await request.json();
  let response = await fetch(
    `${API_URL}?q=${jsonResponse.city}&appid=${API_KEY}&units=metric`
  );
  let responceJson = await response.json();
  const Data = {
    city: await responceJson.name,
    temp: await responceJson.main.temp,
    weather: await responceJson.weather[0].main,
    humidity: await responceJson.main.humidity,
    feelsLike: await responceJson.main.feels_like,
    tempMin: await responceJson.main.temp_min,
    tempMax: await responceJson.main.temp_max
  };
  return Data;
};
