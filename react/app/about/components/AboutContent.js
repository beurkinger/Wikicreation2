import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Link from 'react-router/lib/Link'

import {APP_LOCALES} from '../../config';
import ContentEn from './localized/ContentEn';
import ContentFr from './localized/ContentFr';
import Logos from '../../logos/components/Logos';
import BackToTop from '../../shared/components/BackToTop';

class AboutContent extends React.Component {
  getLocalizedContent () {
    return this.props.locale === APP_LOCALES.EN ? <ContentEn /> : <ContentFr />;
  }

  render () {
    return (
      <div id="main-content">
        <div id="about-main">
          {this.getLocalizedContent()}
          <Link to={"/" + this.props.locale + "/contribute"}
                className="btn btn-red btn-arrow-right" >
            {this.props.becomeAuthor}
          </Link>
          <Logos />
        </div>
        <BackToTop target="#about-main"></BackToTop>
      </div>
    )
  }
};

AboutContent.propTypes = {
  becomeAuthor : PropTypes.string.isRequired,
  locale : PropTypes.string.isRequired
};

const mapStateToProps = (store) => ({
  becomeAuthor : store.messages.strings.about.content.becomeAuthor,
  locale : store.messages.locale
});

module.exports = connect(mapStateToProps)(AboutContent);
