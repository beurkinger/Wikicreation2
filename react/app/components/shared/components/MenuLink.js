import React from 'react';
import {connect} from 'react-redux';
import Link from 'react-router/lib/Link';

import {hideMenu} from '../../menu/actions';
import {hideAuthorPanel} from '../../author/actions';

const MenuLink = (props) => {
const hideMenus = () => props.hideMenus();
return <Link {...props} onClick={hideMenus} />
};

const mapDispatchToProps = (dispatch) => ({
  hideMenus: () => {
    dispatch(hideMenu());
    dispatch(hideAuthorPanel());
  }
});

module.exports = connect(null, mapDispatchToProps)(MenuLink);
