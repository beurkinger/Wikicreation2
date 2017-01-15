import React from 'react';

import * as async from './async';
import ArticleAside from './ArticleAside';
import ArticleContent from './ArticleContent';

const Article = React.createClass({
  componentWillMount : function () {
    async.getArticle(this.props.params.id);
  },
  render: () => (
    <main id="main-container">
      <ArticleAside />
      <ArticleContent />
    </main>
  )
});

module.exports = Article;
