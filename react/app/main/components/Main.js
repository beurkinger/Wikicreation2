import React from 'react';
import PropTypes from 'prop-types';
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

class Main extends React.Component {
  componentWillMount () {
    if (this.props.params && this.props.params.locale) {
      this.getLocaleFromPath(this.props.params.locale, this.props.locale);
    }
  }
  componentWillUpdate (nextProps) {
    let locale = this.props.params.locale;
    let nextLocale = nextProps.locale;
    let path = this.props.location.pathname;
    let nextPath = nextProps.location.pathname;

    if (locale !== nextLocale && path === nextPath) {
      this.setPathFromLocale(locale, nextLocale, path);
    }
  }
  getLocaleFromPath (routeLocale, locale) {
    if (routeLocale !== locale
    && (routeLocale === APP_LOCALES.FR || routeLocale === APP_LOCALES.EN)) {
      this.props.setLocale(routeLocale);
    }
  }
  setPathFromLocale (locale, nextLocale, path) {
    let nextPath = '';
    let index = path.indexOf(locale);
    if (index !== -1) {
      nextPath = path.replace('/' + locale + '/', '/' + nextLocale + '/');
    } else {
      nextPath = '/' + nextLocale + path;
    }
    browserHistory.push(nextPath);
  }
  getCategory () {
    let pathname = this.props.location.pathname;
    if (pathname === '/'
    || pathname === '/' + APP_LOCALES.FR + '/'
    || pathname === '/' + APP_LOCALES.EN + '/') {
      return 'blue';
    }
    return 'white';
  }
  render () {
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
}

Main.propTypes = {
  locale : PropTypes.string.isRequired,
  setLocale : PropTypes.func.isRequired
};

const mapStateToProps = (store) => ({
  locale : store.messages.locale
});

const mapDispatchToProps = (dispatch) => ({
  setLocale: (locale) => dispatch(setLocale(locale))
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Main);
