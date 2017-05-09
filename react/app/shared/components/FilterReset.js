import React from 'react';
import PropTypes from 'prop-types';

const FilterReset = (props) => {
  return <div className="filter-reset" onClick={props.handleClick}>{props.message}</div>
};

FilterReset.propTypes = {
  message : PropTypes.string.isRequired,
  handleClick : PropTypes.func.isRequired
};

module.exports = FilterReset;
