import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const [countryFilter, setCountryFilter] = useState("");

  const countryFilterChange = (event) => {
    setCountryFilter(event.target.value);
  };

  const filteredCountries = countries.filter(
    (country) => country.name.common.search(new RegExp(countryFilter, "i")) >= 0
  );

  return (
    <div>
      <h2>Country Search</h2>
      <Filter value={countryFilter} changeHandler={countryFilterChange} />
      <Countries countries={filteredCountries} />
    </div>
  );
}

function Filter({ value, changeHandler }) {
  return (
    <div>
      Search: <input value={value} onChange={changeHandler} />
    </div>
  );
}

function Countries({ countries }) {
  if (countries.length > 10) {
    return (<p>Too many matches, specify another filter</p>)
  }
  if (countries.length === 1) {
    console.log("countries[0]",countries[0])
    return (<Countryinfo country={countries[0]}/>)
  }
  return (
    <ul>
      {countries.map((country, i) => (
        <Country key={i} country={country} />
      ))}
    </ul>
  );
}

function Country({ country }) {
  return <li>{`${country.name.common}`} </li>;
}

function Countryinfo({ country }) {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>
        Capital: {country.capital}<br/>
        Population: {country.population}
      </p>
      <h3>Languages</h3>
      <ul>
        {Object.keys(country.languages).map((key) => (
          <li>{country.languages[key]}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.name.common} />
    </div>
  )
  
}

export default App;
