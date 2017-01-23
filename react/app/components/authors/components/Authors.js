import React from 'react';
import {connect} from 'react-redux';

import {setStdTitlebar} from '../../header/actions';
import {getAuthors} from '../async';
import AuthorsAside from './AuthorsAside';
import AuthorsContent from './AuthorsContent';

const Authors = React.createClass({
  componentWillMount : function () {
    getAuthors();
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
      dispatch(setStdTitlebar('Auteurs'))
    }
  }
};

module.exports = connect(null, mapDispatchToProps)(Authors);
