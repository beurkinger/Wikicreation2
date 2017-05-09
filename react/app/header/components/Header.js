import React from 'react';
import PropTypes from 'prop-types';
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
    <LanguageSwitch locale={props.locale} />
  </header>
);

Header.propTypes = {
  locale : PropTypes.string.isRequired,
  showMenu: PropTypes.func.isRequired
};

const mapStateToProps = (store) => ({
  locale : store.messages.locale
});

const mapDispatchToProps = (dispatch) => ({
    showMenu: () => dispatch(showMenu())
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Header);
