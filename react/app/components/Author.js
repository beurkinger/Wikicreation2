import React from 'react';
import {connect} from 'react-redux';

import * as actions from './actions';
import AuthorCategory from './AuthorCategory';

const Author = React.createClass({
  propTypes : {
    id : React.PropTypes.number.isRequired,
    isVisible : React.PropTypes.bool.isRequired,
    name : React.PropTypes.string.isRequired,
    title : React.PropTypes.string.isRequired,
    desc : React.PropTypes.string.isRequired,
    pic : React.PropTypes.string.isRequired,
    articles : React.PropTypes.array.isRequired,
    hideAuthorPanel: React.PropTypes.func.isRequired
  },
  getCategories : function (category)
  {
    return <AuthorCategory key={category.categoryId} id={category.categoryId} name={category.categoryName} articles={category.articles} />;
  },
  render: function () {
    return (
      <div id="author-profile" style ={{'display' : (this.props.isVisible ? 'block' : 'none') }}>
        <img id="author-profile-exit" className="clickable" src="/img/author-profile-exit.svg" onClick={this.props.hideAuthorPanel} />
        <img className="author-pic" src={"/img/" + this.props.pic} />
        <h2 className="author-name">
          {this.props.name}
        </h2>
        <p className="author-infos">
          {this.props.title}
        </p>
        <p className="author-desc">
          {this.props.desc}
        </p>
        <h2 className="articles">
          Articles
        </h2>
        {this.props.articles.map(this.getCategories)}
      </div>
    )
  }
});

const mapStateToProps = function (store) {
   return {
     isVisible : store.authorPanel.isVisible,
     id: store.author.id,
     name : store.author.name,
     title : store.author.title,
     desc : store.author.desc,
     pic : store.author.pic,
     articles: store.authorArticles.articles
   };
};

const mapDispatchToProps = function(dispatch) {
  return {
    hideAuthorPanel: function() {
      dispatch(actions.hideAuthorPanel());
    }
  }
};

module.exports = connect (mapStateToProps, mapDispatchToProps) (Author);
