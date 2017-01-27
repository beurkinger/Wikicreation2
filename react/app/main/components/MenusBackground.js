import React from 'react';
import { connect } from 'react-redux';

import {hideMenu} from '../../menu/actions';
import {hideAuthorPanel} from '../../author/actions';

const MenusBackground = (props) => {
  const handleClick  = () => props.hideMenus();
  return (
    <div  id="menus-background"
          style = {{ display : props.isVisible ? 'block' : 'none' }}
          onClick={handleClick}></div>
  );
};

MenusBackground.propTypes = {
  isVisible : React.PropTypes.bool.isRequired
};

const mapStateToProps = (store) => ({ isVisible : store.menusBackground.isVisible });

const mapDispatchToProps = (dispatch) => ({
  hideMenus : () => {
    dispatch(hideMenu());
    dispatch(hideAuthorPanel());
  }
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(MenusBackground);
