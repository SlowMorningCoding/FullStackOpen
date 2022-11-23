import PropTypes from 'prop-types';
import Button from './Button';

function Countries({ countries, countriesOnClick }) {
  return (
    <ul>
      {countries.map((country, i) => (
        <li key={i}>
          {`${country.name.common}`} <Button handleClick={() => countriesOnClick(country.name.common)} text="Show" />
        </li>
      ))}
    </ul>
  );
}
Countries.propTypes = {
  countries: PropTypes.array.isRequired,
  countriesOnClick: PropTypes.func.isRequired,
};

export default Countries;
