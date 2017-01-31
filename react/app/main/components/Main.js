import React from 'react';
import { connect } from 'react-redux';

import Author from '../../author/components/Author';
import Header from '../../header/components/Header';
import Menu from '../../menu/components/Menu';
import MenusBackground from './MenusBackground';
import store from '../../store';

const Main = (props) => {
  const getCategory =  () => {
    return props.location.pathname === '/' ? 'blue' : 'white'
  };
  return (
    <div id="app" className={getCategory()}>
      <Header />
      <MenusBackground />
      <Menu />
      <Author />
      { props.children }
    </div>
  )
};

const mapStateToProps = (store) => ({
  theme : store.theme
});

module.exports = connect(mapStateToProps)(Main);
