import React from 'react';
import {connect} from 'react-redux';

import {getArticle} from '../async';
import {setArticleTitlebar} from '../../header/actions';
import ArticleAside from './ArticleAside';
import ArticleContent from './ArticleContent';
import PageLoading from '../../shared/components/PageLoading';

class Article extends React.Component {
  componentWillMount () {
    getArticle(this.props.params.id);
    this.props.setTitlebar();
  }
  shouldComponentUpdate (nextProps) {
    this.props.setTitlebar();
    if (parseInt(this.props.params.id) !== parseInt(nextProps.params.id)
    || this.props.locale !== nextProps.locale) {
      getArticle(nextProps.params.id);
    }
    if (nextProps.id !== this.props.id
    || nextProps.locale !== nextProps.locale
    || nextProps.isDone !== this.props.isDone) {
      return true;
    }
    return false;
  }
  render () {
    return (
      <main id="main-container">
        <PageLoading switches={[this.props.isDone]} />
        <ArticleAside locale={this.props.locale}
                      id={this.props.id}
                      isDone={this.props.isDone}
                      authorName={this.props.authorName}
                      authorTitle={this.props.authorTitle}
                      authorSchool={this.props.authorSchool}
                      keywords={this.props.keywords}
                      keywordsEmpty={this.props.keywordsEmpty} />
        <ArticleContent locale={this.props.locale}
                        id={this.props.id}
                        isDone={this.props.isDone}
                        authorName={this.props.authorName}
                        authorTitle={this.props.authorTitle}
                        authorSchool={this.props.authorSchool}
                        keywords={this.props.keywords}
                        keywordsEmpty={this.props.keywordsEmpty} />
      </main>
    )
  }
}

const mapStateToProps = (store) => ({
  isDone : store.article.isDone,
  id : store.article.id,
  language : store.article.language,
  locale : store.messages.locale,
  authorName : store.article.authorName,
  authorTitle : store.article.authorTitle,
  authorSchool : store.article.authorSchool,
  keywords: store.article.keywords,
  keywordsEmpty : store.messages.strings.article.keywords.empty

});

const mapDispatchToProps = (dispatch) => ({
  setTitlebar: () => dispatch(setArticleTitlebar())
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Article);
