import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Downloads from './Downloads';
import Gauge from './Gauge';
import {showAuthorPanel} from '../../author/actions';
import {getAuthor} from '../../author/async';
import Keywords from './Keywords';

class ArticleAside extends React.Component {
  constructor (props) {
    super(props);
    this.handleAuthorClick = this.handleAuthorClick.bind(this);
  }
  shouldComponentUpdate (nextProps) {
    if (nextProps.id !== this.props.id
    || nextProps.locale !== this.props.locale
    || nextProps.isDone !== this.props.isDone) {
      return true;
    }
    return false;
  }
  getAuthorPicStyle (picUrl) {
    return {
      backgroundImage : 'url(/' + picUrl + ')',
      backgroundSize : 'cover'
     }
  }
  handleAuthorClick () {
    getAuthor(this.props.authorId, this.props.showAuthorPanel);
  }
  render () {
    return (
      <aside id="main-aside">
        <div className="author" onClick={this.handleAuthorClick}>
          <div className="author-pic" style={this.getAuthorPicStyle(this.props.authorPic)} ></div>
          <div className="author-infos">
            <h3 className="author-name">
               {this.props.authorName}
            </h3>
            <p className="author-desc">
               {this.props.authorTitle}, {this.props.authorSchool}
            </p>
          </div>
        </div>
        <div className="info">
          <h2 className="info-title">
             {this.props.messages.progress}
          </h2>
          <Gauge />
        </div>
        <div className="info">
          <h2 className="info-title">
             {this.props.messages.keywords}
          </h2>
          <p className="info-desc">
            <Keywords array={this.props.keywords} empty={this.props.keywordsEmpty} />
          </p>
        </div>
        <div className="info">
          <h2 className="info-title">
             {this.props.messages.downloads.title}
          </h2>
          <Downloads pdfFr= {this.props.pdfFr} pdfEn= {this.props.pdfEn} empty= {this.props.downloadsEmpty} />
        </div>
      </aside>
    )
  }
}

ArticleAside.propTypes = {
  messages : PropTypes.object.isRequired,
  keywords: PropTypes.array.isRequired,
  pdfFr : PropTypes.string.isRequired,
  pdfEn : PropTypes.string.isRequired,
  authorId : PropTypes.number.isRequired,
  authorName : PropTypes.string.isRequired,
  authorTitle : PropTypes.string.isRequired,
  authorSchool : PropTypes.string.isRequired,
  authorPic : PropTypes.string.isRequired,
  showAuthorPanel: PropTypes.func.isRequired,
  downloadsEmpty : PropTypes.string.isRequired,
  keywordsEmpty : PropTypes.string.isRequired
};

const mapStateToProps = (store) => ({
  messages : store.messages.strings.article.aside,
  pdfFr : store.article.pdfFr,
  pdfEn : store.article.pdfEn,
  authorId : store.article.authorId,
  authorPic : store.article.authorPic,
  downloadsEmpty : store.messages.strings.article.aside.downloads.empty
});

const mapDispatchToProps = (dispatch) => ({
    showAuthorPanel: () => dispatch(showAuthorPanel())
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(ArticleAside);
