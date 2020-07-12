import React, { useState, useEffect } from "react";
import Form from "./Form";
import "./App.css";
import Weather from "./Weather";

function App() {
  const APIKEY = "3c6241ea411d041a680ec839e2d82f3d";
  const [weather, setWeather] = useState([]);

  async function fetchdata(e) {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`
    );
    const json = await response.json();

    console.log(json);
    const status = await response.status;
    if (status === 200) {
      setWeather({
        City: json.name,
        Country: json.sys.country,
        temperature: Math.round(json.main.temp - 273.15), //La fonction Math.round() retourne la valeur d'un nombre arrondi à l'entier le plus proche.
        Description: json.weather[0].description,
        Laltitude: json.coord.lat,
        Longitude: json.coord.lon,
        error: "",
      });
    } else {
      alert("ENTER A VALID VALUE!!!");
    }
  }

  return (
    <div className="App">
      <header>
        {" "}
        <h1 style={{ textAlign: "center" }}>Weather App</h1>
      </header>

      <Form getweather={fetchdata} />

      <Weather
        City={weather.City}
        Country={weather.Country}
        temperature={weather.temperature}
        Description={weather.Description}
        Laltitude={weather.Laltitude}
        Longitude={weather.Longitude}
        error={weather.error}
      />
    </div>
  );
}

export default App;
