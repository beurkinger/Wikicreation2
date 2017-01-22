import React from 'react';
import {connect} from 'react-redux';

import ArticlesCategory from './ArticlesCategory';

const ArticlesContent = (props) => {
  const getCategory = (category) => (
    <ArticlesCategory id={category.categoryId}
                      name={category.categoryName}
                      articles={category.articles}
                      key={category.categoryId} />
  );
  return (
    <div id="main-content">
      <div id="articles-main">
        {props.articles.map(getCategory)}
      </div>
    </div>
  )
};

ArticlesContent.propTypes = {
  articles : React.PropTypes.array.isRequired,
};

const mapStateToProps = function (store) {
   return {
     articles: store.articles.list
   };
};

module.exports = connect(mapStateToProps)(ArticlesContent);
