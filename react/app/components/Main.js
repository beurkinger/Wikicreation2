import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Menu from './Menu';
import store from './store';

const Main = React.createClass({
  render: function () {
    return (
      <div id="app" className={this.props.theme}>
        <Header />
        <Menu />
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
