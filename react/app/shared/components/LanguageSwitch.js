import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../actions';
import {APP_LOCALES} from '../../config';

const LanguageSwitch = (props) => {
  return (
    <div className="language">
      <span className={props.locale === APP_LOCALES.FR ? 'selected' : ''}
            onClick={props.setFrench}
            >FR</span>
        <div className="separator"></div>
      <span className={props.locale === APP_LOCALES.EN ? 'selected' : ''}
            onClick={props.setEnglish}
            >EN</span>
    </div>
  )
};

LanguageSwitch.propTypes = {
  locale: PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  setFrench: () => dispatch(actions.setLocale(APP_LOCALES.FR)),
  setEnglish: () => dispatch(actions.setLocale(APP_LOCALES.EN)),
});

module.exports = connect(null, mapDispatchToProps)(LanguageSwitch);
