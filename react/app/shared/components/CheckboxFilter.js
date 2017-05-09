import React from 'react';
import PropTypes from 'prop-types';

const CheckboxFilter = (props) => {
  const handleCheckboxChange = () => props.handleChange(props.value);

  return (
    <div className="filter">
      <span className={props.isChecked ? 'checked' : ''}
          onClick={handleCheckboxChange}></span>
        {props.label}
    </div>
  )
};

CheckboxFilter.propTypes = {
  label : PropTypes.string.isRequired,
  value : PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  isChecked : PropTypes.bool.isRequired,
  handleChange : PropTypes.func.isRequired
};

module.exports = CheckboxFilter;
