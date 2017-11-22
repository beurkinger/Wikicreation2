import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {APP_LOCALES} from '../../config';
import ContentEn from './localized/ContentEn';
import ContentFr from './localized/ContentFr';
import ContributeForm from './ContributeForm';
import Logos from '../../logos/components/Logos';
import BackToTop from '../../shared/components/BackToTop';

class ContributeContent extends React.Component {
  getLocalizedContent () {
    return this.props.locale === APP_LOCALES.EN ? <ContentEn /> : <ContentFr />;
  }
  render () {
    return (
      <div id="main-content">
        <div id="contribute-main">
          {this.getLocalizedContent()}
          <ContributeForm/>
          <Logos />
        </div>
        <BackToTop target="#contribute-main"></BackToTop>
      </div>
    )
  }
}

ContributeContent.propTypes = {
  locale : PropTypes.string.isRequired
};

const mapStateToProps = (store) => ({
  locale : store.messages.locale
});

module.exports = connect(mapStateToProps)(ContributeContent);
