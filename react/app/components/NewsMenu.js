import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import * as actions from './actions';
import * as async from './async';

const NewsMenu = React.createClass({
  propTypes: {
    articles: React.PropTypes.array.isRequired
  },
  componentDidMount: function() {
    async.getNews();
  },
  createArticle: function(article) {
      return (
        <div className="article" key={article.id}>
          <h3 className="title">
            {article.title}
          </h3>
          <h4 className="author">
            {article.author}
          </h4>
          <p className="description">
            {article.desc}
          </p>
          <Link className="link" to={"/articles/" + article.id}>
            Lire l'article
          </Link>
        </div>
      );
  },
  render: function () {
    return (
      <div id="news-menu">
        <h2 className="menu-title">
          Récemment parus
        </h2>
        {this.props.articles.map(this.createArticle)}
      </div>
    );
  }
});

const mapStateToProps = function (store) {
   return {
     articles : store.news.articles
   };
};

module.exports = connect(mapStateToProps)(NewsMenu);
