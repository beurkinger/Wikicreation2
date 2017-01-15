import React from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';
import Titlebar from './Titlebar';

const Header = React.createClass({
  propTypes: {
    showMenu: React.PropTypes.func.isRequired
  },
  render: function () {
    return (
      <header id="main-header">
        <div id="main-logo"></div>
        <Titlebar />
        <div id="main-header-right">
          <div className="menu-ham clickable" onClick={this.props.showMenu}></div>
          <div className="language">
            <span className="selected">FR</span><div className="separator"></div><span>EN</span>
          </div>
        </div>
      </header>
    );
  }
});

const mapDispatchToProps = function(dispatch) {
  return {
    showMenu: function() {
      dispatch(actions.showMenu());
    }
  }
};

module.exports = connect(null, mapDispatchToProps)(Header);
