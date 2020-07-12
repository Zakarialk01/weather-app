import React from "react";

const Weather = ({
  City,
  Country,
  temperature,
  Description,
  Laltitude,
  Longitude,
}) => {
  const ImageCloud = (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSY4zTz5NjNrF8sMS_rmzU393yvzBSjWS99Qg1_NvB2hwKRkTw_&usqp=CAU"
      width="50%"
      height="50%"
    />
  );

  function Decor() {
    if (Description) {
      const WeatherDescription = Description.split(" ");
      const cloudWeather = ["cloud", "cloudy", "clouds", "overcast"];
      for (var i = 0; i < WeatherDescription.length; i++) {
        if (cloudWeather.includes(WeatherDescription[i])) {
          return ImageCloud;
        }
      }
      console.log("Description is " + WeatherDescription);
    }
  }
  {
    /*const str = "Être ou ne pas être, telle est la question.";

console.log(str.includes("Être"));       // true
console.log(str.includes("question"));   // true
console.log(str.includes("pléonasme"));  // false*/
  }
  return (
    <div className="Weather">
      {City && Country && (
        <p>
          Ville:{City},Pays:{Country}
        </p>
      )}

      {temperature && <p>Temperature:{temperature}°C</p>}
      {Description && <p>Description:{Description}</p>}
      {Longitude && <p>Longitude{Longitude}λ</p>}
      {Laltitude && <p>Laltitude{Laltitude}φ</p>}
      {Description && Decor()}
    </div>
  );
};

export default Weather;
