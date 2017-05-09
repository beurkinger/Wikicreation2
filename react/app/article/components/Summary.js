import React from 'react';
import PropTypes from 'prop-types';

const Summary = (props) => {
  return (
    <ol id="summary" dangerouslySetInnerHTML={{__html: props.summary}}></ol>
  )
};

Summary.propTypes = {
  summary : PropTypes.string.isRequired
};

module.exports = Summary
