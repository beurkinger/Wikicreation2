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
    console.log('yar');
  },
  // shouldComponentUpdate : function () {
  // },
  componentWillUpdate : function (nextProps) {
    // console.log(this.props.params.id);
    // console.log(nextProps.id);
    // console.log(this.props.language);
    // console.log(nextProps.locale);
    // if ((parseInt(this.props.params.id) !== parseInt(nextProps.id))
    // && this.props.language !== nextProps.locale) {
      console.log('yo');
      this.props.setTitlebar();
      getArticle(this.props.params.id);
    // }
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
