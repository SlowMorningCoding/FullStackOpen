import PropTypes from 'prop-types';

function Filter({ value, changeHandler }) {
  return (
    <div>
      <label>
        Search:
        <input id="search" name="search" value={value} onChange={changeHandler} />
      </label>
    </div>
  );
}
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default Filter;
