import React from 'react';
import Link from 'react-router/lib/Link';
import { connect } from 'react-redux';

import {hideMenu} from '../actions';
import * as async from '../async';

const NewsMenu = React.createClass({
  propTypes: {
    messages : React.PropTypes.object.isRequired,
    articles: React.PropTypes.array.isRequired
  },
  componentDidMount: () => {
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
          <Link className="btn link"
                to={"/articles/" + article.id}
                onClick={this.props.hideMenu} >
            {this.props.messages.readArticle}
          </Link>
        </div>
      );
  },
  render: function () {
    return (
      <div id="news-menu">
        <h2 className="menu-title">
          {this.props.messages.newArticles}
        </h2>
        {this.props.articles.map(this.createArticle)}
      </div>
    );
  }
});

const mapStateToProps = (store) => ({
  messages : store.messages.strings.menu.newsMenu,
  articles : store.news.articles,
  hideMenu: React.PropTypes.func.isRequired
});

const mapDispatchToProps = (dispatch) => ({
  hideMenu: () => dispatch(hideMenu())
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(NewsMenu);
