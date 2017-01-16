import React from 'react';
import {connect} from 'react-redux';

import * as async from './async';
import * as actions from './actions';
import ArticleAside from './ArticleAside';
import ArticleContent from './ArticleContent';

const Article = React.createClass({
  componentWillMount : function () {
    async.getArticle(this.props.params.id);
    this.props.setTitlebar();
  },
  render: () => (
    <main id="main-container">
      <ArticleAside />
      <ArticleContent />
    </main>
  )
});

const mapDispatchToProps = function(dispatch) {
  return {
    setTitlebar: () => dispatch(actions.setArticleTitlebar())
  }
};

module.exports = connect(null, mapDispatchToProps)(Article);
