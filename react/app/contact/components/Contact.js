import React from 'react';
import {connect} from 'react-redux';

import ContactAside from './ContactAside';
import ContactContent from './ContactContent';
import {setStdTitlebar} from '../../header/actions';

const Contact = React.createClass({
  propTypes : {
    title : React.PropTypes.string.isRequired
  },
  componentWillMount : function () {
    this.props.setTitlebar(this.props.title);
  },
  componentWillUpdate : function (nextProps) {
    this.props.setTitlebar(nextProps.title);
  },
  render: () => (
    <main id="main-container">
      <ContactAside />
      <ContactContent />
    </main>
  )
});

const mapStateToProps = (store) => ({
  title : store.messages.strings.contact.main.title
});

const mapDispatchToProps = (dispatch) => ({
  setTitlebar: (str) => dispatch(setStdTitlebar(str))
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Contact);
