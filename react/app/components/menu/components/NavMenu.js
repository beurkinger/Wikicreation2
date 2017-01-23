import React from 'react';
import Link from 'react-router/lib/Link';
import { connect } from 'react-redux';

import * as actions from '../actions';
import LanguageSwitch from '../../shared/components/LanguageSwitch';
import Search from './Search';

const NavMenu = (props) => {
  const createLink = (link) => {
    let isIndex = link.index ? true : false;
    return (
      <li key={link.name}>
        <Link to={link.path} activeClassName="active" onlyActiveOnIndex={isIndex}>
          {props.messages[link.name]}
        </Link>
      </li>
    );
  };
  return (
    <nav id="nav-menu">
      <img className="menu-exit clickable" src="/img/menu-exit.svg" onClick={props.hideMenu} />
      <LanguageSwitch />
      <Search label={props.messages.search} />
      <ul className="pages-list">
        {props.mainLinks.map(createLink)}
      </ul>
      <ul className="footer">
        {props.secondaryLinks.map(createLink)}
      </ul>
    </nav>
  );
};

NavMenu.propTypes = {
  messages : React.PropTypes.object.isRequired,
  hideMenu: React.PropTypes.func.isRequired,
  mainLinks: React.PropTypes.array.isRequired,
  secondaryLinks: React.PropTypes.array.isRequired
};

const mapStateToProps = (store) => ({
  messages : store.messages.strings.menu.navMenu,
  mainLinks : store.menu.mainLinks,
  secondaryLinks : store.menu.secondaryLinks
});

const mapDispatchToProps = (dispatch) => ({
  hideMenu: () => dispatch(actions.hideMenu())
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(NavMenu);
