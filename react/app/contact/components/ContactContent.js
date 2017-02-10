import React from 'react';
import {connect} from 'react-redux';

import ContactForm from './ContactForm';

const ContactContent = (props)  => (
  <div id="main-content">
    <div id="contact-main">
      <div className="ms-logo" id="credits"></div>
      <h2 className="agency">
        Agence Multimédia Sorbonne
      </h2>
      <a href="http://multimedia-sorbonne.com/" className="website">
        multimedia-sorbonne.com
      </a>
      <div className="clearfix"></div>
      <h3>
        {props.director}
      </h3>
      <p>
        David Bihanic
      </p>
      <h3>
        {props.manager}
      </h3>
      <p>
        Alex Mohebbi
      </p>
      <h3>
        {props.artistic} / {props.ux}
      </h3>
      <p>
        Juanita Arenas <br/>
        Guillaume Ribault
      </p>
      <h3>
        {props.developers}
      </h3>
      <p>
        Juanita Arenas <br/>
        Guillaume Ribault
      </p>
      <ContactForm />
    </div>
  </div>
);

ContactContent.propTypes = {
  director : React.PropTypes.string.isRequired,
  manager : React.PropTypes.string.isRequired,
  artistic : React.PropTypes.string.isRequired,
  ux : React.PropTypes.string.isRequired,
  developers : React.PropTypes.string.isRequired
};

const mapStateToProps = (store) => ({
  director : store.messages.strings.contact.content.director,
  manager : store.messages.strings.contact.content.manager,
  artistic : store.messages.strings.contact.content.artistic,
  ux : store.messages.strings.contact.content.ux,
  developers : store.messages.strings.contact.content.developers
});

module.exports = connect(mapStateToProps)(ContactContent);
