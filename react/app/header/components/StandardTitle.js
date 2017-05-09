import React from 'react';
import PropTypes from 'prop-types';

const StandardTitle = (props) => (
  <h1 className="std-title">{props.title}</h1>
);

StandardTitle.propTypes = {
  title : PropTypes.string.isRequired
};

module.exports = StandardTitle;
