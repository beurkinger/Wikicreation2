import React from 'react';
import Link from 'react-router/lib/Link';
import IndexLink from 'react-router/lib/IndexLink';
import { connect } from 'react-redux';

import NavMenu from './NavMenu';
import NewsMenu from './NewsMenu';
import store from './store';

const Menu = React.createClass({
  propTypes: {
    isVisible: React.PropTypes.bool.isRequired
  },
  render: function () {
    return (
      <div id="menus" style={{ 'display': this.props.isVisible ? 'block' : 'none' }}>
        <NavMenu />
        <NewsMenu />
      </div>
    );
  }
});

const mapStateToProps = function (store) {
   return {
     isVisible : store.menu.isVisible
   };
};

module.exports = connect(mapStateToProps)(Menu);
