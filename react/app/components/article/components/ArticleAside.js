import React from 'react';
import { connect } from 'react-redux';

import {showAuthorPanel} from '../../author/actions';
import {getAuthor} from '../../author/async';
import Keywords from './Keywords';

const ArticleAside = (props) => {
  const handleAuthorClick = () => {
    getAuthor(props.authorId);
    props.showAuthorPanel();
  };
  return (
    <aside id="main-aside">
      <div className="author" onClick={handleAuthorClick}>
        <img className="author-pic" src={"/img/" + props.authorPic} />
        <div className="author-infos">
          <h3 className="author-name">
            {props.authorName}
          </h3>
          <p className="author-desc">
            {props.authorTitle}
          </p>
        </div>
      </div>
      <div className="info">
        <h2 className="info-title">
          {props.messages.progress}
        </h2>
        <div className="gauge"><div className="percent" style={{'width' : props.percentRead + '%'}}></div></div>
      </div>
      <div className="info">
        <h2 className="info-title">
          {props.messages.keywords}
        </h2>
        <p className="info-desc">
          <Keywords array={props.keywords} />
        </p>
      </div>
      <div className="info">
        <h2 className="info-title">
          {props.messages.download}
        </h2>
        <div className="downloads">
          <a href={'/' + props.pdfFr} target="_blank">
            <img className="download" src="/img/download-fr.svg"/>
          </a>
          <a href={'/' + props.pdfEn} target="_blank">
            <img className="download" src="/img/download-en.svg"/>
          </a>
        </div>
      </div>
    </aside>
  );
};

ArticleAside.propTypes = {
  messages : React.PropTypes.object.isRequired,
  keywords: React.PropTypes.array.isRequired,
  pdfFr : React.PropTypes.string.isRequired,
  pdfEn : React.PropTypes.string.isRequired,
  authorId : React.PropTypes.number.isRequired,
  authorName : React.PropTypes.string.isRequired,
  authorTitle : React.PropTypes.string.isRequired,
  authorPic : React.PropTypes.string.isRequired,
  percentRead : React.PropTypes.number.isRequired,
  showAuthorPanel: React.PropTypes.func.isRequired
};

const mapStateToProps = (store) => ({
  messages : store.messages.strings.article.aside,
  keywords: store.article.keywords,
  pdfFr : store.article.pdfFr,
  pdfEn : store.article.pdfEn,
  authorId : store.author.id,
  authorName : store.author.name,
  authorTitle : store.author.title,
  authorPic : store.author.pic,
  percentRead : store.read
});

const mapDispatchToProps = (dispatch) => ({
    showAuthorPanel: () => dispatch(showAuthorPanel())
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(ArticleAside);
