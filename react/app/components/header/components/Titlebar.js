import React from 'react';
import { connect } from 'react-redux';

import { PAGE_TYPE_STD, PAGE_TYPE_ARTICLE } from '../constants';

const Titlebar = (props) => {
  const getContent = () => {
    if (props.pageType === PAGE_TYPE_STD) {
      return <h1 className="std-title">{props.title}</h1>;
    }
    else if (props.pageType === PAGE_TYPE_ARTICLE) {
      return <h1 className="article-title">{props.articleTitle}</h1>;
    }
  };
  return (
    <div id="main-title-container" style={{'display' : props.isVisible ? 'block' : 'none'}}>
      {getContent()}
    </div>
  );
};

Titlebar.propTypes = {
  isVisible : React.PropTypes.bool.isRequired,
  pageType : React.PropTypes.string.isRequired,
  title : React.PropTypes.string.isRequired,
  articleTitle : React.PropTypes.string.isRequired
};

const mapStateToProps = (store) => ({
  isVisible : store.titlebar.isVisible,
  pageType : store.titlebar.pageType,
  title : store.titlebar.title,
  articleTitle : store.article.title
});

module.exports = connect(mapStateToProps)(Titlebar);
