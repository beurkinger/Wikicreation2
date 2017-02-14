import React from 'react';
import {connect} from 'react-redux';
import browserHistory from 'react-router/lib/browserHistory'

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
    if (this.props.params && this.props.params.locale) {
      this.getLocaleFromPath(this.props.params.locale, this.props.locale);
    }
  },
  componentWillUpdate : function (nextProps) {
    let locale = this.props.params.locale;
    let nextLocale = nextProps.locale;
    let path = this.props.location.pathname;
    let nextPath = nextProps.location.pathname;

    if (locale !== nextLocale && path === nextPath) {
      this.setPathFromLocale(locale, nextLocale, path);
    }
  },
  getLocaleFromPath : function (routeLocale, locale) {
    if (routeLocale !== locale
    && (routeLocale === APP_LOCALES.FR || routeLocale === APP_LOCALES.EN)) {
      this.props.setLocale(routeLocale);
    }
  },
  setPathFromLocale : function (locale, nextLocale, path) {
    let nextPath = '';
    let index = path.indexOf(locale);
    if (index !== -1) {
      nextPath = path.replace('/' + locale + '/', '/' + nextLocale + '/');
    } else {
      nextPath = '/' + nextLocale + path;
    }
    browserHistory.push(nextPath);
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
