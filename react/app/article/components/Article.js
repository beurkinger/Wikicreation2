import React from 'react';
import {connect} from 'react-redux';

import {getArticle} from '../async';
import {setArticleTitlebar} from '../../header/actions';
import ArticleAside from './ArticleAside';
import ArticleContent from './ArticleContent';
import PageLoading from '../../shared/components/PageLoading';

const Article = React.createClass({
  componentWillMount : function () {
    getArticle(this.props.params.id);
    this.props.setTitlebar();
  },
  componentWillUpdate : function (nextProps) {
    this.props.setTitlebar();
    if (parseInt(this.props.params.id) !== parseInt(nextProps.params.id)
    || this.props.locale !== nextProps.locale) {
      getArticle(nextProps.params.id);
    }
  },
  render: function () {
    return (
      <main id="main-container">
        <PageLoading switches={[this.props.isDone]} />
        <ArticleAside />
        <ArticleContent />
      </main>
    )
  }
});

const mapStateToProps = (store) => ({
  isDone : store.article.isDone,
  id : store.article.id,
  language : store.article.language,
  locale : store.messages.locale
});

const mapDispatchToProps = (dispatch) => ({
  setTitlebar: () => dispatch(setArticleTitlebar())
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Article);
