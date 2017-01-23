import React from 'react';

const CheckboxFilter = (props) => {
  const handleCheckboxChange = () => props.handleChange(props.value);

  return (
    <div className="filter">
      <input  type="checkbox"
              value={props.value}
              checked={props.isChecked}
              onChange={handleCheckboxChange} />
      {props.label}
    </div>
  )
};

CheckboxFilter.propTypes = {
  label : React.PropTypes.string.isRequired,
  value : React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]).isRequired,
  isChecked : React.PropTypes.bool.isRequired,
  handleChange : React.PropTypes.func.isRequired
};

module.exports = CheckboxFilter;
