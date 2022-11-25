import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Filter from './components/Filter';
import Countries from './components/Countries';
import Country from './components/Country';
import Weather from './components/Weather';
import axios from 'axios';

function App() {
  // Countries
  const [countryData, setCountryData] = useState([]);
  const [countryFilter, setCountryFilter] = useState('');
  const [selectedCountry, setSelectedCountry] = useState({});
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    console.log('GET countries data');
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountryData(response.data);
    });
  }, []);

  useEffect(() => {
    console.log('selectedCountry', selectedCountry);
    if (Object.prototype.hasOwnProperty.call(selectedCountry, 'latlng')) {
      console.log('GET wather data');
      axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${selectedCountry.latlng[0]}&longitude=${selectedCountry.latlng[1]}&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`)
      .then((response) => {
        console.log("Weather response:", response.data);
        if (response.data.length === 1) {
          setWeatherData(response.data[0]);
        }
      });
    }
    console.log("weatherData", weatherData)
  }, [selectedCountry]);

  const filterOnChange = (event) => {
    setCountryFilter(event.target.value);
  };

  const countriesOnClick = (country) => {
    setCountryFilter(country);
  };

  const countriesToShow = countryData.filter(
    (country) => country.name.common.search(new RegExp(countryFilter, 'i')) >= 0,
  );
  console.log('countriesToShow:', countriesToShow.length);
  if (countriesToShow.length === 1 && selectedCountry !== countriesToShow[0]) {
    console.log('setSelectedCountry', countriesToShow[0]);
    setSelectedCountry(countriesToShow[0]);
  }

  return (
    <div>
      <h2>Country Search</h2>
      <Filter value={countryFilter} changeHandler={filterOnChange} />
      <CountriesToShow countries={countriesToShow} countriesOnClick={countriesOnClick} weather={weatherData} />
    </div>
  );
}

function CountriesToShow({ countries, countriesOnClick, weather }) {
  if (countries.length === 1) {
    return (
      <div>
        <Country country={countries[0]} />
        <Weather weather={weather} />
      </div>
    );
  } else if (countries.length <= 10) {
    return <Countries countries={countries} countriesOnClick={countriesOnClick} />;
  }
  return <p>Too many matches, specify another filter</p>;
}
CountriesToShow.propTypes = {
  countries: PropTypes.array.isRequired,
  countriesOnClick: PropTypes.func.isRequired,
  weather: PropTypes.object.isRequired,
};

export default App;
