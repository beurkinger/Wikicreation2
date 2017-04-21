import React from 'react';
import {connect} from 'react-redux';
import Link from 'react-router/lib/Link';

import {APP_LOCALES} from '../../config';
import {setStdTitlebar} from '../../header/actions';
import ContentEn from './localized/ContentEn';
import ContentFr from './localized/ContentFr';
import BackToTop from '../../shared/components/BackToTop';

const Legal = React.createClass({
  propTypes : {
    locale : React.PropTypes.string.isRequired,
    title : React.PropTypes.string.isRequired
  },
  componentWillMount : function () {
    this.props.setTitlebar(this.props.title);
  },
  componentWillUpdate : function (nextProps) {
    this.props.setTitlebar(nextProps.title);
  },
  getLocalizedContent : function () {
    return this.props.locale === APP_LOCALES.EN ? <ContentEn /> : <ContentFr />;
  },
  render : function () {
    return (
      <main id="main-container">
        <div id="main-content" className="full-size">
          <div id="legal-main">
            {this.getLocalizedContent()}
          </div>
          <BackToTop target="#legal-main"></BackToTop>
        </div>
      </main>
    )
  }
});

const mapStateToProps = (store) => ({
  locale : store.messages.locale,
  title : store.messages.strings.legal.title
});

const mapDispatchToProps = (dispatch) => ({
  setTitlebar: (str) => dispatch(setStdTitlebar(str))
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Legal);
