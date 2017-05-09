import React from 'react';
import PropTypes from 'prop-types';

const Keywords = (props) => {
  let str = '';
  if (typeof props.array === "object" && props.array.length > 0) {
    str = props.array.join(', ');
  }
  else {
    str = props.empty;
  }
  return <span>{str}</span>;
};

Keywords.propTypes = {
  array : PropTypes.array,
  empty : PropTypes.string.isRequired
};

module.exports = Keywords;
