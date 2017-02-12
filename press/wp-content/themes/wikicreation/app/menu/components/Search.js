import React from 'react';
import { connect } from 'react-redux';
import browserHistory from 'react-router/lib/browserHistory'

import {filterArticlesTitle, emptyArticlesFilter} from '../../articles/actions';
import {hideMenu} from '../../menu/actions';


const Search = React.createClass({
  propTypes : {
    label : React.PropTypes.string,
    search : React.PropTypes.func.isRequired
  },
  getInitialState : () => ({
    searchStr : ''
  }),
  handleInput : function (e) {
    this.setState({ searchStr : e.target.value });
  },
  handleSubmit : function (e) {
    e.preventDefault();
    this.props.search(this.state.searchStr);
    browserHistory.push('/articles');
  },
  render : function () {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input  className="search-field"
                onChange={this.handleInput}
                value={this.state.searchStr}
                placeholder={this.props.label} />
              <button type="submit" className="search-btn"></button>
      </form>
    )
  }
});


const mapStateToProps = (store) => ({});
const mapDispatchToProps = (dispatch) => ({
  search : (str) => {
    dispatch(emptyArticlesFilter());
    dispatch(filterArticlesTitle(str));
    dispatch(hideMenu());
  }
});


module.exports = connect(mapStateToProps, mapDispatchToProps)(Search);
