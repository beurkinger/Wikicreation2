import React from 'react';
import {connect} from 'react-redux';
import Link from 'react-router/lib/Link';

import {APP_LOCALES} from '../../config';
import {setStdTitlebar} from '../../header/actions';

const Contribute = React.createClass({
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
  render : function () {
    return (
      <main id="main-container">
        <div id="main-content" className="full-size">
          <div id="legal-main">
            <h3>Page bientôt disponible.</h3>
          </div>
        </div>
      </main>
    )
  }
});

const mapStateToProps = (store) => ({
  locale : store.messages.locale,
  title : store.messages.strings.contribute.title
});

const mapDispatchToProps = (dispatch) => ({
  setTitlebar: (str) => dispatch(setStdTitlebar(str))
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Contribute);
