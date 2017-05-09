import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import httpPostHelper from '../../shared/helpers/httpPostHelper';
import {REST_MAIN_PATH, REST_PATHS} from '../../config';


class ContactForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name : '',
      email : '',
      message : '',
      isSending : false,
      error : false,
      errorMessage : '',
      sent : false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getForm () {
    return (
      <form id="contact-form" onSubmit={this.handleSubmit} >
        <input type="text" value={this.state.name} onInput={(e) => this.setState({ name : e.target.value})} placeholder={this.props.name} required />
        <input type="email" value={this.state.email} onInput={(e) => this.setState({ email : e.target.value})} placeholder={this.props.email} required />
        <textarea value={this.state.message} onInput={(e) => this.setState({ message : e.target.value})} placeholder={this.props.message} required ></textarea>
        { this.getError() }
        <button type="submit" className="btn btn-blue btn-plane">
          {this.state.isSending ? this.props.sending : this.props.send }
        </button>
      </form>
    )
  }
  getThanks () {
    return <p className="success"><strong>{this.props.sent}</strong></p>;
  }
  getError () {
    if (this.state.error) return <p className='error'>{this.state.errorMessage}</p>;
  }
  handleSubmit (e) {
    e.preventDefault();
    let state = this.state;
    if (state.isSending) return false;
    this.setState({isSending : true});
    if (!state.email || state.email.length < 6 ||
    state.email.search('@') === -1 || state.email.search('.') === -1) {
      this.setState({error : true, isSending : false, errorMessage : this.props.errorEmail});
      return false;
    } else if (!state.name || !state.email || !state.message) {
      this.setState({error : true, isSending : false, errorMessage : this.props.errorMissing });
      return false;
    } else {
      this.sendData(state);
      return false;
    }
  }
  sendData (state) {
    let url = '/' + this.props.locale + REST_MAIN_PATH + REST_PATHS.contact;
    httpPostHelper(url, state, () => {
      this.setState({error : false, isSending : false, sent : true});
    },
    () => {
      this.setState({error : true, errorMessage : this.props.errorServer, isSending : false, sent : false});
    });
  }
  render () {
    return this.state.sent ? this.getThanks() : this.getForm();
  }
}

ContactForm.propTypes = {
  locale : PropTypes.string.isRequired,
  name : PropTypes.string.isRequired,
  email : PropTypes.string.isRequired,
  message : PropTypes.string.isRequired,
  errorMissing : PropTypes.string.isRequired,
  errorEmail : PropTypes.string.isRequired,
  errorServer : PropTypes.string.isRequired,
  send : PropTypes.string.isRequired,
  sending : PropTypes.string.isRequired,
  sent : PropTypes.string.isRequired
};

const mapStateToProps = (store) => ({
  locale : store.messages.locale,
  name : store.messages.strings.contact.form.name,
  email : store.messages.strings.contact.form.email,
  message : store.messages.strings.contact.form.message,
  errorMissing : store.messages.strings.contribute.form.errorMissing,
  errorEmail : store.messages.strings.contribute.form.errorEmail,
  errorServer : store.messages.strings.contribute.form.errorServer,
  send : store.messages.strings.contribute.form.send,
  sending : store.messages.strings.contribute.form.sending,
  sent : store.messages.strings.contribute.form.sent,
});

module.exports = connect(mapStateToProps)(ContactForm);
