import React from 'react';
import { Link } from 'react-router';

var NavLink = React.createClass({
  render : function () {
    return <Link {...this.props} activeClassName="active"/>
  }
});

module.exports = NavLink;
