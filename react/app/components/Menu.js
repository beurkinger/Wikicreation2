import React from 'react';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';

import store from './store';

const Menu = React.createClass({
  propTypes: {
    hideMenu: React.PropTypes.func.isRequired,
    isVisible: React.PropTypes.bool.isRequired,
    mainLinks: React.PropTypes.array.isRequired,
    secondaryLinks: React.PropTypes.array.isRequired,
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
      <div id="menus" style={{ 'display': this.props.isVisible ? 'block' : 'none' }}>
        <nav id="main-menu">
          <img className="menu-exit" src="img/menu-exit.svg" onClick={this.props.hideMenu} />
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
        <div id="news-menu">
          <h2 className="menu-title">
            Récemment parus
          </h2>
          <div className="article">
            <h3 className="title">
              Duchamps & Création
            </h3>
            <h4 className="author">
              Ivan Toulouse
            </h4>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="article">
            <h3 className="title">
              Jazz & Création
            </h3>
            <h4 className="author">
              José Romero Tenorio
            </h4>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    );
  }
});

const mapStateToProps = function (store) {
   return {
     isVisible : store.menu.isVisible,
     mainLinks : store.menu.mainLinks,
     secondaryLinks : store.menu.secondaryLinks
   };
};

const mapDispatchToProps = function(dispatch) {
  return {
    hideMenu: function() {
      dispatch({ type : 'HIDE_MENU' });
    }
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Menu);

// <div>
//   <ul>
//     <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
//     <li><NavLink to="/about">About</NavLink></li>
//     <li><NavLink to="/article/1">Article</NavLink></li>
//     <li><NavLink to="/articles">Articles</NavLink></li>
//     <li><NavLink to="/authors">Auteurs</NavLink></li>
//     <li><NavLink to="/contribute">Contribuer</NavLink></li>
//   </ul>
//   {this.props.children}
// </div>);
