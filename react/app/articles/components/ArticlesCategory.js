import React from 'react';
import {connect} from 'react-redux';

import ArticleCard from './ArticleCard';

const ArticleCategory = props => {
  const getArticle = (article) => (
    <ArticleCard id ={article.id} title={article.title} key={article.id} />
  );

  return (
    <div className="theme">
      <h2 className="theme-title">
        {props.name}
      </h2>
      <ul className="theme-articles">
        {props.articles.map(getArticle)}
      </ul>
    </div>
  )
};

ArticleCategory.propTypes =
{
  id : React.PropTypes.number.isRequired,
  name : React.PropTypes.string.isRequired,
  articles : React.PropTypes.array.isRequired
};

module.exports = ArticleCategory;
