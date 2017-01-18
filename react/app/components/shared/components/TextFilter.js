import React from 'react';

const TextFilter = props => (
  <form className="search-form">
    <input  className="search-field"
            placeholder={props.label ? props.label : 'Ecrire pour filtrer'}
            onChange={props.handleChange} />
    <button className="search-btn"></button>
  </form>
);

TextFilter.propTypes =
{
  label : React.PropTypes.string,
  handleChange : React.PropTypes.func.isRequired
};

module.exports = TextFilter;
