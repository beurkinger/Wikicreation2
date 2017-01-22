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
  const handleKeyUp = (e) => {
    console.log(e);
  };
  return (
    <div id="app" className={getCategory()} onKeyUp={handleKeyUp}>
      <Header />
      <Menu />
      <MenusBackground />
      <Author />
      { props.children }
    </div>
  )
};

const mapStateToProps = (store) => ({
  theme : store.theme
});

module.exports = connect(mapStateToProps)(Main);
