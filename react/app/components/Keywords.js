import React from 'react';

module.exports = function (props) {
  let str = '';
  if (typeof props.array === "object" && props.array.length > 0) str = props.array.join(', ');
  return <span>{str}</span>;
};
