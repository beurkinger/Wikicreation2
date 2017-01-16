import React from 'react';
import {connect} from 'react-redux';

import * as actions from './actions';
import * as async from './async';
import ArticlesAside from './ArticlesAside';
import ArticlesContent from './ArticlesContent';

const Articles = React.createClass({
  componentWillMount : function () {
    async.getCategories();
    async.getArticles();
    this.props.setTitlebar();
  },
  render: function () {
    return (
      <main id="main-container">
        <ArticlesAside />
        <ArticlesContent />
      </main>
    )
  }
});

const mapDispatchToProps = function(dispatch) {
  return {
    setTitlebar: () => dispatch(actions.setStdTitlebar('Articles'))
  }
};

module.exports = connect(null, mapDispatchToProps)(Articles);
