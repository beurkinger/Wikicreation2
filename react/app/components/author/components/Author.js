import React from 'react';
import {connect} from 'react-redux';

import {hideAuthorPanel} from '../actions';
import AuthorArticle from './AuthorArticle';

const Author = (props) => {
  const getArticles = (article) => (
    <AuthorArticle key={article.id}
                    id={article.id}
                    title={article.title}
                    date={article.date}
                    categoryId={article.category.id}
                    categoryName={article.category.name}
                    handleClick={props.hideAuthorPanel}
                    />
  );
  return (
    <div id="author-profile" style ={{'display' : (props.isVisible ? 'block' : 'none') }}>
      <img id="author-profile-exit" className="clickable" src="/img/author-profile-exit.svg" onClick={props.hideAuthorPanel} />
      <img className="author-pic" src={"/img/" + props.pic} />
      <h2 className="author-name">
        {props.name}
      </h2>
      <p className="author-infos">
        {props.title}
      </p>
      <p className="author-desc">
        {props.desc}
      </p>
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
  isVisible : React.PropTypes.bool.isRequired,
  messages : React.PropTypes.object.isRequired,
  id : React.PropTypes.number.isRequired,
  name : React.PropTypes.string.isRequired,
  title : React.PropTypes.string.isRequired,
  desc : React.PropTypes.string.isRequired,
  pic : React.PropTypes.string.isRequired,
  articles : React.PropTypes.array.isRequired,
  hideAuthorPanel: React.PropTypes.func.isRequired
};

const mapStateToProps = (store) => ({
   isVisible : store.authorPanel.isVisible,
   messages : store.messages.strings.author.main,
   id: store.author.id,
   name : store.author.name,
   title : store.author.title,
   desc : store.author.desc,
   pic : store.author.pic,
   articles: store.authorArticles.articles
 });

const mapDispatchToProps = (dispatch) => ({
  hideAuthorPanel : () => dispatch(hideAuthorPanel())
});

module.exports = connect (mapStateToProps, mapDispatchToProps) (Author);
