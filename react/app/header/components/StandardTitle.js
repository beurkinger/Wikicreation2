import React from 'react';

const StandardTitle = (props) => (
  <h1 className="std-title">{props.title}</h1>
);

StandardTitle.propTypes = {
  title : React.PropTypes.string.isRequired
};

module.exports = StandardTitle;
