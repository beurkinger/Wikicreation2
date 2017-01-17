import React from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';
import * as async from './async';
import Keywords from './Keywords';
import store from './store';

const ArticleAside = React.createClass({
  propTypes: {
    keywords: React.PropTypes.array.isRequired,
    pdfFr : React.PropTypes.string.isRequired,
    pdfEn : React.PropTypes.string.isRequired,
    authorId : React.PropTypes.number.isRequired,
    authorName : React.PropTypes.string.isRequired,
    authorTitle : React.PropTypes.string.isRequired,
    authorPic : React.PropTypes.string.isRequired,
    percentRead : React.PropTypes.number.isRequired,
    showAuthorPanel: React.PropTypes.func.isRequired
  },
  handleAuthorClick : function () {
    async.getAuthor(this.props.authorId);
    this.props.showAuthorPanel();
  },
  render: function () {
    return (
      <aside id="main-aside">
        <div className="author" onClick={this.handleAuthorClick}>
          <img className="author-pic" src={"/img/" + this.props.authorPic} />
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
            Navigation sur l'article
          </h2>
          <div className="gauge"><div className="percent" style={{'width' : this.props.percentRead + '%'}}></div></div>
        </div>
        <div className="info">
          <h2 className="info-title">
            Mots clefs de l'article
          </h2>
          <p className="info-desc">
            <Keywords array={this.props.keywords} />
          </p>
        </div>
        <div className="info">
          <h2 className="info-title">
            Téléchargement
          </h2>
          <div className="downloads">
            <a href={'/' + this.props.pdfFr} target="_blank">
              <img className="download" src="/img/download-fr.svg"/>
            </a>
            <a href={'/' + this.props.pdfEn} target="_blank">
              <img className="download" src="/img/download-en.svg"/>
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
     pdfFr : store.article.pdfFr,
     pdfEn : store.article.pdfEn,
     authorId : store.author.id,
     authorName : store.author.name,
     authorTitle : store.author.title,
     authorPic : store.author.pic,
     percentRead : store.read
   };
};

const mapDispatchToProps = function(dispatch) {
  return {
    showAuthorPanel: function() {
      dispatch(actions.showAuthorPanel());
    }
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(ArticleAside);
