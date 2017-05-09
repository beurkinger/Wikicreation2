import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ContactAside from './ContactAside';
import ContactContent from './ContactContent';
import {setStdTitlebar} from '../../header/actions';

class Contact extends React.Component {
  componentWillMount () {
    this.props.setTitlebar(this.props.title);
  }
  componentWillUpdate (nextProps) {
    this.props.setTitlebar(nextProps.title);
  }
  render () {
    return (
      <main id="main-container">
        <ContactAside />
        <ContactContent />
      </main>
    )
  }
}

Contact.propTypes = {
  title : PropTypes.string.isRequired
};

const mapStateToProps = (store) => ({
  title : store.messages.strings.contact.main.title
});

const mapDispatchToProps = (dispatch) => ({
  setTitlebar: (str) => dispatch(setStdTitlebar(str))
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Contact);
