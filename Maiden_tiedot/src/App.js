import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Countries from "./components/Countries";
import Country from "./components/Country";
import Weather from "./components/Weather";
import axios from "axios";

function App() {
  // Countries
  const [countries, setCountries] = useState([]);
  const [countryFilter, setCountryFilter] = useState("");
  const [selectedCapital, setSelectedCapital] = useState("");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  useEffect(() => {
    if (selectedCapital.length) {
      /*axios
        .get(`https://restcountries.com/v3.1/capital/${selectedCapital}`)
        .then((response) => {
          console.log("Weather response:", response);
          if (response.data.length === 1) {
            setWeather(response.data[0]);
          }
        });
      */
      setWeather({ capital: selectedCapital });
    }
  }, [selectedCapital]);

  const filterOnChange = (event) => {
    setCountryFilter(event.target.value);
  };

  const countriesOnClick = (country) => {
    setCountryFilter(country);
  };

  const countriesToShow = countries.filter(
    (country) => country.name.common.search(new RegExp(countryFilter, "i")) >= 0
  );
  console.log("countriesToShow:", countriesToShow.length);
  if (
    countriesToShow.length === 1 &&
    selectedCapital !== countriesToShow[0].capital
  ) {
    console.log("setSelectedCapital", countriesToShow[0].capital);
    setSelectedCapital(countriesToShow[0].capital);
  }

  return (
    <div>
      <h2>Country Search</h2>
      <Filter value={countryFilter} changeHandler={filterOnChange} />
      <CountriesToShow
        countries={countriesToShow}
        countriesOnClick={countriesOnClick}
        weather={weather}
      />
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
    return (
      <Countries countries={countries} countriesOnClick={countriesOnClick} />
    );
  }
  return <p>Too many matches, specify another filter</p>;
}

export default App;
