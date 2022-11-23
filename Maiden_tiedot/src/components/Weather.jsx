import PropTypes from 'prop-types';

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
