import React from 'react';
import { connect } from 'react-redux';

import * as async from './async';
import ArticleAside from './ArticleAside';
import ArticleMain from './ArticleMain';

var Article = React.createClass({
  componentWillMount : function () { async.geArticle(this.props.params.id) },
  render: function () {
    return (
      <main id="main-container">
        <ArticleAside />
        <ArticleMain />
      </main>
    );
  }
});

module.exports = Article;
