import React from 'react';

const CheckboxFilter = props => (
  <div className="filter">
    <input type="checkbox" onChange={props.handleChange} />
    {props.label}
  </div>
);

CheckboxFilter.propTypes =
{
  label : React.PropTypes.string.isRequired,
  handleChange : React.PropTypes.func.isRequired
};

module.exports = CheckboxFilter;
