import React from 'react';
import {connect} from 'react-redux';

const ContributeAside = React.createClass({
  propTypes : {
    presentation : React.PropTypes.string.isRequired,
    editorialProject : React.PropTypes.string.isRequired,
    editor : React.PropTypes.string.isRequired,
    discursiveForms : React.PropTypes.string.isRequired,
    formalInstructions : React.PropTypes.string.isRequired,
    sendArticle : React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      <aside id="main-aside">
          <a className="nav-link"  href="#presentation">
            {this.props.presentation}
          </a>
          <a className="nav-link" href="#project">
            {this.props.editorialProject}
          </a>
          <a className="nav-link" href="#editor">
            {this.props.editor}
          </a>
          <a className="nav-link" href="#discursiveForms">
            {this.props.discursiveForms}
          </a>
          <a className="nav-link" href="#formalInstructions">
            {this.props.formalInstructions}
          </a>
          <a className="nav-link" href="#sendArticle">
            {this.props.sendArticle}
          </a>
      </aside>
    )
  }
});

const mapStateToProps = (store) => ({
  presentation : store.messages.strings.about.aside.presentation,
  editorialProject : store.messages.strings.about.aside.editorialProject,
  editor : store.messages.strings.about.aside.editor,
  discursiveForms : store.messages.strings.contribute.aside.discursiveForms,
  formalInstructions : store.messages.strings.contribute.aside.formalInstructions,
  sendArticle : store.messages.strings.contribute.aside.sendArticle
});

module.exports = connect(mapStateToProps)(ContributeAside);
