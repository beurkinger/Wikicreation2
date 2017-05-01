import React from 'react';

const Summary = (props) => {
  return (
    <ol id="summary" dangerouslySetInnerHTML={{__html: props.summary}}></ol>
  )
};

Summary.propTypes = {
  summary : React.PropTypes.string.isRequired
};

module.exports = Summary
