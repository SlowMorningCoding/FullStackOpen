import PropTypes from 'prop-types';

/**
 * WMO Weather interpretation codes (WW)
 * Code	    Description                                       icon
 * 0	      Clear sky                                         01d.png clear sky
 * 1        Mainly clear                                      04d.png broken clouds
 * 2        Partly cloudy                                     03d.png scattered clouds
 * 3        Overcast                                          02d.png few clouds
 * 45,48	  Fog and depositing rime fog                       50d.png mist
 * 51,53,55	Drizzle: Light, moderate, and dense intensity     09d.png shower rain
 * 56,57	  Freezing Drizzle: Light and dense intensity       09d.png shower rain
 * 61,63,65	Rain: Slight, moderate and heavy intensity        10d.png rain
 * 66,67	  Freezing Rain: Light and heavy intensity          10d.png rain
 * 71,73,75	Snow fall: Slight, moderate, and heavy intensity  13d.png snow
 * 77	      Snow grains                                       13d.png snow
 * 80,81,82	Rain showers: Slight, moderate, and violent       10d.png rain
 * 85,86	  Snow showers slight and heavy                     13d.png snow
 * 95       Thunderstorm: Slight or moderate                  11d.png thunderstorm
 * 96,99    Thunderstorm with slight and heavy hail           11d.png thunderstorm
 */

function Weather({ weather }) {
  return (
    <div>
      <h2>Weather in {weather.capital}</h2>
    </div>
  );
}
Weather.propTypes = {
  weather: PropTypes.object.isRequired,
};

export default Weather;
