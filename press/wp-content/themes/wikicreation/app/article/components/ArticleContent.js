import React from 'react';
import { connect } from 'react-redux';

import {setPercentRead} from '../actions';
import {hideTitlebar, showTitlebar} from '../../header/actions';
import {WEBSITE_URL} from '../../config';
import DateStr from '../../shared/components/DateStr';
import Keywords from './Keywords';

const ArticleContent = React.createClass({
  propTypes: {
    messages : React.PropTypes.object.isRequired,
    locale : React.PropTypes.string.isRequired,
    id : React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    date: React.PropTypes.string.isRequired,
    categoryName: React.PropTypes.string.isRequired,
    categoryId: React.PropTypes.number.isRequired,
    keywords: React.PropTypes.array.isRequired,
    body: React.PropTypes.string.isRequired,
    authorName : React.PropTypes.string.isRequired,
    isTitlebarVisible : React.PropTypes.bool.isRequired
  },
  componentWillMount : function () {
    this.body = null;
    this.title = null;
    this.props.setPercentRead(0) ;
  },
  handleScroll : function (e) {
    let container = e.target;
    this.updatePercentRead(container);
    this.updateTitle(container);
  },
  updatePercentRead : function (container) {
    //On récupère la référence au corps du texte de l'article
    let body = this.body;
    //Distance entre le haut de la fenetre et le container
    let mainTop = container.getBoundingClientRect().top;
    //Position de départ du corps de texte
    let startPos = body.offsetTop + mainTop;
    //Distance à pacourir
    let distanceToScroll = body.offsetHeight - window.innerHeight + startPos;
    //Position actuelle du corps de texte
    let currPos = body.getBoundingClientRect().top;
    //Distance parcourue
    let distanceScrolled = startPos - currPos;
    //Pourcentage parcouru
    let percent = (distanceScrolled / distanceToScroll) * 100;
    //On limite le pourcentage à 100
    percent = percent > 100 ? 100 : percent;
    this.props.setPercentRead(percent);
  },
  updateTitle: function (container) {
    //On récupère la référence au titre de l'article
    let title = this.title;
    //Position de la partie supérieure du container
    let mainTop = container.getBoundingClientRect().top;
    //Position  de la partie inférieur du titre
    let titleBottom = title.getBoundingClientRect().bottom;

    if (titleBottom <= mainTop)
    {
      if (!this.props.isTitlebarVisible) this.props.showTitlebar();
    }
    else
    {
      if (this.props.isTitlebarVisible) this.props.hideTitlebar();
    }
  },
  render: function () {
    return (
      <div id="main-content" onScroll={this.handleScroll}>
        <article id="article-main">
          <h5 className="article-infos">
            {this.props.categoryName} • <DateStr date={this.props.date} format="month-year" locale={this.props.locale} />
          </h5>
          <h2 className="article-title" ref={(elt) => { this.title = elt }}>
            {this.props.title}
          </h2>
          <h3 className="article-author">
            {this.props.authorName}
          </h3>
          <h4 className="article-keywords">
            {this.props.messages.keywords} <Keywords array={this.props.keywords} />
          </h4>
          <div id="article-body" dangerouslySetInnerHTML={{__html: this.props.body}} ref={(elt) => { this.body = elt }}></div>
          <footer id="article-footer">
            <h3>
              {this.props.messages.toQuote}
            </h3>
            <p>
              {this.props.authorName}, {this.props.title}, {this.props.messages.publishedOn} <DateStr date={this.props.date} format="D MMMM YYYY" locale="fr" /> <br />
            URL : {WEBSITE_URL}/{this.props.locale}/articles/{this.props.id}
            </p>
          </footer>
        </article>
      </div>
    );
  }
});

const mapStateToProps = function (store) {
   return {
     messages : store.messages.strings.article.content,
     locale : store.messages.locale,
     id : store.article.id,
     title: store.article.title,
     date: store.article.date,
     keywords: store.article.keywords,
     body: store.article.body,
     categoryId : store.article.categoryId,
     categoryName : store.article.categoryName,
     authorName : store.article.authorName,
     isTitlebarVisible : store.titlebar.isVisible
   };
};

const mapDispatchToProps = function(dispatch) {
  return {
    setPercentRead: (percent) => dispatch(setPercentRead(percent)),
    hideTitlebar: () => dispatch(hideTitlebar()),
    showTitlebar: () => dispatch(showTitlebar())
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(ArticleContent);
