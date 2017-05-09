import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router/lib/Link';
import { connect } from 'react-redux';

import {hideMenu} from '../actions';
import {getNews} from '../async';

class NewsMenu extends React.Component {
  constructor (props) {
    super(props);
    this.getArticle = this.getArticle.bind(this);
  }
  componentDidMount () {
    getNews();
  }
  shouldComponentUpdate (nextProps) {
    if (this.props.locale !== nextProps.locale) {
      getNews();
    }
    if ( (nextProps.isDone !== this.props.isDone
    || nextProps.isVisible !== this.props.isVisible)
    && nextProps.isVisible) {
      return true;
    }
    return false;
  }
  getArticle (article) {
      return (
        <div className="article" key={article.id}>
          <h3 className="title">
            {article.title}
          </h3>
          <h4 className="author">
            {article.author}
          </h4>
          <p className="description">
            {article.desc}
          </p>
          <Link className="btn link"
                to={"/" + this.props.locale + "/articles/" + article.id}
                onClick={this.props.hideMenu} >
            {this.props.messages.readArticle}
          </Link>
        </div>
      );
  }
  render () {
    return (
      <div id="news-menu">
        <h2 className="menu-title">
          {this.props.messages.newArticles}
        </h2>

        {this.props.articles.map(this.getArticle)}
      </div>
    );
  }
}

NewsMenu.propTypes = {
  locale : PropTypes.string.isRequired,
  messages : PropTypes.object.isRequired,
  articles: PropTypes.array.isRequired,
  isVisible : PropTypes.bool.isRequired
};

const mapStateToProps = (store) => ({
  locale : store.messages.locale,
  messages : store.messages.strings.menu.newsMenu,
  articles : store.news.list,
  isDone : store.news.isDone,
  hideMenu: PropTypes.func.isRequired
});

const mapDispatchToProps = (dispatch) => ({
  hideMenu: () => dispatch(hideMenu())
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(NewsMenu);
