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
  componentWillUpdate : function () {
    console.log('yo');
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
  isDone : store.article.isDone
});

const mapDispatchToProps = (dispatch) => ({
  setTitlebar: () => dispatch(setArticleTitlebar())
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Article);
