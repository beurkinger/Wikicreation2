import React from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';

import NavLink from './NavLink';

var Header = React.createClass({
  render: function () {
    return (
      <header id="main-header">
        <div id="main-logo"></div>
        <div id="main-header-right">
          <div className="menu-ham" onClick={this.props.showMenu}></div>
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
      dispatch({ type : 'SHOW_MENU' });
    }
  }
};

module.exports = connect(null, mapDispatchToProps)(Header);

// module.exports = Header;
