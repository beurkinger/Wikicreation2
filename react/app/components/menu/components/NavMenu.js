import React from 'react';
import Link from 'react-router/lib/Link';
import { connect } from 'react-redux';

import * as actions from '../actions';

const NavMenu = (props) => {
  const createLink = (link) => {
    let isIndex = link.index ? true : false;
    return (
      <li key={link.name}>
        <Link to={link.path} activeClassName="active" onlyActiveOnIndex={isIndex}>
          {link.name}
        </Link>
      </li>
    );
  };
  return (
    <nav id="nav-menu">
      <img className="menu-exit clickable" src="/img/menu-exit.svg" onClick={props.hideMenu} />
      <div className="language">
        <span className="selected">FR</span><div className="separator"></div><span>EN</span>
      </div>
      <form className="search-form">
        <input className="search-field" name="main-search-field" placeholder="Recherche"/>
        <button className="search-btn" name="main-search-btn"></button>
      </form>
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
  hideMenu: React.PropTypes.func.isRequired,
  mainLinks: React.PropTypes.array.isRequired,
  secondaryLinks: React.PropTypes.array.isRequired
};

const mapStateToProps = (store) => ({
   mainLinks : store.menu.mainLinks,
   secondaryLinks : store.menu.secondaryLinks
});

const mapDispatchToProps = (dispatch) => ({
  hideMenu: () => dispatch(actions.hideMenu())
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(NavMenu);
