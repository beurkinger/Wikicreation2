import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router/lib/Link';
import IndexLink from 'react-router/lib/IndexLink';
import { connect } from 'react-redux';

import NavMenu from './NavMenu';
import NewsMenu from './NewsMenu';

const Menu = (props) => (
  <div id="menus" className={ props.isVisible ? 'show' : 'hide' }>
    <NavMenu />
    <NewsMenu isVisible={props.isVisible} />
  </div>
);

Menu.propTypes = {
  isVisible: PropTypes.bool.isRequired
};

const mapStateToProps = (store) => ({ isVisible : store.menu.isVisible });

module.exports = connect(mapStateToProps)(Menu);
