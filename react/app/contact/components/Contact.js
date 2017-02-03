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
    this.updateTitlebar(this.props);
  },
  componentWillUpdate : function (nextProps) {
    this.updateTitlebar(nextProps);
  },
  updateTitlebar : function (props) {
    this.props.setTitlebar(props.title);
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
