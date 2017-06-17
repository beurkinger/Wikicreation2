import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchStr : this.props.value ? this.props.value : ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (e) {
    e.preventDefault();
    this.props.handleChange(this.state.searchStr);
  }
  render () {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input  className="search-field"
                onChange={(e) => this.setState({ searchStr : e.target.value }) }
                value={this.state.searchStr}
                placeholder={this.props.label ? this.props.label : 'Rechercher'} />
              <button type="submit" className="search-btn"></button>
      </form>
    )
  }
}

Search.propTypes = {
  label : PropTypes.string,
  handleChange : PropTypes.func.isRequired
};

module.exports = Search;
