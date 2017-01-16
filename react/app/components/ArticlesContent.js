import React from 'react';
import {connect} from 'react-redux';

import ArticlesCategory from './ArticlesCategory';

const Articles = React.createClass({
  propTypes : {
    articles : React.PropTypes.array.isRequired,
  },
  render: function () {
    return (
      <div id="main-content">
        <div id="articles-main">
          <ArticlesCategory />
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

module.exports = connect(mapStateToProps)(Articles);
