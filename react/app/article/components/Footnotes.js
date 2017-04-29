import React from 'react';

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
  title : React.PropTypes.string.isRequired,
  footnotes : React.PropTypes.string.isRequired
};

module.exports = Footnotes
