import React from 'react';

import AuthorArticle from './AuthorArticle';

const ArticleCategory = React.createClass({
  propTypes : {
    id : React.PropTypes.number.isRequired,
    name : React.PropTypes.string.isRequired,
    articles : React.PropTypes.array.isRequired,
  },
  getArticle : function (article)
  {
    return <AuthorArticle key={article.id} id={article.id} name={article.name} />
  },
  render: function () {
    return (
      <div className="article-category">
        <h3 className="article-category-title">
          Crise économique
        </h3>
        <ul className="article-titles">
          {this.props.articles.map(this.getArticle)}
        </ul>
      </div>
    )
  }
});

module.exports = ArticleCategory;
