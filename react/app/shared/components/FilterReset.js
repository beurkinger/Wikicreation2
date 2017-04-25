import React from 'react';

const FilterReset = (props) => {
  return <div className="filter-reset" onClick={props.handleClick}>{props.message}</div>
};

FilterReset.propTypes = {
  message : React.PropTypes.string.isRequired,
  handleClick : React.PropTypes.func.isRequired
};

module.exports = FilterReset;
