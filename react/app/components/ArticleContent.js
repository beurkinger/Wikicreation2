import React from 'react';
import { connect } from 'react-redux';

import * as actions from './actions';
import {WEBSITE_URL} from './constants';
import DateStr from './DateStr';
import Keywords from './Keywords';
import store from './store';

const ArticleContent = React.createClass({
  propTypes: {
    id : React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    date: React.PropTypes.string.isRequired,
    categoryName: React.PropTypes.string.isRequired,
    categoryId: React.PropTypes.number.isRequired,
    keywords: React.PropTypes.array.isRequired,
    body: React.PropTypes.string.isRequired,
    authorName : React.PropTypes.string.isRequired,
  },
  componentWillMount : function () { this.props.dispatchPercentRead(0) },
  websiteUrl : WEBSITE_URL,
  body : null,
  handleScroll : function (e) {
    //Distance entre le haut de la fenetre et le container
    let mainTop = e.target.getBoundingClientRect().top;
    //Position de départ du corps de texte
    let startPos = this.body.offsetTop + mainTop;
    //Distance à pacourir
    let distanceToScroll = this.body.offsetHeight - window.innerHeight + startPos;
    //Position actuelle du corps de texte
    let currPos = this.body.getBoundingClientRect().top;
    //Distance parcourue
    let distanceScrolled = startPos - currPos;
    //Pourcentage parcouru
    let percent = (distanceScrolled / distanceToScroll) * 100;
    //On limite le pourcentage à 100
    percent = percent > 100 ? 100 : percent;
    this.props.dispatchPercentRead(percent);
  },
  render: function () {
    return (
      <div id="main-content" onScroll={this.handleScroll}>
        <article id="article-main">
          <h5 className="article-infos">
            {this.props.categoryName} • <DateStr date={this.props.date} format="MMMM YYYY" locale="fr" />
          </h5>
          <h2 className="article-title">
            {this.props.title}
          </h2>
          <h3 className="article-author">
            {this.props.authorName}
          </h3>
          <h4 className="article-keywords">
            Mots-clés : <Keywords array={this.props.keywords} />
          </h4>
          <div id="article-body" dangerouslySetInnerHTML={{__html: this.props.body}} ref={(elt) => { this.body = elt }}></div>
          <footer id="article-footer">
            <h3>
              Pour citer cet article
            </h3>
            <p>
              {this.props.authorName}, {this.props.title}, publié le <DateStr date={this.props.date} format="D MMMM YYYY" locale="fr" /> <br />
              URL : {this.websiteUrl}/articles/{this.props.id}
            </p>
          </footer>
        </article>
      </div>
    );
  }
});

const mapStateToProps = function (store) {
   return {
     id : store.article.id,
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

const mapDispatchToProps = function(dispatch) {
  return {
    dispatchPercentRead: function(percent) {
      dispatch(actions.setPercentRead(percent));
    }
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(ArticleContent);
