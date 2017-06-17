import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router/lib/Link';
import { connect } from 'react-redux';
import browserHistory from 'react-router/lib/browserHistory'

import {filterArticlesTitle, emptyArticlesFilter} from '../../articles/actions';
import {hideMenu} from '../actions';
import LanguageSwitch from '../../shared/components/LanguageSwitch';
import Search from '../../shared/components/Search';

const NavMenu = (props) => {
  const createLink = (link) => {
    let isIndex = link.index ? true : false;
    return (
      <li key={link.name}>
        <Link to={"/" + props.locale + link.path} onClick={props.hideMenu} activeClassName="active" onlyActiveOnIndex={isIndex}>
          {props.messages[link.name]}
        </Link>
      </li>
    );
  };
  const searchHandler = (str) => {
    props.search(str);
    browserHistory.push('/' + props.locale + '/articles');
  };
  return (
    <nav id="nav-menu">
      <div className="menu-exit clickable" onClick={props.hideMenu}></div>
      <LanguageSwitch locale={props.locale} />
      <Search   label={props.messages.search}
                handleChange={searchHandler} />
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
  locale : PropTypes.string.isRequired,
  messages : PropTypes.object.isRequired,
  hideMenu: PropTypes.func.isRequired,
  mainLinks: PropTypes.array.isRequired,
  secondaryLinks: PropTypes.array.isRequired
};

const mapStateToProps = (store) => ({
  locale : store.messages.locale,
  messages : store.messages.strings.menu.navMenu,
  mainLinks : store.menu.mainLinks,
  secondaryLinks : store.menu.secondaryLinks
});

const mapDispatchToProps = (dispatch) => ({
  hideMenu: () => dispatch(hideMenu()),
  search : (str) => {
    dispatch(emptyArticlesFilter());
    dispatch(filterArticlesTitle(str));
    dispatch(hideMenu());
  }
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(NavMenu);
