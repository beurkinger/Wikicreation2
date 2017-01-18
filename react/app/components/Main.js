import React from 'react';
import { connect } from 'react-redux';

import Author from './author/components/Author';
import Header from './header/components/Header';
import Menu from './menu/components/Menu';
import store from './store';

const Main = React.createClass({
  getTheme : function () {
    return this.props.location.pathname === '/' ? 'blue' : 'white'
  },
  render: function () {
    return (
      <div id="app" className={this.getTheme()}>
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
