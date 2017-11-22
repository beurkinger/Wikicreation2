import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ArticlesCategory from './ArticlesCategory';
import PageLoading from '../../shared/components/PageLoading';
import Logos from '../../logos/components/Logos';
import BackToTop from '../../shared/components/BackToTop';

const ArticlesContent = (props) => {
  const getCategory = (category) => {
    return (
    <ArticlesCategory id={parseInt(category.categoryId)}
                      name={category.categoryName}
                      articles={category.articles}
                      key={category.categoryId} />
  )};
  return (
    <div id="main-content">
      <PageLoading switches={[props.isArticlesDone]} />
      <div id="articles-main">
        <div id="articles-main-columns">
          {props.articles.map(getCategory)}
        </div>
        <Logos />
      </div>
      <BackToTop target="#articles-main"></BackToTop>
    </div>
  )
};

ArticlesContent.propTypes = {
  articles : PropTypes.array.isRequired,
  isArticlesDone : PropTypes.bool.isRequired
};

const mapStateToProps = function (store) {
   return {
     articles: store.articles.list,
     isArticlesDone : store.articles.isDone
   };
};

module.exports = connect(mapStateToProps)(ArticlesContent);
