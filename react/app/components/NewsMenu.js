import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';

import store from './store';

const NewsMenu = React.createClass({
  propTypes: {
    articles: React.PropTypes.array.isRequired
  },
  componentDidMount: function() {
    fetch('/json/news.json')
    .then((response) => response.json())
    .then((json) => store.dispatch({'type' : 'NEWS_SUCCESS', 'articles' : json}));
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
          <Link className="link" to={"/articles" + article.id}>
            Lire l'article
          </Link>
        </div>
      );
  },
  render: function () {
    return (
      <div id="news-menu">
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
