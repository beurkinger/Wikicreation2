import React from 'react';
import {connect} from 'react-redux';

import * as actions from './actions';
import * as async from './async';
import AuthorsAside from './AuthorsAside';
import AuthorsContent from './AuthorsContent';

const Authors = React.createClass({
  componentWillMount : function () {
    async.getCategories();
    async.getAuthors();
    this.props.setTitlebar();
  },
  render: function () {
    return (
      <main id="main-container">
        <AuthorsAside />
        <AuthorsContent />
      </main>
    )
  }
});

const mapDispatchToProps = function(dispatch) {
  return {
    setTitlebar: () => {
      dispatch(actions.setStdTitlebar('Auteurs'))
    }
  }
};

module.exports = connect(null, mapDispatchToProps)(Authors);
