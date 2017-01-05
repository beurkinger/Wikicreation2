import React from 'react';

var Article = React.createClass({
  render: function () {
    return <h1>Article {this.props.params.articleId}</h1>
  }
});

module.exports = Article;
