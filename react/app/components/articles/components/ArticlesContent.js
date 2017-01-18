import React from 'react';
import {connect} from 'react-redux';

import ArticlesCategory from './ArticlesCategory';

const ArticlesContent = React.createClass({
  propTypes : {
    articles : React.PropTypes.array.isRequired,
  },
  getCategory : (category) => (
    <ArticlesCategory id={category.categoryId}
                      name={category.categoryName}
                      articles={category.articles}
                      key={category.categoryId} />
  ),
  render: function () {
    return (
      <div id="main-content">
        <div id="articles-main">
          {this.props.articles.map(this.getCategory)}
        </div>
      </div>
    )
  }
});

const mapStateToProps = function (store) {
   return {
     articles: store.articles.list
   };
};

module.exports = connect(mapStateToProps)(ArticlesContent);
