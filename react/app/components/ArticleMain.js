import React from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';
import store from './store';

var ArticleMain = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    date: React.PropTypes.string.isRequired,
    categoryName: React.PropTypes.string.isRequired,
    categoryId: React.PropTypes.number.isRequired,
    keywords: React.PropTypes.array.isRequired,
    body: React.PropTypes.string.isRequired,
    authorName : React.PropTypes.string.isRequired
  },
  componentWillMount : function ()
  {
    store.dispatch(actions.setThemeWhite());
  },
  render: function () {
    return (
      <div id="main-content">
        <article id="article-main">
          <h5 className="article-infos">
            {this.props.categoryName} • {this.props.date}
          </h5>
          <h2 className="article-title">
            {this.props.title}
          </h2>
          <h3 className="article-author">
            {this.props.authorName}
          </h3>
          <h4 className="article-keywords">
            Mots-clés : {this.props.keywords}
          </h4>
          <div id="article-body">
            {this.props.body}
          </div>
          <footer id="article-footer">
            <h3>
              Pour citer cet article
            </h3>
            <p>
              {this.props.authorName}, {this.props.title}, publié le {this.props.date} <br />
              URL: http://wikicreation.com/articles/{this.props.id}
            </p>
          </footer>
        </article>
      </div>
    );
  }
});

const mapStateToProps = function (store) {
   return {
     title: store.article.title,
     date: store.article.date,
     keywords: store.article.keywords,
     body: store.article.body,
     categoryId : store.article.categoryId,
     categoryName : store.article.categoryName,
     authorName : store.author.name,
     authorPic : store.author.pic,
   };
};

module.exports = connect(mapStateToProps)(ArticleMain);
