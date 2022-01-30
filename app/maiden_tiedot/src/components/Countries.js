import React from "react";
import Button from "./Button"

function Countries({ countries, countriesOnClick }) {
  return (
    <ul>
      {countries.map((country, i) => (
        <li key={i}>
          {`${country.name.common}`}{" "}
          <Button
            handleClick={() => countriesOnClick(country.name.common)}
            text="Show"
          />
        </li>
      ))}
    </ul>
  );
}

export default Countries;
