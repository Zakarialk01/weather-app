import React, { useState } from "react";

import "./App.css";
import Weather from "./Weather";

function App() {
  const APIKEY = "3c6241ea411d041a680ec839e2d82f3d";
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const clearInput = () => {
    setCity("");
    setCountry("");
  };
  async function fetchData(e) {
    e.preventDefault();

    clearInput();

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

        Pressure: json.main.pressure,
        Humidity: json.main.humidity,
        lat: json.coord.lat,
        lon: json.coord.lon,
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
        <h1 style={{ textAlign: "center" }}>Weather App ☁️</h1>
      </header>

      <div className="form">
        <form onSubmit={fetchData} className="searchbox">
          <input
            type="text"
            name="city"
            value={city}
            placeholder="Tap a city"
            className="searchbox-bar"
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            name="country"
            value={country}
            placeholder="Tap a country"
            className="searchbox-bar"
            onChange={(e) => setCountry(e.target.value)}
          />
          <button className="searchbox-box">Submit</button>
        </form>
      </div>

      <Weather
        City={weather.City}
        Country={weather.Country}
        temperature={weather.temperature}
        Description={weather.Description}
        Pressure={weather.Pressure}
        Humidity={weather.Humidity}
        lat={weather.lat}
        lon={weather.lon}
        error={weather.error}
      />
      <div id="footer">
        © Copyright 2021. LOUKILIZAKARIA All Rights Reserved.{" "}
        <a>Mentions légales</a> | <a> Politique de confidentialité</a>
      </div>
    </div>
  );
}

export default App;
