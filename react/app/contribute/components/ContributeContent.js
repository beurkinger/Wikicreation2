import React from 'react';
import {connect} from 'react-redux';

import {APP_LOCALES} from '../../config';
import ContentEn from './localized/ContentEn';
import ContentFr from './localized/ContentFr';
import ContributeForm from './ContributeForm';
import BackToTop from '../../shared/components/BackToTop';

const ContributeContent = React.createClass({
  propTypes : {
    locale : React.PropTypes.string.isRequired
  },
  getLocalizedContent : function () {
    return this.props.locale === APP_LOCALES.EN ? <ContentEn /> : <ContentFr />;
  },
  render: function () {
    return (
      <div id="main-content">
        <div id="contribute-main">
          {this.getLocalizedContent()}
          <ContributeForm/>
        </div>
        <BackToTop target="#contribute-main"></BackToTop>
      </div>
    )
  }
});

const mapStateToProps = (store) => ({
  locale : store.messages.locale
});

module.exports = connect(mapStateToProps)(ContributeContent);
