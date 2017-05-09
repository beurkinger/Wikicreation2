import React from 'react';
import PropTypes from 'prop-types';

const Footnotes = (props) => {
  if (!props.footnotes || props.footnotes.trim() === '') return null;
  return (
    <div id="footnotes">
      <h3>
        {props.title}
      </h3>
      <div dangerouslySetInnerHTML={{__html: props.footnotes}}></div>
    </div>
  )
};

Footnotes.propTypes = {
  title : PropTypes.string.isRequired,
  footnotes : PropTypes.string.isRequired
};

module.exports = Footnotes
