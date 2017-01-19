import React from 'react';

const TextFilter = props => {
  const handleTextChange = (e) => props.handleChange(e.target.value);

  return (
    <form className="search-form">
      <input  className="search-field"
              value={props.value}
              placeholder={props.label ? props.label : 'Ecrire pour filtrer'}
              onChange={handleTextChange} />
      <div className="search-btn"></div>
    </form>
  )
};

TextFilter.propTypes =
{
  label : React.PropTypes.string,
  value : React.PropTypes.string.isRequired,
  handleChange : React.PropTypes.func.isRequired
};

module.exports = TextFilter;
