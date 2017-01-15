import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import store from './store';
import * as actions from './actions';

const NavMenu = React.createClass({
  propTypes: {
    hideMenu: React.PropTypes.func.isRequired,
    mainLinks: React.PropTypes.array.isRequired,
    secondaryLinks: React.PropTypes.array.isRequired
  },
  createLink: function(link) {
      let isIndex = link.index ? true : false;
      return (
        <li key={link.name}>
          <Link to={link.path} activeClassName="active" onlyActiveOnIndex={isIndex}>
            {link.name}
          </Link>
        </li>
      );
  },
  render: function () {
    return (
      <nav id="nav-menu">
        <img className="menu-exit clickable" src="img/menu-exit.svg" onClick={this.props.hideMenu} />
        <div className="language">
          <span className="selected">FR</span><div className="separator"></div><span>EN</span>
        </div>
        <form className="search-form">
          <input className="search-field" name="main-search-field" placeholder="Recherche"/>
          <button className="search-btn" name="main-search-btn">Go</button>
        </form>
        <ul className="pages-list">
          {this.props.mainLinks.map(this.createLink)}
        </ul>
        <ul className="footer">
          {this.props.secondaryLinks.map(this.createLink)}
        </ul>
      </nav>
    );
  }
});

const mapStateToProps = function (store) {
   return {
     mainLinks : store.menu.mainLinks,
     secondaryLinks : store.menu.secondaryLinks
   };
};

const mapDispatchToProps = function(dispatch) {
  return {
    hideMenu: function() {
      dispatch(actions.hideMenu());
    }
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(NavMenu);
