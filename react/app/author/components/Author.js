import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {hideAuthorPanel} from '../actions';
import AuthorArticle from './AuthorArticle';
import PageLoading from '../../shared/components/PageLoading';

class Author extends React.Component {
  constructor (props) {
    super(props);
    this.getAuthorPicStyle = this.getAuthorPicStyle.bind(this);
    this.getArticles = this.getArticles.bind(this);
  }
  shouldComponentUpdate (nextProps) {
    if (nextProps.isVisible !== this.props.isVisible) {
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
  getArticles (article) {
    return (
      <AuthorArticle key={article.id}
                      id={article.id}
                      title={article.title}
                      date={article.date}
                      categoryId={article.category[0].id}
                      categoryName={article.category[0].name}
                      handleClick={this.props.hideAuthorPanel}
                      locale={this.props.locale}
                      />
    )
  }
  render () {
    return (
      <div id="author-profile" className={ this.props.isVisible ? 'show' : 'hide' }>
        <PageLoading switches={[this.props.isDone]} />
        <div id="author-profile-exit" className="clickable" onClick={this.props.hideAuthorPanel}></div>
        <div className="author-pic" style={this.getAuthorPicStyle(this.props.pic)} ></div>
        <h2 className="author-name">
          {this.props.name}
        </h2>
        <p className="author-infos">
          {this.props.title}, <br/>
          {this.props.school}
        </p>
        <div className="author-desc">
          <div>
            <span>{this.props.desc}</span>
          </div>
        </div>
        <h2 className="articles">
          {this.props.messages.articles}
        </h2>
        <ul className="articles-list">
          {this.props.articles.map(this.getArticles)}
        </ul>
      </div>
    )
  }
}

Author.propTypes = {
  locale : PropTypes.string.isRequired,
  isVisible : PropTypes.bool.isRequired,
  messages : PropTypes.object.isRequired,
  id : PropTypes.number.isRequired,
  name : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  school : PropTypes.string.isRequired,
  desc : PropTypes.string.isRequired,
  pic : PropTypes.string.isRequired,
  articles : PropTypes.array.isRequired,
  hideAuthorPanel: PropTypes.func.isRequired
};

const mapStateToProps = (store) => ({
  locale : store.messages.locale,
  isDone : store.author.isDone,
  isVisible : store.authorPanel.isVisible,
  messages : store.messages.strings.author.main,
  id: store.author.id,
  name : store.author.name,
  title : store.author.title,
  school : store.author.school,
  desc : store.author.desc,
  pic : store.author.pic,
  articles: store.author.articles
 });

const mapDispatchToProps = (dispatch) => ({
  hideAuthorPanel : () => dispatch(hideAuthorPanel())
});

module.exports = connect (mapStateToProps, mapDispatchToProps) (Author);
