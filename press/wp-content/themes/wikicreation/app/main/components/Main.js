import React from 'react';
import {connect} from 'react-redux';

import {APP_LOCALES} from '../../config';
import Author from '../../author/components/Author';
import Header from '../../header/components/Header';
import Menu from '../../menu/components/Menu';
import MenusBackground from './MenusBackground';
import Preview from '../../preview/components/Preview';
import PreviewBackground from '../../preview/components/PreviewBackground';
import {setLocale} from '../../shared/actions';
import store from '../../store';

const Main = React.createClass({
  propTypes : {
    locale : React.PropTypes.string.isRequired,
    setLocale : React.PropTypes.func.isRequired
  },
  componentWillMount : function () {
    if (!this.props.params || !this.props.params.locale) return;
    let routeLocale = this.props.params.locale;
    if (routeLocale !== this.props.locale
    && (routeLocale === APP_LOCALES.FR || routeLocale === APP_LOCALES.EN)) {
      console.log('route');
      this.props.setLocale(routeLocale);
    }
  },
  componentWillUpdate : function (nextProps) {
  },
  updateLocale : function (locale) {

  },
  getCategory : function () {
    let pathname = this.props.location.pathname;
    if (pathname === '/'
    || pathname === '/' + APP_LOCALES.FR + '/'
    || pathname === '/' + APP_LOCALES.EN + '/') {
      return 'blue';
    }
    return 'white';
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

const mapStateToProps = (store) => ({
  locale : store.messages.locale
});

const mapDispatchToProps = (dispatch) => ({
  setLocale: (locale) => dispatch(setLocale(locale))
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Main);
