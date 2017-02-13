import React from 'react';

import Author from '../../author/components/Author';
import Header from '../../header/components/Header';
import Menu from '../../menu/components/Menu';
import MenusBackground from './MenusBackground';
import Preview from '../../preview/components/Preview';
import PreviewBackground from '../../preview/components/PreviewBackground';
import store from '../../store';

const Main = React.createClass({
  getCategory : function () {
    return this.props.location.pathname === '/' ? 'blue' : 'white'
  },
  render : function () {
    return (
      <div id="app" className={this.getCategory()}>
        <Header />
        <PreviewBackground />
        <Preview />
        <MenusBackground />
        <Menu />
        <Author />
        { this.props.children }
      </div>
    )
  }
});

module.exports = Main;
