import React from 'react';
import Link from 'react-router/lib/Link';
import IndexLink from 'react-router/lib/IndexLink';
import { connect } from 'react-redux';

import NavMenu from './NavMenu';
import NewsMenu from './NewsMenu';

const Menu = (props) => (
  <div id="menus" className={ props.isVisible ? 'show' : 'hide' }>
    <NavMenu />
    <NewsMenu />
  </div>
);

Menu.propTypes = {
  isVisible: React.PropTypes.bool.isRequired
};

const mapStateToProps = (store) => ({ isVisible : store.menu.isVisible });

module.exports = connect(mapStateToProps)(Menu);
