import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class AboutAside extends React.Component {
  render () {
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
};

AboutAside.propTypes = {
  presentation : PropTypes.string.isRequired,
  editorialProject : PropTypes.string.isRequired,
  editor : PropTypes.string.isRequired
};

const mapStateToProps = (store) => ({
  presentation : store.messages.strings.about.aside.presentation,
  editorialProject : store.messages.strings.about.aside.editorialProject,
  editor : store.messages.strings.about.aside.editor
});

module.exports = connect(mapStateToProps)(AboutAside);
