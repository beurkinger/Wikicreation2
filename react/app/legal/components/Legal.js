import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Link from 'react-router/lib/Link';

import {APP_LOCALES} from '../../config';
import {setStdTitlebar} from '../../header/actions';
import ContentEn from './localized/ContentEn';
import ContentFr from './localized/ContentFr';
import BackToTop from '../../shared/components/BackToTop';

class Legal extends React.Component {
  componentWillMount () {
    this.props.setTitlebar(this.props.title);
  }
  componentWillUpdate (nextProps) {
    this.props.setTitlebar(nextProps.title);
  }
  getLocalizedContent () {
    return this.props.locale === APP_LOCALES.EN ? <ContentEn /> : <ContentFr />;
  }
  render () {
    return (
      <main id="main-container">
        <div id="main-content">
          <div id="legal-main">
            {this.getLocalizedContent()}
          </div>
          <BackToTop target="#legal-main"></BackToTop>
        </div>
      </main>
    )
  }
}

Legal.propTypes = {
  locale : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired
};

const mapStateToProps = (store) => ({
  locale : store.messages.locale,
  title : store.messages.strings.legal.title
});

const mapDispatchToProps = (dispatch) => ({
  setTitlebar: (str) => dispatch(setStdTitlebar(str))
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Legal);
