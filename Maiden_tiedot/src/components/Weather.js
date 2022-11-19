import React from "react";

function Weather({ weather }) {
  return (
    <div>
      <h2>Weather in {weather.capital}</h2>
    </div>
  );
}

export default Weather;
