import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import {showMenu} from '../../menu/actions';
import LanguageSwitch from '../../shared/components/LanguageSwitch';
import Titlebar from './Titlebar';

const Header = (props) => (
  <header id="main-header">
    <Link to={"/" + props.locale + "/"} id="main-logo"></Link>
    <Titlebar />
    <div className="menu-ham clickable" onClick={props.showMenu}></div>
    <LanguageSwitch />
  </header>
);

Header.propTypes = {
  locale : React.PropTypes.string.isRequired,
  showMenu: React.PropTypes.func.isRequired
};

const mapStateToProps = (store) => ({
  locale : store.messages.locale
});

const mapDispatchToProps = (dispatch) => ({
    showMenu: () => dispatch(showMenu())
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Header);
