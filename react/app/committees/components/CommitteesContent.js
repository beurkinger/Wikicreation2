import React from 'react';
import {connect} from 'react-redux';

import {APP_LOCALES} from '../../config';
import ContentEn from './localized/ContentEn';
import ContentFr from './localized/ContentFr';
import BackToTop from '../../shared/components/BackToTop';

const CommitteesContent = React.createClass({
  propTypes : {
    locale : React.PropTypes.string.isRequired
  },
  getLocalizedContent : function () {
    return this.props.locale === APP_LOCALES.EN ? <ContentEn /> : <ContentFr />;
  },
  render: function () {
    return (
      <div id="main-content">
        <div id="committee-main">
          {this.getLocalizedContent()}
        </div>
        <BackToTop target="#committee-main"></BackToTop>
      </div>
    )
  }
});

const mapStateToProps = (store) => ({
  locale : store.messages.locale
});

module.exports = connect(mapStateToProps)(CommitteesContent);
