import React from "react";

const Weather = ({
  City,
  Country,
  temperature,
  Description,
  lon,
  lat,
  Humidity,
  Pressure,
}) => {
  const ImageCloud = (
    <img
      src="https://images.twinkl.co.uk/tr/image/upload/illustation/Strong-Winds-Symbol---Geography-Coasts-Weather-Cloud-KS3.png"
      width="50%"
      height="50%"
    />
  );
  const clearSky = (
    <img
      src="https://images.twinkl.co.uk/tr/image/upload/illustation/Sun---Rain-Cloud-Weather-Phenomena-Light-Water-Cycle-KS1.png"
      width="50%"
      height="50%"
    />
  );
  const rainImage = (
    <img
      src="https://images.twinkl.co.uk/tr/image/upload/illustation/Heavy-Rain-Symbol---Geography-Coasts-Weather-Cloud-KS3.png"
      width="50%"
      height="50%"
    />
  );
  const snowImage = (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE5rPxha9IP_D7DP1kc-uoNHAzYS-qZtp93_5vTXyPSbnQOXLHM4w_cIEFHsyiaMRHN1Y&usqp=CAU"
      width="50%"
      height="50%"
    />
  );

  function Decor() {
    if (Description) {
      const WeatherDescription = Description.split(" ");
      const cloudWeather = ["cloud", "cloudy", "clouds", "overcast"];
      const cloudWeatherSky = ["clear", "clear sky", "sky", "Clear Sky"];
      const cloudWeatherRain = [
        "rainy",
        "rain",
        "light rain",
        "rains",
        "moderate rain",
      ];
      const cloudWeatherSnow = ["snow", "snowy"];
      for (var i = 0; i < WeatherDescription.length; i++) {
        if (cloudWeather.includes(WeatherDescription[i])) {
          return ImageCloud;
        } else if (cloudWeatherSky.includes(WeatherDescription[i])) {
          return clearSky;
        } else if (cloudWeatherRain.includes(WeatherDescription[i])) {
          return rainImage;
        } else if (cloudWeatherSnow.includes(WeatherDescription[i])) {
          return snowImage;
        } else console.log(WeatherDescription);
      }
      console.log("Description is " + WeatherDescription);
    }
  }
  console.log(Description);
  {
    /*const str = "Être ou ne pas être, telle est la question.";

console.log(str.includes("Être"));       // true
console.log(str.includes("question"));   // true
console.log(str.includes("pléonasme"));  // false*/
  }

  if (!City) {
    return (
      <>
        <div className="home">
          <img
            src="https://i.pinimg.com/originals/06/c4/f7/06c4f70ec5931e2342e703e8a3f0a253.png"
            width="20%"
            height="20%"
          />
        </div>
      </>
    );
  } else {
    return (
      <div className="weath">
        <div className="Weather">
          <div className="img"> {Description && Decor()}</div>
          {City && Country && (
            <p>
              <span> City :</span>
              {City},<span> Country :</span>
              {Country}
            </p>
          )}

          {temperature > 10 ? (
            <p>
              <span>Temperature in °C: </span>
              {temperature}{" "}
              <i class="fas fa-temperature-high" style={{ color: "red" }}></i>
            </p>
          ) : (
            <p>
              <span>Temperature in °C : </span>
              {temperature}{" "}
              <i
                class="	fas fa-temperature-low"
                style={{ color: "darkcyan" }}
              ></i>
            </p>
          )}

          {Description && (
            <p style={{ textTransform: "capitalize" }}>
              <span>Description:</span>
              {Description}
            </p>
          )}
          {Pressure && (
            <p>
              <span>Pressure :</span>
              {Pressure} hPa
            </p>
          )}
          {Humidity && (
            <p>
              <span>Humidity : </span>
              {Humidity} % <i class="fas fa-humidity"></i>
            </p>
          )}
          {lon && (
            <div>
              <span>Geographic Coordinates :</span>
              <p>
                <span>Latitude:</span>
                {lat} φ
              </p>
              <p>
                <span>Longitude :</span>
                {lon} λ
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default Weather;
