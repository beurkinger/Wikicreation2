import React from 'react';
import { Link, IndexLink } from 'react-router';
import NavLink from './NavLink';

var Main = React.createClass({
  render: function () {
    return (
    <div>
      <ul>
        <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/article/1">Article</NavLink></li>
        <li><NavLink to="/articles">Articles</NavLink></li>
        <li><NavLink to="/authors">Auteurs</NavLink></li>
        <li><NavLink to="/contribute">Contribuer</NavLink></li>
      </ul>
      {this.props.children}
    </div>);
  }
});

module.exports = Main;
