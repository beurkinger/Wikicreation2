import React from 'react';
import {connect} from 'react-redux';
import httpPostHelper from '../../shared/helpers/httpPostHelper';
import {REST_MAIN_PATH, REST_PATHS} from '../../config';

const MAX_FILE_SIZE = 5242880;

const ContributeForm = React.createClass({
  propTypes : {
    locale : React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
    article : React.PropTypes.string.isRequired,
    contact : React.PropTypes.string.isRequired,
    name : React.PropTypes.string.isRequired,
    university : React.PropTypes.string.isRequired,
    authorTitle : React.PropTypes.string.isRequired,
    bio : React.PropTypes.string.isRequired,
    title : React.PropTypes.string.isRequired,
    categories : React.PropTypes.string.isRequired,
    keywords : React.PropTypes.string.isRequired,
    abstract : React.PropTypes.string.isRequired,
    email : React.PropTypes.string.isRequired,
    doc : React.PropTypes.string.isRequired,
    errorMissing : React.PropTypes.string.isRequired,
    errorEmail : React.PropTypes.string.isRequired,
    errorServer : React.PropTypes.string.isRequired,
    send : React.PropTypes.string.isRequired,
    sending : React.PropTypes.string.isRequired,
    sent : React.PropTypes.string.isRequired
  },
  getInitialState: function() {
    return {
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
  },
  getForm : function () {
    return (
      <form id="contribute-form" encType="multipart/form-data" onSubmit={this.handleSubmit}>
   	    <div className="left-row">
       	  {this.props.author}
     	 </div>
     	 <div className="right-row">
     	 	<input type="text" value={this.state.name} onInput={(e) => this.setState({ name : e.target.value})} placeholder={this.props.name} required />
     		<input type="text" value={this.state.university} onInput={(e) => this.setState({ university : e.target.value})} placeholder={this.props.university} required />
     		<input type="text" value={this.state.authorTitle} onInput={(e) => this.setState({ authorTitle : e.target.value})} placeholder={this.props.authorTitle} required />
     		<textarea value={this.state.bio} onInput={(e) => this.setState({ bio : e.target.value})} placeholder={this.props.bio} required />
     	 </div>
       	 <br/>
     	 <div className="left-row">
     	 	{this.props.article}
     	 </div>
     	 <div className="right-row">
     		 <input type="text" value={this.state.title} onInput={(e) => this.setState({ title : e.target.value})} placeholder={this.props.title} required />
     		 <input type="text" value={this.state.categories} onInput={(e) => this.setState({ categories : e.target.value})} placeholder={this.props.categories} required />
     		 <input type="text" value={this.state.keywords} onInput={(e) => this.setState({ keywords : e.target.value})} placeholder={this.props.keywords} required />
     		 <textarea value={this.state.abstract} onInput={(e) => this.setState({ abstract : e.target.value})} placeholder={this.props.abstract} required />
     	 </div>
     	 <br/>
     	 <div className="left-row">
     	 	{this.props.contact}
     	 </div>
     	 <div className="right-row">
     		 <input type="text" value={this.state.email} onInput={(e) => this.setState({ email : e.target.value})} placeholder={this.props.email} required />
     	 </div>
     	 <br/>
     	 <div className="left-row">
     	 	{this.props.name}
     	 </div>
     	 <div className="right-row">
     		 <input type="file" onChange={this.handleFile} className="file" required />
         <p>
          Les articles sont à envoyer au format <strong>.doc</strong> ou <strong>.docx</strong>, <strong>.pdf</strong> ou <strong>.rtf</strong>
         </p>
     	 </div>
     	 <br/>
       { this.getError() }
       <button className="btn btn-red btn-plane">
        {this.state.isSending ? this.props.sending : this.props.send }
       </button>
   	 </form>
    )
  },
  getThanks : function () {
    return <p><strong>{this.props.sent}</strong></p>;
  },
  getError : function () {
    if (this.state.error) return <p className='error'>{this.state.errorMessage}</p>;
  },
  handleFile : function (e) {
    this.setState({ doc : e.target.files[0] });
  },
  handleSubmit : function (e) {
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
  },
  sendData : function (state) {
    let url = '/' + this.props.locale + REST_MAIN_PATH + REST_PATHS.contribute;
    httpPostHelper(url, state, () => {
      this.setState({error : false, isSending : false, sent : true});
    },
    () => {
      this.setState({error : true, errorMessage : this.props.errorServer, isSending : false, sent : false});
    });
  },
  render : function () {
    return this.state.sent ? this.getThanks() : this.getForm();
  }
});

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
