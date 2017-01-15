import React from 'react';
import {connect} from 'react-redux';

import * as actions from './actions';
import * as async from './async';
import AuthorsAside from './AuthorsAside';
import AuthorsContent from './AuthorsContent';
import { PAGE_TYPE_STD } from './constants';

const Authors = React.createClass({
  componentWillMount : function () {
    async.getCategories();

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
    setTitlebar: () => dispatch(actions.setTitlebar(PAGE_TYPE_STD, 'Articles'))
  }
};

module.exports = connect(null, mapDispatchToProps)(Authors);
