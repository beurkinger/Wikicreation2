import React from 'react';
import {connect} from 'react-redux';

const ContactAside = (props) => (
  <aside id="main-aside">
    <a className="nav-link"  href="#credits">
      {props.credits}
    </a>
    <a className="nav-link" href="#contact-form">
      {props.contact}
    </a>
  </aside>
);

const mapStateToProps = (store) => ({
  credits : store.messages.strings.contact.aside.credits,
  contact : store.messages.strings.contact.aside.contact
});

module.exports = connect(mapStateToProps)(ContactAside);
