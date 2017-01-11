import React from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';
import * as async from './async';
import ArticleAside from './ArticleAside';
import ArticleContent from './ArticleContent';
import Author from './Author';
import store from './store';

const Article = React.createClass({
  componentWillMount : function () {
    this.props.setThemeWhite();
    async.geArticle(this.props.params.id);
  },
  componentWillUnmount : function () {
    this.props.setThemeBlue();
  },
  render: () => (
    <div>
      <Author />
      <main id="main-container">
        <ArticleAside />
        <ArticleContent />
      </main>
    </div>
  )
});

const mapDispatchToProps = function(dispatch) {
  return {
    setThemeWhite: () => dispatch(actions.setThemeWhite()),
    setThemeBlue: () => dispatch(actions.setThemeBlue())
  }
};

module.exports = connect(null,mapDispatchToProps)(Article);
