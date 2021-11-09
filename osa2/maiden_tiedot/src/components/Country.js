import React from "react";

function Country({ country }) {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>
        Capital: {country.capital}
        <br />
        Population: {country.population}
      </p>
      <h3>Languages</h3>
      <ul>
        {Object.keys(country.languages).map((key, i) => (
          <li key={i}>{country.languages[key]}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.name.common} />
    </div>
  );
}

export default Country;
