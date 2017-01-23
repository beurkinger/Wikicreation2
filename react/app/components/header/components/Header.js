import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import {showMenu} from '../../menu/actions';
import LanguageSwitch from '../../shared/components/LanguageSwitch';
import Titlebar from './Titlebar';

const Header = (props) => (
  <header id="main-header">
    <Link to="/" id="main-logo"></Link>
    <Titlebar />
    <div id="main-header-right">
      <div className="menu-ham clickable" onClick={props.showMenu}></div>
      <LanguageSwitch />
    </div>
  </header>
);

Header.propTypes = {
  showMenu: React.PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
    showMenu: () => dispatch(showMenu())
});

module.exports = connect(null, mapDispatchToProps)(Header);
