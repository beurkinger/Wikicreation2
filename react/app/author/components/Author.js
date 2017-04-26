import React from 'react';
import {connect} from 'react-redux';

import {hideAuthorPanel} from '../actions';
import AuthorArticle from './AuthorArticle';
import PageLoading from '../../shared/components/PageLoading';

const Author = (props) => {
  const getAuthorPicStyle = (picUrl) => ({
    backgroundImage : 'url(/' + picUrl + ')',
    backgroundSize : 'cover'
   });
  const getArticles = (article) => (
    <AuthorArticle key={article.id}
                    id={article.id}
                    title={article.title}
                    date={article.date}
                    categoryId={article.category[0].id}
                    categoryName={article.category[0].name}
                    handleClick={props.hideAuthorPanel}
                    locale={props.locale}
                    />
  );
  return (
    <div id="author-profile" className={ props.isVisible ? 'show' : 'hide' }>
      <PageLoading switches={[props.isDone]} />
      <div id="author-profile-exit" className="clickable" onClick={props.hideAuthorPanel}></div>
      <div className="author-pic" style={getAuthorPicStyle(props.pic)} ></div>
      <h2 className="author-name">
        {props.name}
      </h2>
      <p className="author-infos">
        {props.title}, <br/>
        {props.school}
      </p>
      <div className="author-desc">
        <div>
          <span>{props.desc}</span>
        </div>
      </div>
      <h2 className="articles">
        {props.messages.articles}
      </h2>
      <ul className="articles-list">
        {props.articles.map(getArticles)}
      </ul>
    </div>
  )
};

Author.propTypes = {
  locale : React.PropTypes.string.isRequired,
  isVisible : React.PropTypes.bool.isRequired,
  messages : React.PropTypes.object.isRequired,
  id : React.PropTypes.number.isRequired,
  name : React.PropTypes.string.isRequired,
  title : React.PropTypes.string.isRequired,
  school : React.PropTypes.string.isRequired,
  desc : React.PropTypes.string.isRequired,
  pic : React.PropTypes.string.isRequired,
  articles : React.PropTypes.array.isRequired,
  hideAuthorPanel: React.PropTypes.func.isRequired
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
