import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import browserHistory from 'react-router/lib/browserHistory'

import {filterArticlesTitle, emptyArticlesFilter} from '../../articles/actions';
import {hideMenu} from '../../menu/actions';

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchStr : ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (e) {
    e.preventDefault();
    this.props.search(this.state.searchStr);
    browserHistory.push('/' + this.props.locale + '/articles');
  }
  render () {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input  className="search-field"
                onChange={(e) => this.setState({ searchStr : e.target.value }) }
                value={this.state.searchStr}
                placeholder={this.props.label} />
              <button type="submit" className="search-btn"></button>
      </form>
    )
  }
}

Search.propTypes = {
  locale : PropTypes.string,
  label : PropTypes.string,
  search : PropTypes.func.isRequired
};

const mapStateToProps = (store) => ({
    locale : store.messages.locale
});

const mapDispatchToProps = (dispatch) => ({
  search : (str) => {
    dispatch(emptyArticlesFilter());
    dispatch(filterArticlesTitle(str));
    dispatch(hideMenu());
  }
});


module.exports = connect(mapStateToProps, mapDispatchToProps)(Search);
