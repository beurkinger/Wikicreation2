import React from 'react';
import { connect } from 'react-redux';

import Downloads from './Downloads';
import {showAuthorPanel} from '../../author/actions';
import {getAuthor} from '../../author/async';
import Keywords from './Keywords';

const ArticleAside = (props) => {
  const getAuthorPicStyle = (picUrl) => ({
    backgroundImage : 'url(/' + picUrl + ')',
    backgroundSize : 'cover'
   });
  const handleAuthorClick = () => {
    getAuthor(props.authorId);
    props.showAuthorPanel();
  };
  return (
    <aside id="main-aside">
      <div className="author" onClick={handleAuthorClick}>
        <div className="author-pic" style={getAuthorPicStyle(props.authorPic)} ></div>
        <div className="author-infos">
          <h3 className="author-name">
            {props.authorName}
          </h3>
          <p className="author-desc">
            {props.authorTitle}, <br/>
            {props.authorSchool}
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
          {props.messages.downloads.title}
        </h2>
        <Downloads pdfFr={props.pdfFr} pdfEn={props.pdfEn} />
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
  authorSchool : React.PropTypes.string.isRequired,
  authorPic : React.PropTypes.string.isRequired,
  percentRead : React.PropTypes.number.isRequired,
  showAuthorPanel: React.PropTypes.func.isRequired
};

const mapStateToProps = (store) => ({
  messages : store.messages.strings.article.aside,
  keywords: store.article.keywords,
  pdfFr : store.article.pdfFr,
  pdfEn : store.article.pdfEn,
  authorId : store.article.authorId,
  authorName : store.article.authorName,
  authorTitle : store.article.authorTitle,
  authorSchool : store.article.authorSchool,
  authorPic : store.article.authorPic,
  percentRead : store.read
});

const mapDispatchToProps = (dispatch) => ({
    showAuthorPanel: () => dispatch(showAuthorPanel())
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(ArticleAside);
