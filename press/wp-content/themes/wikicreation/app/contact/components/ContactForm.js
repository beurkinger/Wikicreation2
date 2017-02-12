import React from 'react';
import {connect} from 'react-redux';

const ContactForm = React.createClass({
  propTypes : {
    name : React.PropTypes.string.isRequired,
    mail : React.PropTypes.string.isRequired,
    message : React.PropTypes.string.isRequired
  },
  render : function () {
    return (
      <form id="contact-form">
        <input type="text" placeholder={this.props.name} />
        <input type="text" placeholder={this.props.mail} />
        <textarea defaultValue={this.props.message}></textarea>
        <btn className="btn btn-blue btn-plane">{this.props.send}</btn>
      </form>
    )
  }
});

const mapStateToProps = (store) => ({
  name : store.messages.strings.contact.form.name,
  mail : store.messages.strings.contact.form.mail,
  message : store.messages.strings.contact.form.message,
  send : store.messages.strings.contact.form.send
});

module.exports = connect(mapStateToProps)(ContactForm);
