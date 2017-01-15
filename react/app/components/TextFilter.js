import React from 'react';

const TextFilter = props => (
  <input  className="search-field"
          name="author-search-field"
          placeholder={props.label ? props.label : 'Tapez pour filtrer'}
          onChange={props.handleChange} />
);

TextFilter.propTypes =
{
  label : React.PropTypes.string,
  handleChange : React.PropTypes.func.isRequired
};

module.exports = TextFilter;
