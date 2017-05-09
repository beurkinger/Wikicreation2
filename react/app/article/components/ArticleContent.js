import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {setPercentRead} from '../actions';
import {hideTitlebar, showTitlebar} from '../../header/actions';
import {WEBSITE_URL} from '../../config';
import BackToTop from '../../shared/components/BackToTop';
import DateStr from '../../shared/components/DateStr';
import Footnotes from './Footnotes';
import Keywords from './Keywords';
import Summary from './Summary';

class ArticleContent extends React.Component {
  constructor (props) {
    super(props);
    this.body = null;
    this.title = null;
    this.handleScroll = this.handleScroll.bind(this);
  }
  shouldComponentUpdate (nextProps) {
    if (nextProps.id !== this.props.id
    || nextProps.locale !== this.props.locale
    || nextProps.isDone !== this.props.isDone) {
      return true;
    }
    return false;
  }
  componentWillMount () {
    this.props.setPercentRead(0) ;
  }
  handleScroll (e) {
    let container = e.target;
    this.updatePercentRead(container);
    this.updateTitle(container);
  }
  updatePercentRead (container) {
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
  }
  updateTitle (container) {
    //On récupère la référence au titre de l'article
    let title = this.title;
    //Position de la partie supérieure du container
    let mainTop = container.getBoundingClientRect().top;
    //Position  de la partie inférieur du titre
    let titleBottom = title.getBoundingClientRect().bottom;

    if (titleBottom <= mainTop) {
      if (!this.props.isTitlebarVisible) this.props.showTitlebar();
    } else {
      if (this.props.isTitlebarVisible) this.props.hideTitlebar();
    }
  }
  render () {
    return (
      <div id="main-content" onScroll={this.handleScroll}>
        <article id="article-main">
          <header id="article-header">
            <h5 className="article-infos">
              {this.props.categoryName} • <DateStr date={this.props.date} format="month-year" locale={this.props.locale} />
            </h5>
            <h2 className="article-title" ref={(elt) => { this.title = elt }}>
              {this.props.title}
            </h2>
            <h3 className="article-author">
              {this.props.authorName}
            </h3>
            <h6 className="article-author-details">
              {this.props.authorTitle}, {this.props.authorSchool}.
            </h6>
            <hr/>
            <h3 className="detail-title">
              Abstract :
            </h3>
            <p className="detail" dangerouslySetInnerHTML={{__html: this.props.abstract}}>
            </p>
            <h3 className="detail-title">
              {this.props.messages.keywords}
            </h3>
            <p className="detail">
              <Keywords array={this.props.keywords} empty={this.props.keywordsEmpty}/>
            </p>
            <h3 className="detail-title">
              {this.props.messages.summary}
            </h3>
            <Summary summary={this.props.summary} />
            <hr/>
          </header>
          <div id="article-body" dangerouslySetInnerHTML={{__html: this.props.body}} ref={(elt) => { this.body = elt }}></div>
          <footer id="article-footer">
            <Footnotes title={this.props.messages.footnotes} footnotes={this.props.footnotes} />
            <h3>
              {this.props.messages.toQuote}
            </h3>
            <p>
              {this.props.authorName}, {this.props.title}, {this.props.messages.publishedOn} <DateStr date={this.props.date} format="D MMMM YYYY" locale="fr" /> <br />
            URL : {WEBSITE_URL}/{this.props.locale}/articles/{this.props.id}
            </p>
          </footer>
        </article>
        <BackToTop target="#article-main"/>
      </div>
    );
  }
}

ArticleContent.propTypes = {
  messages : PropTypes.object.isRequired,
  locale : PropTypes.string.isRequired,
  id : PropTypes.number.isRequired,
  isDone : PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  authorName : PropTypes.string.isRequired,
  authorTitle : PropTypes.string.isRequired,
  authorSchool : PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  categoryId: PropTypes.number.isRequired,
  abstract: PropTypes.string.isRequired,
  keywords: PropTypes.array.isRequired,
  summary: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  authorName : PropTypes.string.isRequired,
  isTitlebarVisible : PropTypes.bool.isRequired,
  keywordsEmpty : PropTypes.string.isRequired
};

const mapStateToProps = function (store) {
   return {
     messages : store.messages.strings.article.content,
     title: store.article.title,
     date: store.article.date,
     abstract: store.article.abstract,
     summary: store.article.summary,
     body: store.article.body,
     footnotes : store.article.footnotes,
     categoryId : store.article.categoryId,
     categoryName : store.article.categoryName,
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
