import React from 'react';
import { connect } from 'react-redux';

import store from './store';
import * as actions from './actions';

var ArticleAside = React.createClass({
  propTypes: {
    keywords: React.PropTypes.array.isRequired,
    authorId : React.PropTypes.number.isRequired,
    authorName : React.PropTypes.string.isRequired,
    authorTitle : React.PropTypes.string.isRequired,
    authorPic : React.PropTypes.string.isRequired,
  },
  render: function () {
    return (
      <aside id="main-aside">
        <div className="author">
          <img className="author-pic" src="img/author-pic.jpg"/>
          <div className="author-infos">
            <h3 className="author-name">
              {this.props.authorName}
            </h3>
            <p className="author-desc">
              {this.props.authorTitle}
            </p>
          </div>
        </div>
        <div className="info">
          <h2 className="info-title">
            Mots clefs de l'article
          </h2>
          <p className="info-desc">
            {this.props.keywords}
          </p>
        </div>
        <div className="info">
          <h2 className="info-title">
            Navigation sur l'article
          </h2>
          <div className="gauge"><div className="percent" style={{'width' : '60%'}}></div></div>
        </div>
        <div className="info">
          <h2 className="info-title">
            Téléchargement
          </h2>
          <div className="downloads">
            <a href="#">
              <img className="download" src="img/download-fr.svg"/>
            </a>
            <a href="#">
              <img className="download" src="img/download-en.svg"/>
            </a>
          </div>
        </div>
      </aside>
    );
  }
});

const mapStateToProps = function (store) {
   return {
     keywords: store.article.keywords,
     authorId : store.author.id,
     authorName : store.author.name,
     authorTitle : store.author.title,
     authorPic : store.author.pic,
   };
};

const mapDispatchToProps = function(dispatch) {
  return {
    showAuthor: function() {
      dispatch(actions.showAuthor());
    }
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(ArticleAside);
