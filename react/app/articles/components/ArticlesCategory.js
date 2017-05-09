import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ArticleCard from './ArticleCard';
import {getPreview} from '../../preview/async';
import {showPreviewPanel} from '../../preview/actions';

const ArticleCategory = props => {
  const handleArticleClick = (id) => {
    getPreview(id);
    props.showPreviewPanel();
  };
  const getArticle = (article) => (
    <ArticleCard  id ={parseInt(article.id)}
                  title={article.title}
                  handleClick={handleArticleClick}
                  key={article.id} />
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
  id : PropTypes.number.isRequired,
  name : PropTypes.string.isRequired,
  articles : PropTypes.array.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  showPreviewPanel: () => dispatch(showPreviewPanel())
});

module.exports = connect(null, mapDispatchToProps)(ArticleCategory);
