import React from 'react';
import {connect} from 'react-redux';

const AboutAside = React.createClass({
  propTypes : {
    presentation : React.PropTypes.string.isRequired,
    editorialProject : React.PropTypes.string.isRequired,
    editor : React.PropTypes.string.isRequired
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
      </aside>
    )
  }
});

const mapStateToProps = (store) => ({
  presentation : store.messages.strings.about.aside.presentation,
  editorialProject : store.messages.strings.about.aside.editorialProject,
  editor : store.messages.strings.about.aside.editor
});

module.exports = connect(mapStateToProps)(AboutAside);
