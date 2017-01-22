import React from 'react';
import {connect} from 'react-redux';

import {getArticle} from '../async';
import {setArticleTitlebar} from '../../header/actions';
import ArticleAside from './ArticleAside';
import ArticleContent from './ArticleContent';

const Article = React.createClass({
  componentWillMount : function () {
    getArticle(this.props.params.id);
    this.props.setTitlebar();
  },
  render: () => (
    <main id="main-container">
      <ArticleAside />
      <ArticleContent />
    </main>
  )
});

const mapDispatchToProps = (dispatch) => ({
  setTitlebar: () => dispatch(setArticleTitlebar())
});

module.exports = connect(null, mapDispatchToProps)(Article);
