import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions';
import {APP_LOCALES} from '../../constants';

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
  locale: React.PropTypes.string.isRequired,
};

const mapStateToProps = (store) => ({
   locale: store.messages.locale
});

const mapDispatchToProps = (dispatch) => ({
  setFrench: () => dispatch(actions.setLocale(APP_LOCALES.FR)),
  setEnglish: () => dispatch(actions.setLocale(APP_LOCALES.EN)),
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(LanguageSwitch);
