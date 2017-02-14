import React from 'react';
import {connect} from 'react-redux';

import {APP_LOCALES} from '../../config';
import ContentEn from './localized/ContentEn';
import ContentFr from './localized/ContentFr';

const AboutContent = React.createClass({
  propTypes : {
    becomeAuthor : React.PropTypes.string.isRequired,
    locale : React.PropTypes.string.isRequired
  },
  getLocalizedContent : function () {
    return this.props.locale === APP_LOCALES.EN ? <ContentEn /> : <ContentFr />;
  },
  render: function () {
    return (
      <div id="main-content">
        <div id="about-main">
          {this.getLocalizedContent()}
          <div className="btn btn-red btn-arrow-right">
            {this.props.becomeAuthor}
          </div>
        </div>
      </div>
    )
  }
});

const mapStateToProps = (store) => ({
  becomeAuthor : store.messages.strings.about.content.becomeAuthor,
  locale : store.messages.locale
});

module.exports = connect(mapStateToProps)(AboutContent);
