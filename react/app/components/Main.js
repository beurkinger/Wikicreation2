import React from 'react';
import { connect } from 'react-redux';

import Author from './Author';
import Header from './Header';
import Menu from './Menu';
import store from './store';

const Main = React.createClass({
  propTypes: {
    theme: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      <div id="app" className={this.props.theme}>
        <Header />
        <Menu />
        <Author />
        { this.props.children }
      </div>
    );
  }
});

const mapStateToProps = function (store)
{
   return {theme : store.theme };
}

module.exports = connect(mapStateToProps)(Main);
