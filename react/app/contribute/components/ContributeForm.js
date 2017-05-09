import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import httpPostHelper from '../../shared/helpers/httpPostHelper';
import {REST_MAIN_PATH, REST_PATHS} from '../../config';

const MAX_FILE_SIZE = 5242880;

class ContributeForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name : '',
      university : '',
      authorTitle : '',
      bio : '',
      title : '',
      categories : '',
      keywords : '',
      abstract : '',
      email : '',
      doc : '',
      isSending : false,
      error : false,
      errorMessage : '',
      sent : false
    };
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getForm () {
    return (
      <form id="contribute-form" encType="multipart/form-data" onSubmit={this.handleSubmit}>
        <div>
     	   <div className="left-row">
         	  {this.props.author}
       	 </div>
       	 <div className="right-row">
       	 	<input type="text" value={this.state.name} onInput={(e) => this.setState({ name : e.target.value})} placeholder={this.props.name} required />
       		<input type="text" value={this.state.university} onInput={(e) => this.setState({ university : e.target.value})} placeholder={this.props.university} required />
       		<input type="text" value={this.state.authorTitle} onInput={(e) => this.setState({ authorTitle : e.target.value})} placeholder={this.props.authorTitle} required />
       		<textarea value={this.state.bio} onInput={(e) => this.setState({ bio : e.target.value})} placeholder={this.props.bio} required />
       	 </div>
       </div>
       <div>
       	 <div className="left-row">
       	 	{this.props.article}
       	 </div>
       	 <div className="right-row">
       		 <input type="text" value={this.state.title} onInput={(e) => this.setState({ title : e.target.value})} placeholder={this.props.title} required />
       		 <input type="text" value={this.state.categories} onInput={(e) => this.setState({ categories : e.target.value})} placeholder={this.props.categories} required />
       		 <input type="text" value={this.state.keywords} onInput={(e) => this.setState({ keywords : e.target.value})} placeholder={this.props.keywords} required />
       		 <textarea value={this.state.abstract} onInput={(e) => this.setState({ abstract : e.target.value})} placeholder={this.props.abstract} required />
       	 </div>
     	 </div>
       <div>
       	 <div className="left-row">
       	 	{this.props.contact}
       	 </div>
       	 <div className="right-row">
       		 <input type="email" value={this.state.email} onInput={(e) => this.setState({ email : e.target.value})} placeholder={this.props.email} required />
       	 </div>
       </div>
       <div>
       	 <div className="left-row">
       	 	{this.props.name}
       	 </div>
       	 <div className="right-row">
       		 <input type="file" onChange={this.handleFile} className="file" required />
           <div>
            Les articles sont à envoyer au format <strong>.doc</strong> ou <strong>.docx</strong>, <strong>.pdf</strong> ou <strong>.rtf</strong>
        </div>
       	 </div>
     	 </div>
       <div>
         <div className="left-row"></div>
         <div className="right-row">
           { this.getError() }
           <button type="submit" className="btn btn-red btn-plane">
            {this.state.isSending ? this.props.sending : this.props.send }
           </button>
         </div>
       </div>
   	 </form>
    )
  }
  getThanks () {
    return <p><strong>{this.props.sent}</strong></p>;
  }
  getError () {
    if (this.state.error) return <p className='error'>{this.state.errorMessage}</p>;
  }
  handleFile (e) {
    this.setState({ doc : e.target.files[0] });
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
    } else if (!state.name || !state.university || !state.authorTitle || !state.bio ||
    !state.title || !state.categories || !state.keywords || !state.abstract ||
    !state.email || !state.doc) {
      this.setState({error : true, isSending : false, errorMessage : this.props.errorMissing });
      return false;
    } else if (!state.doc || state.doc.size > MAX_FILE_SIZE) {
      this.setState({error : true, isSending : false, errorMessage : 'File too large.' });
      return false;
    } else {
      this.sendData(state);
      return false;
    }
  }
  sendData (state) {
    let url = '/' + this.props.locale + REST_MAIN_PATH + REST_PATHS.contribute;
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

ContributeForm.propTypes = {
  locale : PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  article : PropTypes.string.isRequired,
  contact : PropTypes.string.isRequired,
  name : PropTypes.string.isRequired,
  university : PropTypes.string.isRequired,
  authorTitle : PropTypes.string.isRequired,
  bio : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  categories : PropTypes.string.isRequired,
  keywords : PropTypes.string.isRequired,
  abstract : PropTypes.string.isRequired,
  email : PropTypes.string.isRequired,
  doc : PropTypes.string.isRequired,
  errorMissing : PropTypes.string.isRequired,
  errorEmail : PropTypes.string.isRequired,
  errorServer : PropTypes.string.isRequired,
  send : PropTypes.string.isRequired,
  sending : PropTypes.string.isRequired,
  sent : PropTypes.string.isRequired
};

const mapStateToProps = (store) => ({
  locale : store.messages.locale,
  author: store.messages.strings.contribute.form.author,
  article : store.messages.strings.contribute.form.article,
  contact : store.messages.strings.contribute.form.contact,
  name : store.messages.strings.contribute.form.name,
  university : store.messages.strings.contribute.form.university,
  authorTitle : store.messages.strings.contribute.form.authorTitle,
  bio : store.messages.strings.contribute.form.bio,
  title : store.messages.strings.contribute.form.title,
  categories : store.messages.strings.contribute.form.categories,
  keywords : store.messages.strings.contribute.form.keywords,
  abstract : store.messages.strings.contribute.form.abstract,
  email : store.messages.strings.contribute.form.email,
  doc : store.messages.strings.contribute.form.doc,
  errorMissing : store.messages.strings.contribute.form.errorMissing,
  errorEmail : store.messages.strings.contribute.form.errorEmail,
  errorServer : store.messages.strings.contribute.form.errorServer,
  send : store.messages.strings.contribute.form.send,
  sending : store.messages.strings.contribute.form.sending,
  sent : store.messages.strings.contribute.form.sent,
});

module.exports = connect(mapStateToProps)(ContributeForm);
