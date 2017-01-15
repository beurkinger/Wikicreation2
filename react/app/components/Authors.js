import React from 'react';
import {connect} from 'react-redux';

import * as actions from './actions';
import * as async from './async';
import AuthorsAside from './AuthorsAside';
import AuthorsContent from './AuthorsContent';

const Authors = React.createClass({
  propTypes: {
    setThemeBlue: React.PropTypes.func.isRequired,
    setThemeWhite: React.PropTypes.func.isRequired
  },
  componentWillMount : function () {
    this.props.setThemeWhite();
    async.getCategories();

  },
  componentWillUnmount : function () {
    this.props.setThemeBlue();
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
    setThemeBlue: () => dispatch(actions.setThemeBlue()),
    setThemeWhite: () => dispatch(actions.setThemeWhite())
  }
};

module.exports = connect(null, mapDispatchToProps)(Authors);
